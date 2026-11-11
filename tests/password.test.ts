import assert from "node:assert/strict";
import { test } from "node:test";
import { hashPassword, verifyPassword } from "../src/lib/password";

test("scrypt: verifica la contraseña correcta, rechaza otras y usa sal aleatoria", () => {
  const a = hashPassword("correcta-caballo-bateria");
  const b = hashPassword("correcta-caballo-bateria");
  assert.notEqual(a, b);
  assert.equal(verifyPassword("correcta-caballo-bateria", a), true);
  assert.equal(verifyPassword("correcta-caballo-bateriA", a), false);
  assert.equal(verifyPassword("x", "formato-desconocido"), false);
  assert.equal(verifyPassword("x", "scrypt$99$AAAA$AAAA"), false);
});
