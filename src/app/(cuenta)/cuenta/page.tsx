import type { Metadata } from "next";
import { InviteForm, RevokeButton } from "@/components/InviteForms";
import { ObsidianDownloadForm, RevokeTokenButton } from "@/components/ObsidianForms";
import { PasswordForm, SessionsForm } from "@/components/SecurityForms";
import { activeSessions, ownApiTokens, ownInvitations, requireUser } from "@/lib/auth";
import { INVITE_DAYS, MAX_NOTE, type InvitationRow } from "@/lib/invitations";
import { MIN_PASSWORD_LENGTH } from "@/lib/password";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Cuenta" };

export default async function Cuenta() {
  const user = await requireUser();
  const sessions = await activeSessions();
  const others = Math.max(0, sessions - 1);
  const admin = user.role === "admin";
  const invitations = admin ? await ownInvitations() : [];
  const tokens = await ownApiTokens();

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

      <h2>Obsidian</h2>
      <p>
        Lleva tu progreso a Obsidian: el temario con tu estado, cada nodo que has abierto con su teoría y tus ejercicios
        resueltos, los repasos pendientes y un registro por días. Con sincronización, el plugin lo actualiza solo al
        abrir Obsidian y cada 30 minutos; lo que escribas en «Mis notas» nunca se sobrescribe.
      </p>
      <ObsidianDownloadForm />
      {tokens.length > 0 && (
        <table className="invitaciones">
          <thead>
            <tr>
              <th scope="col">Conexión</th>
              <th scope="col">Último uso</th>
              <th scope="col">
                <span className="sr-only">Acciones</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((t) => (
              <tr key={t.id}>
                <td>{t.name}</td>
                <td>{t.lastUsedAt ? fecha(t.lastUsedAt) : <span className="tenue">nunca</span>}</td>
                <td>
                  <RevokeTokenButton id={t.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {admin && (
        <>
          <h2>Invitaciones</h2>
          <p>
            Para que un amigo tenga su propia cuenta (con su progreso aparte), genera una invitación y pásale el enlace o el
            código: la usa en <code>/registro</code>. Cada una sirve para una sola cuenta y caduca; nadie puede registrarse
            sin una. Las cuentas invitadas no pueden invitar.
          </p>
          <InviteForm days={INVITE_DAYS} maxNote={MAX_NOTE} />
          {invitations.length > 0 && <InvitationList rows={invitations} />}
        </>
      )}
    </main>
  );
}

const fecha = (d: Date) => d.toLocaleString("es-ES", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

function InvitationList({ rows }: { rows: InvitationRow[] }) {
  return (
    <table className="invitaciones">
      <thead>
        <tr>
          <th scope="col">Para</th>
          <th scope="col">Estado</th>
          <th scope="col">
            <span className="sr-only">Acciones</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.id} data-estado={r.state}>
            <td>{r.note ?? <span className="tenue">sin nota</span>}</td>
            <td>
              {r.state === "usada"
                ? `Usada por ${r.usedByName ?? "una cuenta borrada"} el ${fecha(r.usedAt!)}`
                : r.state === "pendiente"
                  ? `Pendiente, caduca el ${fecha(r.expiresAt)}`
                  : `Caducada el ${fecha(r.expiresAt)}`}
            </td>
            <td>{r.state === "pendiente" && <RevokeButton id={r.id} />}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
