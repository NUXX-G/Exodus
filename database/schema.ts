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
  real,
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
    /** scrypt con sal por usuario; ver src/lib/password.ts. */
    passwordHash: text("password_hash"),
    /** `admin`: la cuenta creada en /configurar, que puede invitar. `miembro`: cuentas creadas con una invitación. */
    role: text("role", { enum: ["admin", "miembro"] }).notNull().default("miembro"),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(now),
  },
  (t) => [uniqueIndex("users_username_uq").on(t.username)],
);

/** Sesiones de navegador. `id` es el SHA-256 del token de la cookie: la base de datos nunca guarda el token. */
export const sessions = sqliteTable(
  "sessions",
  {
    id: text("id").primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(now),
  },
  (t) => [index("sessions_user_idx").on(t.userId)],
);

/**
 * Invitaciones de un solo uso para crear cuenta en /registro. `id` es el SHA-256 del código
 * normalizado: la base de datos nunca guarda el código, que solo se muestra al crearlo.
 */
export const invitations = sqliteTable(
  "invitations",
  {
    id: text("id").primaryKey(),
    createdBy: integer("created_by")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** Para quién es (texto libre opcional), para reconocerla en la lista. */
    note: text("note"),
    expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(now),
    usedAt: integer("used_at", { mode: "timestamp" }),
    usedBy: integer("used_by").references(() => users.id, { onDelete: "set null" }),
  },
  (t) => [index("invitations_creator_idx").on(t.createdBy)],
);

/**
 * Tokens personales para conectar herramientas externas (el plugin de Obsidian) a la cuenta. Solo dan
 * acceso de lectura a la exportación del propio usuario. `id` es el SHA-256 del token.
 */
export const apiTokens = sqliteTable(
  "api_tokens",
  {
    id: text("id").primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(now),
    lastUsedAt: integer("last_used_at", { mode: "timestamp" }),
  },
  (t) => [index("api_tokens_user_idx").on(t.userId)],
);

/**
 * Libreta: notas en Markdown de cada usuario, opcionalmente asociadas a un nodo (`node_id` es texto libre,
 * como en el progreso: si el nodo cambia o desaparece, la nota se conserva). Se exportan a Obsidian.
 */
export const notes = sqliteTable(
  "notes",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    body: text("body").notNull().default(""),
    nodeId: text("node_id"),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(now),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(now),
  },
  (t) => [index("notes_user_idx").on(t.userId, t.updatedAt), index("notes_node_idx").on(t.userId, t.nodeId)],
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
      enum: [
        "node_opened",
        "hint_revealed",
        "flag_attempt",
        "flag_captured",
        "exercise_attempt",
        "exercise_solved",
        "review_done",
      ],
    }).notNull(),
    nodeId: text("node_id"),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(now),
  },
  (t) => [index("activity_log_day_idx").on(t.userId, t.day)],
);

/** Intentos de ejercicio (solo el hash de la respuesta, nunca el texto). */
export const exerciseAttempts = sqliteTable(
  "exercise_attempts",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    nodeId: text("node_id").notNull(),
    exerciseId: text("exercise_id").notNull(),
    submittedHash: text("submitted_hash").notNull(),
    correct: integer("correct", { mode: "boolean" }).notNull(),
    /** Índice de la variante (plantillas parametrizadas); null si el ejercicio no tiene variantes. */
    variant: integer("variant"),
    /** Tiempo desde que se mostró el enunciado hasta el envío (lo mide el navegador; orientativo). */
    elapsedMs: integer("elapsed_ms"),
    /** `estudio` (en el nodo), `repaso` (programado, en /repaso), `intercalado` (práctica mezclada de nodos dominados). */
    mode: text("mode", { enum: ["estudio", "repaso", "intercalado"] }).notNull().default("estudio"),
    /** En el repaso: el ejercicio programado al que sustituye esta pregunta (puede ser otra del banco). */
    reviewOf: text("review_of"),
    /** Diario de errores: tipo de error que el alumno asigna a un fallo (ver ERROR_TAGS en src/lib/errores.ts). */
    errorTag: text("error_tag"),
    /** Nota opcional del alumno sobre el fallo. */
    errorNote: text("error_note"),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(now),
  },
  (t) => [
    index("exercise_attempts_ex_idx").on(t.userId, t.nodeId, t.exerciseId),
    index("exercise_attempts_time_idx").on(t.userId, t.createdAt),
  ],
);

/** Ejercicios resueltos al menos una vez; un nodo se domina al resolver el 80 %. */
export const exerciseSolved = sqliteTable(
  "exercise_solved",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    nodeId: text("node_id").notNull(),
    exerciseId: text("exercise_id").notNull(),
    solvedAt: integer("solved_at", { mode: "timestamp" }).notNull().default(now),
  },
  (t) => [primaryKey({ columns: [t.userId, t.nodeId, t.exerciseId] })],
);

/** Calendario de repaso espaciado: un ejercicio resuelto vuelve a pedirse en `due_day`. */
export const reviews = sqliteTable(
  "reviews",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    nodeId: text("node_id").notNull(),
    exerciseId: text("exercise_id").notNull(),
    step: integer("step").notNull().default(0),
    dueDay: text("due_day").notNull(),
  },
  (t) => [
    primaryKey({ columns: [t.userId, t.nodeId, t.exerciseId] }),
    index("reviews_due_idx").on(t.userId, t.dueDay),
  ],
);

