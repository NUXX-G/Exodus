/**
 * Prueba de extremo a extremo de las funciones de la v2 contra un servidor local (`next start`) con una base temporal.
 *
 *   T=$(mktemp -d); DATABASE_PATH=$T/e.db npx tsx --conditions=react-server scripts/dev/sesion-prueba.ts > $T/token
 *   DATABASE_PATH=$T/e.db npx next start -p 3211 &
 *   PLAYWRIGHT_CORE=<ruta a playwright-core> DATABASE_PATH=$T/e.db TOKEN=$(cat $T/token) node scripts/dev/e2e-v2.cjs
 *
 * PLAYWRIGHT_CORE: un playwright-core ya descargado (p. ej. en la caché de npx) con su Chromium instalado.
 * Nunca con database/exodus.db.
 */
const path = require("node:path");
const assert = require("node:assert/strict");
const Database = require("better-sqlite3");
const { chromium } = require(process.env.PLAYWRIGHT_CORE || "playwright-core");

const BASE = process.env.BASE_URL || "http://localhost:3211";
const DB = process.env.DATABASE_PATH;
if (!DB || path.resolve(DB) === path.resolve("database/exodus.db")) throw new Error("DATABASE_PATH temporal obligatorio");
const db = new Database(DB);
const uid = db.prepare("select id from users where username='prueba'").get().id;

const pasos = [];
const ok = (m) => {
  pasos.push(m);
  console.log("✔", m);
};

