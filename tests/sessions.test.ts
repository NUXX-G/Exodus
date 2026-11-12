import "./db-temporal";
import assert from "node:assert/strict";
import { test } from "node:test";
import { getDb, schema } from "../src/lib/db";
import { hashPassword, verifyPassword } from "../src/lib/password";
import {
  changePassword,
  countSessions,
  createSession,
  revokeOtherSessions,
  revokeSession,
  SESSION_DAYS,
  tokenId,
  userForToken,
} from "../src/lib/sessions";
import { eq } from "drizzle-orm";

const OLD = "contraseña-vieja-123";
const NEW = "contraseña-nueva-456";

function makeUser(username: string, password = OLD): number {
  return getDb().insert(schema.users).values({ username, passwordHash: hashPassword(password) }).returning({ id: schema.users.id }).get().id;
}

test("una sesión nueva identifica al usuario y la base de datos solo guarda el hash del token", () => {
  const id = makeUser("ana");
  const { token, expiresAt } = createSession(id);
  assert.equal(userForToken(token)?.id, id);
  assert.equal(userForToken(token + "x"), null);

  const rows = getDb().select().from(schema.sessions).where(eq(schema.sessions.userId, id)).all();
  assert.equal(rows.length, 1);
  assert.equal(rows[0].id, tokenId(token));
  assert.notEqual(rows[0].id, token);
  const days = (expiresAt.getTime() - Date.now()) / 86_400_000;
  assert.ok(Math.abs(days - SESSION_DAYS) < 0.01);
});

test("una sesión caducada no vale y se purga al crear otra", () => {
  const id = makeUser("bea");
  const past = new Date(Date.now() - (SESSION_DAYS + 1) * 86_400_000);
  const viejo = createSession(id, past).token;
  assert.equal(userForToken(viejo), null);
  createSession(id);
  const ids = getDb().select({ id: schema.sessions.id }).from(schema.sessions).where(eq(schema.sessions.userId, id)).all().map((r) => r.id);
  assert.ok(!ids.includes(tokenId(viejo)));
});

test("revocar una sesión la invalida sin tocar las demás", () => {
  const id = makeUser("carla");
  const a = createSession(id).token;
  const b = createSession(id).token;
  revokeSession(a);
  assert.equal(userForToken(a), null);
  assert.equal(userForToken(b)?.id, id);
});

test("cerrar las demás sesiones conserva solo la actual y no toca a otros usuarios", () => {
  const id = makeUser("dani");
  const otro = makeUser("eva");
  const actual = createSession(id).token;
  createSession(id);
  createSession(id);
  const ajena = createSession(otro).token;
  assert.equal(countSessions(id), 3);
  assert.equal(revokeOtherSessions(id, actual), 2);
  assert.equal(countSessions(id), 1);
  assert.equal(userForToken(actual)?.id, id);
  assert.equal(userForToken(ajena)?.id, otro);
});

test("cambiar la contraseña exige la actual, valida la nueva y cierra las demás sesiones", () => {
  const id = makeUser("fede");
  const actual = createSession(id).token;
  const otra = createSession(id).token;

  assert.equal(changePassword(id, "no-es-esta-123", NEW, actual), "actual");
  assert.equal(changePassword(id, OLD, "corta", actual), "corta");
  assert.equal(changePassword(id, OLD, "x".repeat(257), actual), "larga");
  assert.equal(changePassword(id, OLD, OLD, actual), "igual");
  assert.equal(countSessions(id), 2, "los intentos fallidos no cierran sesiones");

  assert.equal(changePassword(id, OLD, NEW, actual), "ok");
  const hash = getDb().select().from(schema.users).where(eq(schema.users.id, id)).get()!.passwordHash!;
  assert.ok(verifyPassword(NEW, hash));
  assert.ok(!verifyPassword(OLD, hash));
  assert.equal(userForToken(actual)?.id, id);
  assert.equal(userForToken(otra), null);
});
