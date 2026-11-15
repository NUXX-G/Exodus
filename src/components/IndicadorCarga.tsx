"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Respuesta inmediata al pulsar un enlace interno: una barra de progreso arriba y un aviso «Cargando…» hasta que
 * llega la página nueva. Sin esto, mientras el servidor prepara un nodo la página parecía no hacer caso.
 * También cierra el menú móvil al navegar.
 */
export default function IndicadorCarga() {
  const pathname = usePathname();
  const params = useSearchParams();
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(false);
    for (const d of document.querySelectorAll<HTMLDetailsElement>("details.menu-movil[open]")) d.open = false;
  }, [pathname, params]);

  useEffect(() => {
    let reloj: number | undefined;
    const alPulsar = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || !a.href || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname.startsWith("/api/")) return;
      if (url.pathname === location.pathname && url.search === location.search) return; // ancla en la misma página
      setCargando(true);
      window.clearTimeout(reloj);
      reloj = window.setTimeout(() => setCargando(false), 30000); // por si la navegación falla
    };
    document.addEventListener("click", alPulsar);
    return () => {
      document.removeEventListener("click", alPulsar);
      window.clearTimeout(reloj);
    };
  }, []);

  return (
    <div className="indicador-carga" data-activo={cargando ? "si" : undefined} role="status" aria-live="polite">
      {cargando && (
        <>
          <span className="indicador-barra" aria-hidden="true" />
          <span className="indicador-texto">Cargando…</span>
        </>
      )}
    </div>
  );
}
