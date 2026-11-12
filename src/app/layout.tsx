import type { Metadata } from "next";
import Link from "next/link";
import { Archivo, JetBrains_Mono, STIX_Two_Text } from "next/font/google";
import { getSessionUser } from "@/lib/auth";
import { logoutAction } from "./(cuenta)/actions";
import "./globals.css";

const ui = Archivo({ subsets: ["latin"], variable: "--fuente-ui", display: "swap" });
const lectura = STIX_Two_Text({ subsets: ["latin"], variable: "--fuente-lectura", display: "swap" });
const codigo = JetBrains_Mono({ subsets: ["latin"], variable: "--fuente-codigo", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Exodus", template: "%s | Exodus" },
  description: "Árbol de conocimiento troncal con validación por retos.",
  robots: { index: false, follow: false },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();

  return (
    <html lang="es" className={`${ui.variable} ${lectura.variable} ${codigo.variable}`}>
      <body>
        <header className="cabecera">
          <Link href="/" className="marca">
            Exodus
          </Link>
          {user && (
            <nav aria-label="Principal">
              <Link href="/">Inicio</Link>
              <Link href="/temario">Temario</Link>
              <Link href="/repaso">Repaso</Link>
              <Link href="/buscar">Buscar</Link>
              <Link href="/cuenta">Cuenta</Link>
              <form action={logoutAction}>
                <button type="submit" className="enlace-boton">
                  Cerrar sesión
                </button>
              </form>
            </nav>
          )}
        </header>
        {children}
      </body>
    </html>
  );
}