async function main() {
  // El nodo de ejemplo exige mat-enteros-fracciones: se marca completado.
  db.prepare("insert or replace into node_progress (user_id,node_id,status,completed_at) values (?,?,'completed',unixepoch())").run(uid, "mat-enteros-fracciones");

  const browser = await chromium.launch();
  const ctx = await browser.newContext();
  await ctx.addCookies([{ name: "exodus_session", value: process.env.TOKEN, url: BASE }]);
  const page = await ctx.newPage();
  const errores = [];
  page.on("pageerror", (e) => errores.push(e.message));

  await page.goto(`${BASE}/nodo/mat-proporcionalidad-porcentajes`);
  const li = page.locator('li:has(input[name="exerciseId"][value="porcentaje-de"])');
  await li.waitFor();
  const variante = Number(await li.locator('input[name="variant"]').inputValue());
  const datos = [[18, 250], [15, 340], [35, 160], [12, 475], [65, 240], [8, 1350], [42, 550], [24, 625], [75, 96], [5, 1830]][variante];
  const bien = String((datos[0] * datos[1]) / 100).replace(".", ",");
  ok(`variante ${variante}: ${datos[0]} % de ${datos[1]} = ${bien}`);

  // Vista previa (número) y respuesta incorrecta.
  const campo = li.locator('input[name="answer"]');
  await campo.fill("12 manzanas");
  await li.locator(".vista-error").waitFor({ timeout: 5000 });
  ok("vista previa: avisa de lo que no entiende");
  await li.locator('button[type="submit"]').click();
  await li.locator('.mensaje:has-text("No entiendo")').waitFor();
  ok("respuesta ilegible: no cuenta como intento");
  await campo.fill("1");
  await li.locator('button[type="submit"]').click();
  await li.locator('.mensaje:has-text("incorrecta")').waitFor();
  ok("respuesta incorrecta");
  // Diario de errores: tras el fallo se ofrece etiquetarlo.
  await li.locator('.etiquetar-error label:has-text("Concepto")').click();
  await li.locator('.etiquetar-error input[name="note"]').fill("Confundí porcentaje con fracción");
  await li.locator('.etiquetar-error button:has-text("Anotar")').click();
  await li.locator('.etiqueta-hecha').waitFor();
  const etiquetado = db.prepare("select error_tag, error_note from exercise_attempts where user_id=? and correct=0 order by id desc").get(uid);
  assert.equal(etiquetado.error_tag, "concepto");
  ok("fallo etiquetado en el diario de errores");
  await campo.fill(bien);
  await li.locator(".vista-previa .prosa").waitFor();
  await li.locator('button[type="submit"]').click();
  await li.locator('.mensaje:has-text("Correcto")').waitFor();
  ok("respuesta correcta con coma decimal");
  const filas = db.prepare("select correct, variant, elapsed_ms, mode from exercise_attempts where user_id=? and exercise_id='porcentaje-de' order by id").all(uid);
  assert.equal(filas.length, 2, "el ilegible no se guarda");
  assert.equal(filas[1].correct, 1);
  assert.equal(filas[1].variant, variante);
  assert.ok(filas[1].elapsed_ms > 0, "se mide el tiempo");
  ok(`intentos guardados con variante y tiempo (${filas[1].elapsed_ms} ms)`);

  // Al recargar, la variante es otra.
  await page.reload();
  const v2 = Number(await page.locator('li:has(input[name="exerciseId"][value="porcentaje-de"]) input[name="variant"]').inputValue());
  assert.notEqual(v2, variante);
  ok(`tras acertar, datos nuevos (variante ${v2})`);

  // Reporte «creo que esto está mal».
  const li2 = page.locator('li:has(input[name="exerciseId"][value="obreros"])');
  await li2.locator(".boton-reporte").click();
  await li2.locator('textarea[name="message"]').fill("Prueba e2e: el enunciado no dice si trabajan igual de rápido.");
  await li2.locator('button:has-text("Enviar reporte")').click();
  await li2.locator('.mensaje:has-text("Gracias")').waitFor();
  const rep = db.prepare("select * from reports where user_id=? order by id desc").get(uid);
  assert.equal(rep.exercise_id, "obreros");
  ok("reporte guardado");
  await page.goto(`${BASE}/reportes`);
  await page.locator("text=Prueba e2e").waitFor();
  await page.locator('button:has-text("Resuelto")').first().click();
  await page.waitForLoadState("networkidle");
  assert.equal(db.prepare("select status from reports where id=?").get(rep.id).status, "resuelto");
  ok("/reportes: el administrador lo cierra");

  // Repaso: se adelanta a hoy y debe salir una pregunta distinta del enunciado original.
  db.prepare("update reviews set due_day=date('now','localtime') where user_id=?").run(uid);
  await page.goto(`${BASE}/repaso`);
  const meta = await page.locator(".repasos li .meta").first().innerText();
  assert.match(meta, /datos nuevos|Pregunta nueva/);
  ok(`repaso: «${meta.split("·").pop().trim()}»`);

  // /errores muestra el fallo etiquetado y el consejo.
  await page.goto(`${BASE}/errores`);
  await page.locator('.consejo:has-text("Concepto")').waitFor();
  await page.locator('text=Confundí porcentaje con fracción').waitFor();
  ok("/errores: patrón por tipo, consejo y nota");

  // Práctica intercalada con los nodos completados.
  db.prepare("insert or replace into node_progress (user_id,node_id,status,completed_at) values (?,?,'completed',unixepoch())").run(uid, "mat-proporcionalidad-porcentajes");
  await page.goto(`${BASE}/repaso?modo=intercalado`);
  const primero = page.locator(".repasos li").first();
  await primero.waitFor();
  const n = await page.locator(".repasos li").count();
  ok(`práctica intercalada: ${n} preguntas`);
  const campoP = primero.locator('input[name="answer"], textarea[name="answer"]');
  if (await campoP.count()) {
    await campoP.first().fill("999999");
  } else {
    await primero.locator('input[name="answer"]').first().check();
  }
  await primero.locator('button[type="submit"]').click();
  await primero.locator(".mensaje").first().waitFor();
  ok(`práctica intercalada: respuesta procesada («${(await primero.locator(".mensaje").first().innerText()).slice(0, 40)}»)`);

  assert.deepEqual(errores, [], "errores de JavaScript en la página");
  await browser.close();
  console.log(`\n${pasos.length} comprobaciones superadas`);
}

main().catch((e) => {
  console.error("✖", e.message);
  process.exit(1);
});
