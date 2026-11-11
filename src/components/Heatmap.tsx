import { dayKey } from "@/lib/progress";

const SEMANAS = 26;

const nivel = (n: number) => (n === 0 ? 0 : n < 3 ? 1 : n < 6 ? 2 : n < 10 ? 3 : 4);

/** Mapa de actividad: una columna por semana (lunes arriba), últimas 26 semanas. */
export default function Heatmap({ days }: { days: Record<string, number> }) {
  const today = new Date();
  const start = new Date(today);
  // Retrocede al lunes de hace SEMANAS-1 semanas.
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7) - (SEMANAS - 1) * 7);

  const cells = [];
  for (let i = 0; i < SEMANAS * 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const key = dayKey(d);
    const n = days[key] ?? 0;
    cells.push(
      d > today ? (
        <i key={key} data-futuro />
      ) : (
        <i key={key} data-n={nivel(n)} title={`${key}: ${n} ${n === 1 ? "evento" : "eventos"}`} />
      ),
    );
  }

  const total = Object.values(days).reduce((a, b) => a + b, 0);
  return (
    <>
      <div className="calor" role="img" aria-label={`Actividad de las últimas ${SEMANAS} semanas: ${total} eventos`}>
        {cells}
      </div>
      <p className="nota">
        {total === 0
          ? "Sin actividad todavía. Abrir un nodo o enviar una flag cuenta."
          : `${total} ${total === 1 ? "evento" : "eventos"} en las últimas ${SEMANAS} semanas.`}
      </p>
    </>
  );
}
