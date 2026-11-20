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

  // Desarrollo con rúbrica (fase 3).
  for (const n of ["mat-algebra-secundaria", "mat-combinatoria-probabilidad-basica"])
    db.prepare("insert or replace into node_progress (user_id,node_id,status,completed_at) values (?,?,'completed',unixepoch())").run(uid, n);
  await page.goto(`${BASE}/nodo/mat-logica-demostraciones`);
  const des = page.locator('.ejercicios-lista > li:has-text("Demuestra por inducción que")');
  await des.waitFor();
  assert.equal(await page.locator(".solucion-modelo").count(), 0, "sin solución antes de entregar");
  assert.ok(!(await page.content()).includes("escuadras"), "la solución no viaja en el HTML antes de entregar");
  await des.locator('textarea[name="answer"]').fill("Sea $P(n)$: $\\sum_{k=1}^n (2k-1) = n^2$. Base: $1 = 1^2$. Paso: $m^2 + 2m + 1 = (m+1)^2$.");
  await des.locator('button:has-text("Vista previa")').click();
  await des.locator(".vista-previa mjx-container").first().waitFor();
  ok("desarrollo: vista previa con fórmulas");
  await des.locator('button:has-text("Entregar")').click();
  await des.locator(".solucion-modelo").waitFor();
  ok("desarrollo: tras entregar se ve la solución modelo y la rúbrica");
  const criterios = await des.locator(".rubrica ol > li").count();
  for (let i = 0; i < criterios; i++) await des.locator(`.rubrica ol > li:nth-child(${i + 1}) .puntos label`).last().click();
  await des.locator('button:has-text("Guardar mi nota")').click();
  await des.locator('.mensaje:has-text("puntos")').first().waitFor();
  const entrega = db.prepare("select score, max_score from development_submissions where user_id=? order by id desc").get(uid);
  assert.equal(entrega.score, entrega.max_score);
  assert.ok(db.prepare("select 1 from exercise_solved where user_id=? and exercise_id='induccion-suma-de-impares'").get(uid), "cuenta para el dominio");
  ok(`desarrollo: nota ${entrega.score}/${entrega.max_score} guardada y cuenta para el dominio`);

  // Ejercicio de código (fase 4): se descarga el script de pruebas, se ejecuta en local y se pega el código.
  db.prepare("insert or replace into node_progress (user_id,node_id,status,completed_at) values (?,?,'completed',unixepoch())").run(uid, "prog-terminal-linux-git");
  const resp = await ctx.request.get(`${BASE}/api/codigo/prog-bash-scripting`);
  assert.equal(resp.status(), 200);
  const script = await resp.text();
  assert.ok(script.includes("resumen-de-notas") && !script.includes("media: 7.58"), "el script lleva entradas, no salidas esperadas");
  const anonCtx = await browser.newContext();
  const anon = await anonCtx.request.get(`${BASE}/api/codigo/prog-bash-scripting`);
  assert.equal(anon.status(), 401, "sin sesión no se descarga");
  await anonCtx.close();
  const fs = require("node:fs"), os = require("node:os"), { spawnSync } = require("node:child_process");
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "e2e-cod-"));
  fs.writeFileSync(path.join(dir, "prueba.sh"), script);
  fs.writeFileSync(path.join(dir, "mal.sh"), "echo 'alumnos: 0'\n");
  const run = spawnSync("bash", ["prueba.sh", "resumen-de-notas", "--", "bash", "mal.sh"], { cwd: dir, encoding: "utf8" });
  const cod = /: ([0-9a-f]{12})$/m.exec(run.stdout)?.[1];
  assert.ok(cod, run.stdout + run.stderr);
  await page.goto(`${BASE}/nodo/prog-bash-scripting`);
  const liC = page.locator('li:has(input[name="exerciseId"][value="resumen-de-notas"])');
  await liC.locator(".codigo-info").waitFor();
  await liC.locator('input[name="answer"]').fill(cod);
  await liC.locator('button[type="submit"]').click();
  await liC.locator('.mensaje:has-text("incorrecta")').waitFor();
  ok(`código: script descargado (${script.length} B), ejecutado en local y código ${cod} rechazado por ser de un programa incorrecto`);

  // Prueba de nivel (fase 5): con «No lo sé» en todo, la frontera es el primer nodo y no se marca nada.
  await page.goto(`${BASE}/diagnostico`);
  await page.locator('.lista-diagnostico li:has-text("Física") button:has-text("Hacer la prueba")').click();
  await page.waitForURL(/\/diagnostico\/\d+/);
  let preguntas = 0;
  while ((await page.locator('button:has-text("No lo sé")').count()) > 0 && preguntas < 40) {
    const antes = await page.locator(".cifras dd").first().innerText();
    await page.locator('button:has-text("No lo sé")').click();
    await page.waitForFunction((a) => !document.querySelector('button[name="dontKnow"]') || document.querySelector(".cifras dd")?.textContent !== a, antes);
    preguntas++;
  }
  await page.locator('.consejo:has-text("Empieza por")').waitFor();
  const marcas = db.prepare("select count(*) n from diagnostic_marks where user_id=?").get(uid).n;
  assert.equal(marcas, 0);
  ok(`prueba de nivel: ${preguntas} preguntas, resultado con nodo de inicio y sin marcas (todo «no lo sé»)`);

  // Simulacro (fase 6): modo papel, pasar un resultado, entregar con confirmación y ver la nota.
  for (const n of ["mat-numeros-naturales", "mat-enteros-fracciones", "mat-algebra-basica", "mat-proporcionalidad-porcentajes", "mat-geometria-basica", "mat-funciones-basicas"])
    db.prepare("insert or replace into node_progress (user_id,node_id,status,completed_at) values (?,?,'completed',unixepoch())").run(uid, n);
  await page.goto(`${BASE}/nodo/sim-mat-eso`);
  await page.locator('button:has-text("Empezar en modo papel")').click();
  await page.waitForURL(/\/examen\/\d+/);
  await page.locator('.examen-barra[role="timer"] strong').waitFor();
  assert.equal(await page.locator(".examen-respuesta").count(), 0, "en papel, primero se resuelve a mano");
  await page.locator('button:has-text("pasar resultados")').click();
  const primera = page.locator(".examen-items > li").first();
  await primera.locator('input[name="answer"], textarea[name="answer"]').first().fill("42");
  await primera.locator('.guardado:has-text("guardado")').waitFor();
  const intento = db.prepare("select id, answers from exam_attempts where user_id=? order by id desc").get(uid);
  assert.ok(intento.answers.includes("42"), "la respuesta se guarda sola");
  await page.locator('button:has-text("Entregar el examen")').click();
  await page.locator('button:has-text("Sí, entregar")').click();
  await page.locator('h1:has-text("Resultado")').waitFor();
  const fila = db.prepare("select score, max_score, finished_at from exam_attempts where id=?").get(intento.id);
  assert.ok(fila.finished_at && fila.max_score === 12);
  ok(`simulacro en papel: guardado automático, entrega y nota ${fila.score}/${fila.max_score}`);

  // Objetivos y tiempo de estudio (fase 8).
  await page.goto(`${BASE}/objetivos`);
  const obj = page.locator('.lista-objetivos > li:has-text("acceso a la universidad")');
  await obj.locator('summary:has-text("Activar")').click();
  await obj.locator('input[name="hours"]').fill("8");
  await obj.locator('button:has-text("Activar este objetivo")').click();
  await obj.locator('a.boton:has-text("")').first().waitFor();
  await page.goto(`${BASE}/`);
  await page.locator('.objetivos-inicio:has-text("acceso a la universidad")').waitFor();
  ok("objetivo activado: aparece en Inicio con avance y siguiente nodo");
  await page.goto(`${BASE}/nodo/mat-calculo-1`);
  await page.locator('.tiempo-form input[name="minutes"]').fill("40");
  await page.locator('.tiempo-form button').click();
  await page.locator('.tiempo-form .mensaje:has-text("40")').waitFor();
  const min = db.prepare("select sum(minutes) m from study_time where user_id=?").get(uid).m;
  assert.equal(min, 40);
  await page.goto(`${BASE}/`);
  assert.match(await page.locator(".calor + .nota").innerText(), /40 min de estudio/);
  ok("tiempo de estudio: anotado en el nodo y sumado en el mapa de actividad");

  // Escalera y glosario (fase 8A).
  await page.goto(`${BASE}/nodo/mat-proporcionalidad-porcentajes`);
  await page.locator('.registro-selector button:has-text("Práctico")').click();
  assert.equal(await page.locator(".callout-formal").first().evaluate((el) => getComputedStyle(el).display), "none");
  await page.reload();
  assert.equal(await page.locator("article[data-registro]").getAttribute("data-registro"), "practico", "la preferencia se recuerda");
  await page.locator('.registro-selector button:has-text("Todo")').click();
  assert.notEqual(await page.locator(".callout-formal").first().evaluate((el) => getComputedStyle(el).display), "none");
  assert.ok((await page.locator("a.termino").count()) > 0, "términos del glosario resaltados");
  await page.goto(`${BASE}/glosario?q=porcentaje`);
  await page.locator('.glosario-lista h3:has-text("porcentaje")').waitFor();
  ok("escalera práctico/formal con preferencia guardada, términos resaltados y /glosario con búsqueda");

  // Libreta con dibujo y calculadora (fase 8B).
  const notaId = db.prepare("insert into notes (user_id, title, body) values (?, 'Esquema de prueba', 'texto') returning id").get(uid).id;
  await page.goto(`${BASE}/libreta/${notaId}`);
  await page.locator('button:has-text("Añadir dibujo")').click();
  const papel = page.locator(".lienzo-papel");
  const caja = await papel.boundingBox();
  await page.mouse.move(caja.x + 50, caja.y + 50);
  await page.mouse.down();
  for (let i = 1; i <= 10; i++) await page.mouse.move(caja.x + 50 + i * 20, caja.y + 50 + i * 8);
  await page.mouse.up();
  // Dos trazos rápidos más (los eventos llegan antes de que React repinte: no deben quedarse en un punto).
  for (const [x0, y0, x1, y1] of [[300, 200, 400, 320], [400, 200, 300, 320]]) {
    await page.mouse.move(caja.x + x0, caja.y + y0);
    await page.mouse.down();
    await page.mouse.move(caja.x + x1, caja.y + y1, { steps: 4 });
    await page.mouse.up();
  }
  await page.locator('button:has-text("Guardar dibujo")').click();
  await page.locator(".dibujo svg path").first().waitFor();
  const guardado = JSON.parse(db.prepare("select strokes from note_drawings where user_id=?").get(uid).strokes);
  assert.equal(guardado.length, 3, "tres trazos guardados");
  assert.ok(guardado.every((t) => t.puntos.length >= 3), "ningún trazo rápido se queda en un punto");
  ok("libreta: dibujo a mano guardado y mostrado como SVG");
  await page.locator(".calc-boton").click();
  await page.locator(".calc-entrada").fill("2*sin(30) + sqrt(16)");
  await page.keyboard.press("Enter");
  assert.match(await page.locator(".calc-resultado").innerText(), /= 5/);
  ok("calculadora: 2·sin(30°) + √16 = 5 en grados");

  assert.deepEqual(errores, [], "errores de JavaScript en la página");
  await browser.close();
  console.log(`\n${pasos.length} comprobaciones superadas`);
}

main().catch((e) => {
  console.error("✖", e.message);
  process.exit(1);
});
