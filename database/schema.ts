/**
 * Esquema de Exodus (SQLite + Drizzle).
 *
 * El vault de Markdown es la fuente de verdad del CONTENIDO (nodos, prerequisitos, flags).
 * La base de datos solo guarda ESTADO del estudiante: progreso, envíos de flags,
 * pistas reveladas y actividad diaria. Por eso `node_id` es texto libre (el `id` del
 * frontmatter) y no una clave foránea: borrar o renombrar un .md no destruye historial.
 */
import { sql } from "drizzle-orm";
import {
  index,
  integer,
  primaryKey,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

const now = sql`(unixepoch())`;

export const users = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    username: text("username").notNull(),
    displayName: text("display_name"),
    /** Reservado para autenticación (fase posterior). Null = usuario local sin contraseña. */
    passwordHash: text("password_hash"),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(now),
  },
  (t) => [uniqueIndex("users_username_uq").on(t.username)],
);

/** Estado de cada nodo por usuario. La ausencia de fila significa "nunca abierto". */
export const nodeProgress = sqliteTable(
  "node_progress",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    nodeId: text("node_id").notNull(),
    status: text("status", { enum: ["in_progress", "completed"] })
      .notNull()
      .default("in_progress"),
    firstOpenedAt: integer("first_opened_at", { mode: "timestamp" }).notNull().default(now),
    lastOpenedAt: integer("last_opened_at", { mode: "timestamp" }).notNull().default(now),
    completedAt: integer("completed_at", { mode: "timestamp" }),
  },
  (t) => [
    primaryKey({ columns: [t.userId, t.nodeId] }),
    index("node_progress_status_idx").on(t.userId, t.status),
  ],
);

/**
 * Registro de TODOS los intentos de flag (correctos o no).
 * Nunca se guarda el texto enviado, solo su SHA-256: sirve para auditar intentos
 * repetidos sin que la base de datos contenga flags en claro.
 */
export const flagSubmissions = sqliteTable(
  "flag_submissions",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    nodeId: text("node_id").notNull(),
    submittedHash: text("submitted_hash").notNull(),
    correct: integer("correct", { mode: "boolean" }).notNull(),
    /** Nº de pistas reveladas en el momento del envío (métrica de autonomía). */
    hintsUsed: integer("hints_used").notNull().default(0),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(now),
  },
  (t) => [
    index("flag_submissions_node_idx").on(t.userId, t.nodeId),
    index("flag_submissions_time_idx").on(t.userId, t.createdAt),
  ],
);

/** Pistas graduales (niveles 1..3) reveladas por el usuario en cada nodo. */
export const hintReveals = sqliteTable(
  "hint_reveals",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    nodeId: text("node_id").notNull(),
    level: integer("level").notNull(),
    revealedAt: integer("revealed_at", { mode: "timestamp" }).notNull().default(now),
  },
  (t) => [primaryKey({ columns: [t.userId, t.nodeId, t.level] })],
);

/**
 * Bitácora de actividad. Alimenta el heatmap y la racha.
 * `day` es la fecha local del servidor en formato YYYY-MM-DD para agregar sin funciones de fecha.
 */
export const activityLog = sqliteTable(
  "activity_log",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    day: text("day").notNull(),
    kind: text("kind", {
      enum: ["node_opened", "hint_revealed", "flag_attempt", "flag_captured"],
    }).notNull(),
    nodeId: text("node_id"),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(now),
  },
  (t) => [index("activity_log_day_idx").on(t.userId, t.day)],
);

export type User = typeof users.$inferSelect;
export type NodeProgress = typeof nodeProgress.$inferSelect;
export type ActivityKind = (typeof activityLog.$inferInsert)["kind"];
