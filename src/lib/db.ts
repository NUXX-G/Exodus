import "server-only";
import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";
import { drizzle, type BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { eq } from "drizzle-orm";
import * as schema from "@db/schema";

type Db = BetterSQLite3Database<typeof schema>;

// En desarrollo, el hot-reload re-evalúa los módulos: se reutiliza la conexión vía globalThis.
const globalForDb = globalThis as unknown as { __exodusDb?: Db };

function open(): Db {
  const file = path.resolve(/*turbopackIgnore: true*/ process.env.DATABASE_PATH ?? "./database/exodus.db");
  fs.mkdirSync(path.dirname(file), { recursive: true });

  const sqlite = new Database(file);
  // DELETE en lugar de WAL: un solo proceso escritor, y WAL falla sobre bind mounts de Docker Desktop.
  sqlite.pragma("journal_mode = DELETE");
  sqlite.pragma("foreign_keys = ON");
  sqlite.pragma("busy_timeout = 5000");

  const db = drizzle(sqlite, { schema });
  migrate(db, { migrationsFolder: path.resolve(/*turbopackIgnore: true*/ "./database/migrations") });
  return db;
}

export function getDb(): Db {
  return (globalForDb.__exodusDb ??= open());
}

/**
 * Fase 1: instancia privada de un solo estudiante. Se crea (si no existe) el usuario
 * local y todas las operaciones se asocian a él. El esquema ya soporta varios usuarios.
 */
export function getCurrentUser(): schema.User {
  const db = getDb();
  const username = process.env.EXODUS_USER ?? "exodus";
  db.insert(schema.users).values({ username }).onConflictDoNothing().run();
  return db.select().from(schema.users).where(eq(schema.users.username, username)).get()!;
}

export { schema };
