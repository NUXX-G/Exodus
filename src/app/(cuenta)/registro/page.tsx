import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import AccountForm from "@/components/AccountForm";
import { getSessionUser, hasOwner } from "@/lib/auth";
import { MIN_PASSWORD_LENGTH } from "@/lib/password";

export const dynamic = "force-dynamic";
// El código puede venir en la URL: que no viaje en la cabecera Referer a ningún otro sitio.
export const metadata: Metadata = { title: "Crear cuenta con invitación", referrer: "no-referrer" };

export default async function Registro({ searchParams }: { searchParams: Promise<{ codigo?: string | string[] }> }) {
  if (!hasOwner()) redirect("/configurar");
  if (await getSessionUser()) redirect("/");
  const { codigo } = await searchParams;

  return (
    <main className="pagina cuenta">
      <h1>Crea tu cuenta</h1>
      <p>
        Exodus es una instancia privada: solo se entra con una invitación de quien la administra. El código sirve para una
        sola cuenta y caduca.
      </p>
      <AccountForm mode="registro" minLength={MIN_PASSWORD_LENGTH} defaultCode={typeof codigo === "string" ? codigo.slice(0, 40) : undefined} />
      <p className="cuenta-alternativa">
        ¿Ya tienes cuenta? <Link href="/entrar">Entra</Link>.
      </p>
    </main>
  );
}
