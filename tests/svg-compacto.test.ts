import assert from "node:assert/strict";
import { test } from "node:test";
import { unified } from "unified";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeMathjaxSvg from "../src/lib/rehype-mathjax-svg";
import { compactarFormulas } from "../src/lib/svg-compacto";

const render = async (md: string) =>
  String(await unified().use(remarkParse).use(remarkMath).use(remarkRehype).use(rehypeMathjaxSvg).use(rehypeStringify).process(md));

test("compactarFormulas: una sola copia de cada glifo y de la hoja de estilo, y cada referencia tiene su trazo", async () => {
  const a = await render(String.raw`$x^2 + x = 7$ y $$\frac{x}{2} = 7$$`);
  const b = await render(String.raw`$7x = 14$`);
  const { fragmentos, definiciones } = compactarFormulas([a, b, "<p>sin fórmulas</p>"]);

  assert.equal(fragmentos[2], "<p>sin fórmulas</p>");
  for (const f of fragmentos) {
    assert.doesNotMatch(f, /<defs>|<style>/);
    assert.doesNotMatch(f, /#MJX-\d+-TEX/);
  }
  const definidos = new Set([...definiciones.matchAll(/<path id="(MJX-G-[^"]+)"/g)].map((m) => m[1]));
  const usados = new Set([...fragmentos.join("").matchAll(/xlink:href="#(MJX-G-[^"]+)"/g)].map((m) => m[1]));
  assert.ok(usados.size > 0);
  assert.deepEqual([...usados].filter((u) => !definidos.has(u)), [], "toda referencia tiene su trazo");
  // «x» y «7» aparecen en varias fórmulas pero se definen una vez.
  const ids = [...definiciones.matchAll(/<path id="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, new Set(ids).size);
  assert.equal((definiciones.match(/<style>/g) ?? []).length, 1);
  // Antes había más trazos que después.
  const antes = (a + b).match(/<path id=/g)?.length ?? 0;
  assert.ok(ids.length < antes, `${ids.length} < ${antes}`);
});

test("compactarFormulas: un fragmento con un glifo que choca con otro distinto se deja intacto", () => {
  const raro =
    '<mjx-container class="MathJax" jax="SVG"><svg><defs><path id="MJX-1-TEX-N-37" d="M0 0"></path></defs><use xlink:href="#MJX-1-TEX-N-37"></use></svg></mjx-container>';
  const otro =
    '<mjx-container class="MathJax" jax="SVG"><svg><defs><path id="MJX-9-TEX-N-37" d="M1 1"></path></defs><use xlink:href="#MJX-9-TEX-N-37"></use></svg></mjx-container>';
  const { fragmentos, definiciones } = compactarFormulas([raro, otro]);
  assert.match(fragmentos[0], /#MJX-G-TEX-N-37/);
  assert.equal(fragmentos[1], otro);
  assert.match(definiciones, /d="M0 0"/);
  assert.doesNotMatch(definiciones, /d="M1 1"/);
});
