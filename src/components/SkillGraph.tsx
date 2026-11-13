"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export interface GraphNode {
  id: string;
  title: string;
  area: string;
  areaLabel: string;
  areaColor: string;
  /** Posición del área en el orden de presentación (desempata columnas). */
  areaOrder: number;
  level: number;
  state: "completed" | "available" | "locked";
  hasChallenge: boolean;
  prerequisites: string[];
}

const ESTADO: Record<GraphNode["state"], string> = {
  completed: "Completado",
  available: "Disponible",
  locked: "Bloqueado",
};

const ANCHO = 200;
const PASO_X = 232;
const PASO_Y = 132;

type FlowNode = Node<{ node: GraphNode }, "nodo">;

function NodoArbol({ data }: NodeProps<FlowNode>) {
  const { node } = data;
  const estado = node.state === "available" && !node.hasChallenge ? "Disponible, sin reto aún" : ESTADO[node.state];
  return (
    <>
      <Handle type="target" position={Position.Top} isConnectable={false} />
      <Link
        href={`/nodo/${node.id}`}
        prefetch={false}
        className="nodo nodrag nopan"
        data-estado={node.state}
        style={{ "--color-area": node.areaColor } as React.CSSProperties}
        aria-label={`${node.title}. ${node.areaLabel}. ${estado}`}
      >
        <span className="nodo-titulo">{node.title}</span>
        <span className="nodo-estado">{estado}</span>
      </Link>
      <Handle type="source" position={Position.Bottom} isConnectable={false} />
    </>
  );
}

const nodeTypes = { nodo: NodoArbol };

/** Disposición por capas: fila = trunk_level, columnas ordenadas por área y centradas. */
function layout(nodes: GraphNode[]): { flowNodes: FlowNode[]; edges: Edge[] } {
  const rows = new Map<number, GraphNode[]>();
  for (const n of nodes) rows.set(n.level, [...(rows.get(n.level) ?? []), n]);

  const flowNodes: FlowNode[] = [];
  const xOf = new Map<string, number>();
  // Cada fila se ordena por el baricentro de sus prerequisitos (ya colocados en filas
  // superiores) para reducir cruces; el área desempata y agrupa disciplinas.
  const bary = (n: GraphNode) => {
    const xs = n.prerequisites.map((p) => xOf.get(p)).filter((x) => x !== undefined);
    return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0;
  };
  for (const level of [...rows.keys()].sort((a, b) => a - b)) {
    const row = rows.get(level)!;
    const key = new Map(row.map((n) => [n.id, bary(n)]));
    row.sort(
      (a, b) =>
        key.get(a.id)! - key.get(b.id)! ||
        a.areaOrder - b.areaOrder ||
        a.title.localeCompare(b.title, "es"),
    );
    row.forEach((node, i) => {
      xOf.set(node.id, (i - (row.length - 1) / 2) * PASO_X);
      flowNodes.push({
        id: node.id,
        type: "nodo",
        position: { x: (i - (row.length - 1) / 2) * PASO_X - ANCHO / 2, y: level * PASO_Y },
        data: { node },
        draggable: false,
        selectable: false,
        focusable: false, // el foco de teclado va al enlace interior
      });
    });
  }

  const byId = new Map(nodes.map((n) => [n.id, n]));
  const edges: Edge[] = [];
  for (const n of nodes) {
    for (const pre of n.prerequisites) {
      const from = byId.get(pre);
      if (!from) continue;
      const done = from.state === "completed";
      edges.push({
        id: `${pre}>${n.id}`,
        source: pre,
        target: n.id,
        focusable: false,
        style: {
          stroke: done ? "var(--menta)" : "var(--trazo-fuerte)",
          strokeWidth: done ? 1.75 : 1,
          strokeDasharray: done ? undefined : "4 4",
        },
      });
    }
  }
  return { flowNodes, edges };
}

export default function SkillGraph({ nodes }: { nodes: GraphNode[] }) {
  const { flowNodes, edges } = useMemo(() => layout(nodes), [nodes]);

  return (
    <div className="plano">
      <ReactFlow
        nodes={flowNodes}
        edges={edges}
        nodeTypes={nodeTypes}
        colorMode="dark"
        fitView
        fitViewOptions={{ padding: 0.08 }}
        minZoom={0.2}
        maxZoom={1.75}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        aria-label="Árbol de habilidades"
      >
        <Background variant={BackgroundVariant.Lines} gap={32} color="rgba(214, 228, 243, 0.06)" />
        <Controls showInteractive={false} position="bottom-left" />
      </ReactFlow>
    </div>
  );
}
