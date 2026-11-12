/**
 * Base de datos SQLite temporal para los tests de la capa de persistencia. Debe importarse ANTES que
 * cualquier módulo que use getDb(): fija DATABASE_PATH a un archivo nuevo en el directorio temporal
 * del sistema (las migraciones se aplican al abrirlo) y lo borra al terminar el proceso.
 *
 * Los tests se ejecutan con `--conditions=react-server` para que el paquete `server-only` resuelva a
 * su versión vacía, igual que dentro de Next.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "exodus-test-"));
process.env.DATABASE_PATH = path.join(dir, "test.db");
process.on("exit", () => {
  // En Windows el archivo sigue abierto por SQLite al salir: la limpieza es de mejor esfuerzo.
  try {
    fs.rmSync(dir, { recursive: true, force: true });
  } catch {
    /* lo limpiará el sistema con el resto de temporales */
  }
});
