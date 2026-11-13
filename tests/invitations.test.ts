import "./db-temporal";
import assert from "node:assert/strict";
import { test } from "node:test";
import { eq } from "drizzle-orm";
import { getDb, schema } from "../src/lib/db";
import { hashPassword, verifyPassword } from "../src/lib/password";
import {
  createInvitation,
  invitationId,
  listInvitations,
  MAX_PENDING,
  normalizeCode,
  redeemInvitation,
  revokeInvitation,
  type CreatedInvitation,
} from "../src/lib/invitations";

const PASS = "contraseña-amigo-123";

function makeUser(username: string, role: "admin" | "miembro"): number {
  return getDb()
    .insert(schema.users)
    .values({ username, role, passwordHash: hashPassword("contraseña-dueño-123") })
    .returning({ id: schema.users.id })
    .get().id;
}

function invite(adminId: number, days = 7, note = "", now = new Date()): CreatedInvitation {
  const r = createInvitation(adminId, days, note, now);
  assert.equal(typeof r, "object");
  return r as CreatedInvitation;
}

const admin = makeUser("dueno", "admin");

test("el código tiene formato legible y en la base de datos solo está su hash", () => {
  const { code, expiresAt } = invite(admin, 3, "  para Ana  ");
  assert.match(code, /^[A-HJKMNP-Z2-9]{4}(-[A-HJKMNP-Z2-9]{4}){3}$/);
  const row = getDb().select().from(schema.invitations).where(eq(schema.invitations.id, invitationId(code))).get()!;
  assert.equal(row.note, "para Ana");
  assert.ok(!JSON.stringify(row).includes(normalizeCode(code)));
  assert.ok(Math.abs((expiresAt.getTime() - Date.now()) / 86_400_000 - 3) < 0.01);
});

test("con una invitación válida se crea una cuenta miembro y la invitación queda gastada", () => {
  const { code } = invite(admin, 7, "Bea");
  // Se acepta escrito en minúsculas y sin guiones.
  const r = redeemInvitation(normalizeCode(code).toLowerCase(), "bea", PASS);
  assert.equal(typeof r, "object");
  const user = getDb().select().from(schema.users).where(eq(schema.users.username, "bea")).get()!;
  assert.equal(user.role, "miembro");
  assert.ok(verifyPassword(PASS, user.passwordHash!));

  assert.equal(redeemInvitation(code, "bea2", PASS), "codigo", "un solo uso");
  const fila = listInvitations(admin).find((i) => i.note === "Bea")!;
  assert.equal(fila.state, "usada");
  assert.equal(fila.usedByName, "bea");
});

test("un código inventado, caducado o anulado no crea cuenta", () => {
  assert.equal(redeemInvitation("AAAA-BBBB-CCCC-DDDD", "intruso", PASS), "codigo");

  const hace8dias = new Date(Date.now() - 8 * 86_400_000);
  const viejo = invite(admin, 7, "vieja", hace8dias).code;
  assert.equal(redeemInvitation(viejo, "tarde", PASS), "codigo");
  assert.equal(listInvitations(admin).find((i) => i.note === "vieja")!.state, "caducada");

  const anulado = invite(admin, 1, "anulada").code;
  assert.equal(revokeInvitation(admin, invitationId(anulado)), true);
  assert.equal(redeemInvitation(anulado, "anulado", PASS), "codigo");

  const nombres = getDb().select({ u: schema.users.username }).from(schema.users).all().map((r) => r.u);
  assert.ok(!nombres.some((n) => ["intruso", "tarde", "anulado"].includes(n)));
});

test("si el usuario ya existe, la invitación no se gasta", () => {
  const { code } = invite(admin);
  assert.equal(redeemInvitation(code, "dueno", PASS), "usuario");
  assert.equal(typeof redeemInvitation(code, "carla", PASS), "object");
});

test("solo el admin invita, con caducidades permitidas y un tope de pendientes", () => {
  const miembro = makeUser("miembro1", "miembro");
  assert.equal(createInvitation(miembro, 7, ""), "permiso");
  assert.equal(createInvitation(admin, 30, ""), "dias");

  const otro = makeUser("admin2", "admin");
  for (let i = 0; i < MAX_PENDING; i++) invite(otro);
  assert.equal(createInvitation(otro, 7, ""), "limite");
  // Una gastada deja hueco.
  const { code } = invite(admin);
  assert.equal(revokeInvitation(otro, invitationId(code)), false, "no se anulan invitaciones ajenas");
  const una = listInvitations(otro)[0];
  assert.equal(revokeInvitation(otro, una.id), true);
  assert.equal(typeof createInvitation(otro, 7, ""), "object");
});

test("una invitación usada no se puede anular", () => {
  const { code } = invite(admin);
  redeemInvitation(code, "dario", PASS);
  assert.equal(revokeInvitation(admin, invitationId(code)), false);
});
