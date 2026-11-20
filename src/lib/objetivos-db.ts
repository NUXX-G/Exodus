import "server-only";
import { and, eq, gte } from "drizzle-orm";
import { getDb, schema } from "./db";
import { dayKey } from "./progress";
import { loadObjetivos, type Objetivo } from "./objetivos";
import { vaultRoot } from "./vault";

const { userGoals, studyTime } = schema;

export const objetivosDelVault = () => loadObjetivos(vaultRoot());

export interface ObjetivoActivo {
  objetivo: Objetivo;
  hoursPerWeek: number;
  targetDay: string | null;
  activatedAt: Date;
}

export function activeGoals(userId: number): ObjetivoActivo[] {
  const { objetivos } = objetivosDelVault();
  return getDb()
    .select()
    .from(userGoals)
    .where(eq(userGoals.userId, userId))
    .orderBy(userGoals.activatedAt)
    .all()
    .flatMap((r) => {
      const o = objetivos.find((x) => x.id === r.goalId);
      return o ? [{ objetivo: o, hoursPerWeek: r.hoursPerWeek ?? o.horasSemana, targetDay: r.targetDay, activatedAt: r.activatedAt }] : [];
    });
}

const DIA = /^\d{4}-\d{2}-\d{2}$/;

export function activateGoal(userId: number, goalId: string, hoursPerWeek: number | null, targetDay: string | null): boolean {
  if (!objetivosDelVault().objetivos.some((o) => o.id === goalId)) return false;
  const h = hoursPerWeek && Number.isFinite(hoursPerWeek) && hoursPerWeek > 0 && hoursPerWeek <= 80 ? hoursPerWeek : null;
  const d = targetDay && DIA.test(targetDay) ? targetDay : null;
  getDb()
    .insert(userGoals)
    .values({ userId, goalId, hoursPerWeek: h, targetDay: d })
    .onConflictDoUpdate({ target: [userGoals.userId, userGoals.goalId], set: { hoursPerWeek: h, targetDay: d } })
    .run();
  return true;
}

export function deactivateGoal(userId: number, goalId: string) {
  getDb().delete(userGoals).where(and(eq(userGoals.userId, userId), eq(userGoals.goalId, goalId))).run();
}

export const MAX_MINUTOS_REGISTRO = 12 * 60;

/** Registra minutos de estudio (a mano o desde el temporizador). */
export function logStudyTime(userId: number, area: string, minutes: number, nodeId: string | null, source: "manual" | "temporizador" = "manual"): boolean {
  const m = Math.round(minutes);
  if (!Number.isFinite(m) || m < 1 || m > MAX_MINUTOS_REGISTRO) return false;
  getDb().insert(studyTime).values({ userId, day: dayKey(), area, nodeId, minutes: m, source }).run();
  return true;
}

/** Minutos por día (y por área) en los últimos `windowDays` días. */
export function studyMinutes(userId: number, windowDays: number): { porDia: Record<string, number>; porArea: Record<string, number>; total: number } {
  const desde = new Date();
  desde.setDate(desde.getDate() - windowDays);
  const filas = getDb().select().from(studyTime).where(and(eq(studyTime.userId, userId), gte(studyTime.day, dayKey(desde)))).all();
  const porDia: Record<string, number> = {};
  const porArea: Record<string, number> = {};
  let total = 0;
  for (const f of filas) {
    porDia[f.day] = (porDia[f.day] ?? 0) + f.minutes;
    porArea[f.area] = (porArea[f.area] ?? 0) + f.minutes;
    total += f.minutes;
  }
  return { porDia, porArea, total };
}
