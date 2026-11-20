/**
 * Prueba en local: crea (o reutiliza) un usuario administrador en la base de datos de DATABASE_PATH y una sesión, y
 * escribe el token de la cookie `exodus_session`. Solo para bases temporales: se niega a tocar database/exodus.db.
 *
 *   DATABASE_PATH=/tmp/exodus-prueba.db npx tsx --conditions=react-server scripts/dev/sesion-prueba.ts
 *   curl -b "exodus_session=<token>" http://localhost:3211/repaso
 */
import path from "node:path";
import { eq } from "drizzle-orm";
import { getDb, schema } from "../../src/lib/db";
import { hashPassword } from "../../src/lib/password";
import { createSession } from "../../src/lib/sessions";

const db = process.env.DATABASE_PATH ?? "";
if (!db || path.resolve(db) === path.resolve("database/exodus.db")) {
  console.error("Usa DATABASE_PATH con una base temporal (nunca database/exodus.db).");
  process.exit(1);
}
const d = getDb();
let u = d.select().from(schema.users).where(eq(schema.users.username, "prueba")).get();
if (!u) u = d.insert(schema.users).values({ username: "prueba", passwordHash: hashPassword("prueba-prueba-1"), role: "admin" }).returning().get();
console.log(createSession(u.id).token);
