import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import AccountForm from "@/components/AccountForm";
import { getSessionUser, hasOwner } from "@/lib/auth";
import { MIN_PASSWORD_LENGTH } from "@/lib/password";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Entrar" };

export default async function Entrar() {
  if (!hasOwner()) redirect("/configurar");
  if (await getSessionUser()) redirect("/");

  return (
    <main className="pagina cuenta">
      <h1>Entrar en Exodus</h1>
      <AccountForm mode="entrar" minLength={MIN_PASSWORD_LENGTH} />
      <p className="cuenta-alternativa">
        ¿Te han invitado? <Link href="/registro">Crea tu cuenta con el código</Link>.
      </p>
    </main>
  );
}
