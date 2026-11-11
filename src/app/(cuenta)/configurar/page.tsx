import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AccountForm from "@/components/AccountForm";
import { hasOwner } from "@/lib/auth";
import { MIN_PASSWORD_LENGTH } from "@/lib/password";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Crear cuenta" };

export default function Configurar() {
  if (hasOwner()) redirect("/entrar");

  return (
    <main className="pagina cuenta">
      <h1>Crea la cuenta de esta instancia</h1>
      <p>
        Exodus es de un solo estudiante: esta será la única cuenta. Después de crearla, esta página deja de estar
        disponible.
      </p>
      <AccountForm mode="configurar" minLength={MIN_PASSWORD_LENGTH} />
    </main>
  );
}