/**
 * Reportes «creo que esto está mal» sobre un nodo o un ejercicio. Los revisa el administrador en /reportes y
 * se resumen en STATUS.md al trabajar el área. `node_id` es texto libre, como en el progreso.
 */
export const reports = sqliteTable(
  "reports",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    nodeId: text("node_id").notNull(),
    exerciseId: text("exercise_id"),
    message: text("message").notNull(),
    status: text("status", { enum: ["pendiente", "resuelto", "descartado"] }).notNull().default("pendiente"),
    /** Respuesta del administrador al cerrarlo (opcional). */
    resolution: text("resolution"),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(now),
    resolvedAt: integer("resolved_at", { mode: "timestamp" }),
  },
  (t) => [index("reports_status_idx").on(t.status, t.createdAt), index("reports_node_idx").on(t.nodeId)],
);

/**
 * Entregas de ejercicios de desarrollo (demostraciones, derivaciones, informes…). El texto es del usuario y se guarda
 * tal cual (Markdown con LaTeX y código; se dibuja siempre con el motor de contenido de usuario). La nota la pone el
 * propio alumno con la rúbrica, criterio a criterio, después de ver la solución modelo.
 */
export const developmentSubmissions = sqliteTable(
  "development_submissions",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    nodeId: text("node_id").notNull(),
    exerciseId: text("exercise_id").notNull(),
    /** Respuesta en Markdown; vacía si se hizo en papel. */
    answer: text("answer").notNull().default(""),
    onPaper: integer("on_paper", { mode: "boolean" }).notNull().default(false),
    mode: text("mode", { enum: ["estudio", "repaso", "intercalado"] }).notNull().default("estudio"),
    /** En el repaso: el ejercicio programado. */
    reviewOf: text("review_of"),
    /** Puntos que el alumno se da en cada criterio de la rúbrica (JSON: number[]); null hasta que se puntúa. */
    scores: text("scores"),
    score: integer("score"),
    maxScore: integer("max_score"),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(now),
    gradedAt: integer("graded_at", { mode: "timestamp" }),
  },
  (t) => [index("development_user_idx").on(t.userId, t.nodeId, t.exerciseId)],
);

/**
 * Prueba de nivel (fase 5): una sesión por área y usuario. `state` es el JSON de src/lib/diagnostico.ts (orden de
 * nodos, intervalo de la frontera, sonda en curso, historial). Al terminar se guardan las marcas.
 */
export const diagnosticSessions = sqliteTable(
  "diagnostic_sessions",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    area: text("area").notNull(),
    state: text("state").notNull(),
    startNodeId: text("start_node_id"),
    startedAt: integer("started_at", { mode: "timestamp" }).notNull().default(now),
    finishedAt: integer("finished_at", { mode: "timestamp" }),
  },
  (t) => [index("diagnostic_sessions_user_idx").on(t.userId, t.area)],
);

/**
 * Nodos «dominados por diagnóstico»: desbloquean lo que depende de ellos, pero **no** cuentan como completados ni
 * para el dominio. El alumno puede quitarlos cuando quiera (reversible). Repetir el diagnóstico de un área las
 * sustituye.
 */
export const diagnosticMarks = sqliteTable(
  "diagnostic_marks",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    nodeId: text("node_id").notNull(),
    area: text("area").notNull(),
    sessionId: integer("session_id").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(now),
  },
  (t) => [primaryKey({ columns: [t.userId, t.nodeId] })],
);

/**
 * Intentos de examen o reto (nodos `kind: examen`). Al empezar se fijan los items y sus variantes; las respuestas se
 * guardan sobre la marcha (si se cierra el navegador no se pierden) y la nota se calcula al entregar. Los desarrollos
 * se puntúan después con la rúbrica. No cuentan para el dominio de los nodos de origen: es un simulacro.
 */
export const examAttempts = sqliteTable(
  "exam_attempts",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    nodeId: text("node_id").notNull(),
    /** `normal` o `papel` (se resuelve a mano y al final se introducen los resultados). */
    mode: text("mode", { enum: ["normal", "papel"] }).notNull().default("normal"),
    /** JSON: [{ ref, puntos, variant }] fijados al empezar. */
    items: text("items").notNull(),
    /** JSON: { [ref]: respuesta }. */
    answers: text("answers").notNull().default("{}"),
    /** JSON: [{ ref, estado, puntos, max }] tras entregar. */
    results: text("results"),
    score: real("score"),
    maxScore: real("max_score"),
    /** Reto encadenado: pasos superados. */
    step: integer("step").notNull().default(0),
    startedAt: integer("started_at", { mode: "timestamp" }).notNull().default(now),
    /** Hora límite (null: sin límite). */
    deadline: integer("deadline", { mode: "timestamp" }),
    finishedAt: integer("finished_at", { mode: "timestamp" }),
  },
  (t) => [index("exam_attempts_user_idx").on(t.userId, t.nodeId)],
);

export type User = typeof users.$inferSelect;
export type Invitation = typeof invitations.$inferSelect;
export type Note = typeof notes.$inferSelect;
export type NodeProgress = typeof nodeProgress.$inferSelect;
export type ActivityKind = (typeof activityLog.$inferInsert)["kind"];
