/** Hash de contraseñas con scrypt (RFC 7914). Formato: scrypt$<log2 N>$<sal b64>$<clave b64>. */
import crypto from "node:crypto";

const LOG_N = 15; // N = 32768, r = 8, p = 1: ~32 MB y decenas de ms por intento
const KEY_LEN = 64;
export const MIN_PASSWORD_LENGTH = 10;

function derive(password: string, salt: Buffer, logN: number): Buffer {
  return crypto.scryptSync(password.normalize("NFKC"), salt, KEY_LEN, {
    N: 2 ** logN,
    r: 8,
    p: 1,
    maxmem: 256 * 1024 * 1024,
  });
}

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16);
  return `scrypt$${LOG_N}$${salt.toString("base64")}$${derive(password, salt, LOG_N).toString("base64")}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [scheme, logN, salt, key] = stored.split("$");
  if (scheme !== "scrypt" || !logN || !salt || !key) return false;
  const n = Number(logN);
  if (!Number.isInteger(n) || n < 10 || n > 20) return false;
  const expected = Buffer.from(key, "base64");
  const got = derive(password, Buffer.from(salt, "base64"), n);
  return expected.length === got.length && crypto.timingSafeEqual(expected, got);
}
