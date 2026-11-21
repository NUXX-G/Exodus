// Lista TODAS las variantes cuya respuesta coincide con uno de sus datos (ex-inject solo avisa de la primera).
import { pathToFileURL } from "node:url";
const m = await import(pathToFileURL(process.argv[2]).href);
for (const e of m.default) for (const [i, v] of (e.variants ?? []).entries()) {
  const datos = Object.values(v.values).map((x) => String(x).replace("{,}", "."));
  for (const a of v.answers) if (datos.includes(String(a))) console.log(`${e.id} variante ${i}: respuesta ${a} = dato (${JSON.stringify(v.values)})`);
}
