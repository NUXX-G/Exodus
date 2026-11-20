import { dayKey } from "@/lib/progress";

const SEMANAS = 26;

const nivel = (n: number) => (n === 0 ? 0 : n < 3 ? 1 : n < 6 ? 2 : n < 10 ? 3 : 4);
/** Con tiempo registrado, la intensidad sale de los minutos: 1-29, 30-59, 60-119, 120 o más. */
const nivelMin = (m: number) => (m === 0 ? 0 : m < 30 ? 1 : m < 60 ? 2 : m < 120 ? 3 : 4);
const hm = (m: number) => (m >= 60 ? `${Math.floor(m / 60)} h ${m % 60} min` : `${m} min`);

/** Mapa de actividad: una columna por semana (lunes arriba), últimas 26 semanas. */
export default function Heatmap({ days, minutos = {} }: { days: Record<string, number>; minutos?: Record<string, number> }) {
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
    const m = minutos[key] ?? 0;
    cells.push(
      d > today ? (
        <i key={key} data-futuro />
      ) : (
        <i key={key} data-n={Math.max(nivel(n), nivelMin(m))} title={`${key}: ${n} ${n === 1 ? "evento" : "eventos"}${m ? ` · ${hm(m)} de estudio` : ""}`} />
      ),
    );
  }

  const total = Object.values(days).reduce((a, b) => a + b, 0);
  const totalMin = Object.values(minutos).reduce((a, b) => a + b, 0);
  return (
    <>
      <div className="calor" role="img" aria-label={`Actividad de las últimas ${SEMANAS} semanas: ${total} eventos`}>
        {cells}
      </div>
      <p className="nota">
        {total === 0
          ? "Sin actividad todavía. Abrir un nodo o enviar una flag cuenta."
          : `${total} ${total === 1 ? "evento" : "eventos"} en las últimas ${SEMANAS} semanas${totalMin ? ` y ${hm(totalMin)} de estudio registrado` : ""}.`}
      </p>
    </>
  );
}
