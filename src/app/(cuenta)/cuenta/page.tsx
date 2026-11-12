import type { Metadata } from "next";
import { PasswordForm, SessionsForm } from "@/components/SecurityForms";
import { activeSessions, requireUser } from "@/lib/auth";
import { MIN_PASSWORD_LENGTH } from "@/lib/password";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Cuenta" };

export default async function Cuenta() {
  const user = await requireUser();
  const sessions = await activeSessions();
  const others = Math.max(0, sessions - 1);

  return (
    <main className="pagina cuenta">
      <h1>Cuenta</h1>
      <p>
        Usuario <strong>{user.username}</strong>, creado el{" "}
        {user.createdAt.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}.
      </p>

      <h2>Contraseña</h2>
      <p>Al cambiarla se cierran todas las demás sesiones; esta sigue abierta.</p>
      <PasswordForm minLength={MIN_PASSWORD_LENGTH} username={user.username} />

      <h2>Sesiones</h2>
      <p>
        {others === 0
          ? "Solo está abierta la sesión de este navegador."
          : `Además de esta, hay ${others} ${others === 1 ? "sesión abierta" : "sesiones abiertas"} en otros navegadores o dispositivos.`}
      </p>
      <SessionsForm others={others} />
    </main>
  );
}
