import assert from "node:assert/strict";
import { test } from "node:test";
import { clientKeyFrom, FailureLimiter } from "../src/lib/rate-limit";

const opts = { maxPerClient: 3, maxGlobal: 6, windowMs: 1000, maxTracked: 4 };

test("bloquea por cliente sin afectar a otros y caduca con la ventana", () => {
  const l = new FailureLimiter(opts);
  for (let i = 0; i < 3; i++) l.fail("a", 100);
  assert.equal(l.blocked("a", 200), true);
  assert.equal(l.blocked("b", 200), false);
  assert.equal(l.blocked("a", 1200), false);
});

test("un acierto limpia el contador del cliente", () => {
  const l = new FailureLimiter(opts);
  l.fail("a", 0); l.fail("a", 0);
  l.succeed("a");
  l.fail("a", 1);
  assert.equal(l.blocked("a", 2), false);
});

test("tope global frente a muchos clientes distintos, y memoria acotada", () => {
  const l = new FailureLimiter(opts);
  for (let i = 0; i < 6; i++) l.fail("c" + i, 10);
  assert.equal(l.blocked("nuevo", 20), true);
  assert.equal(l.blocked("nuevo", 2000), false);
  assert.ok((l as unknown as { byClient: Map<string, number[]> }).byClient.size <= opts.maxTracked);
});

test("clave de cliente: sin proxy de confianza se ignora la cabecera", () => {
  assert.equal(clientKeyFrom("1.2.3.4", false), "directo");
  assert.equal(clientKeyFrom(null, true), "directo");
  assert.equal(clientKeyFrom("9.9.9.9, 1.2.3.4", true), "1.2.3.4");
});

test("clave de cliente: IPv6 agrupada por /64", () => {
  const a = clientKeyFrom("2001:db8:1:2:aaaa:bbbb:cccc:dddd", true);
  assert.equal(a, clientKeyFrom("2001:0db8:0001:0002::1", true));
  assert.notEqual(a, clientKeyFrom("2001:db8:1:3::1", true));
  assert.equal(clientKeyFrom("::1", true), "0:0:0:0::/64");
});
