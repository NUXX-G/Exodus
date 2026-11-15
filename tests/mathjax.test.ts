import assert from "node:assert/strict";
import { test } from "node:test";
import { unified } from "unified";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeMathjaxSvg from "../src/lib/rehype-mathjax-svg";

const render = async (md: string) =>
  String(await unified().use(remarkParse).use(remarkMath).use(remarkRehype).use(rehypeMathjaxSvg).use(rehypeStringify).process(md));

test("MathJax compartido: SVG en línea y en bloque, hoja de estilo una vez por renderizado", async () => {
  const html = await render(String.raw`Sea $x^2$ y

$$\int_0^1 x\,dx = \tfrac12$$
`);
  assert.equal((html.match(/<mjx-container/g) ?? []).length, 2);
  assert.match(html, /display="true"/);
  assert.equal((html.match(/<style>/g) ?? []).length, 1);
  assert.doesNotMatch(html, /data-mjx-error/);
});

test("MathJax compartido: el mismo texto da el mismo SVG en renderizados sucesivos (salvo la numeración de ids)", async () => {
  const norm = (s: string) => s.replace(/MJX-\d+-/g, "MJX-N-");
  const md = String.raw`$\sum_{k=1}^n k = \frac{n(n+1)}{2}$`;
  assert.equal(norm(await render(md)), norm(await render(md)));
});

test("MathJax compartido: las órdenes con estado se rechazan con data-mjx-error (vault:check falla)", async () => {
  const html = await render(String.raw`$\newcommand{\R}{\mathbb{R}} \R$`);
  assert.match(html, /data-mjx-error="[^"]*\\newcommand/);
  // Y no contaminan el siguiente renderizado: \R sigue sin definir (no sale la ℝ, U+211D).
  const despues = await render(String.raw`$\R$`);
  assert.doesNotMatch(despues, /211D/);
  assert.match(await render(String.raw`$\mathbb{R}$`), /211D/);
});

test("MathJax compartido: un error de TeX no rompe el renderizado y vault:check lo ve", async () => {
  const html = await render(String.raw`$\frac{1}$ y luego $y$`);
  assert.match(html, /data-mjx-error/);
  assert.equal((html.match(/<mjx-container/g) ?? []).length, 2);
});
