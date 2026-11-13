import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AccountForm from "@/components/AccountForm";
import { announceSetupCode, hasOwner } from "@/lib/auth";
import { MIN_PASSWORD_LENGTH } from "@/lib/password";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Crear cuenta" };

export default function Configurar() {
  if (hasOwner()) redirect("/entrar");
  announceSetupCode();

  return (
    <main className="pagina cuenta">
      <h1>Crea la cuenta de esta instancia</h1>
      <p>
        Esta será la cuenta principal de la instancia. Después de crearla, esta página deja de estar disponible; para
        dar acceso a otras personas, genera invitaciones desde tu cuenta.
      </p>
      <p>
        El código de configuración está en el registro del servidor: en la terminal de <code>npm run dev</code>, o con{" "}
        <code>docker compose -f docker/docker-compose.yml logs web</code>.
      </p>
      <AccountForm mode="configurar" minLength={MIN_PASSWORD_LENGTH} />
    </main>
  );
}
