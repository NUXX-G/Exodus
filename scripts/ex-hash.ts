/**
 * Genera el hash de una respuesta de ejercicio para el frontmatter (`answers:`).
 * Uso: npm run vault:ex -- "3/4"        (acepta varias respuestas equivalentes separadas por argumentos)
 */
import { hashAnswer, normalizeAnswer } from "../src/lib/exercises";

const answers = process.argv.slice(2);
if (answers.length === 0) {
  console.error('Uso: npm run vault:ex -- "respuesta" ["otra forma equivalente" ...]');
  process.exit(1);
}
for (const a of answers) console.log(`    - "${hashAnswer(a)}"   # normalizada: ${normalizeAnswer(a)}`);
