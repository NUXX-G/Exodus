import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Archivo, JetBrains_Mono, STIX_Two_Text } from "next/font/google";
import IndicadorCarga from "@/components/IndicadorCarga";
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

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0d2440" };

const SECCIONES = [
  ["/", "Inicio"],
  ["/temario", "Temario"],
  ["/practica", "Práctica"],
  ["/recursos", "Recursos"],
  ["/repaso", "Repaso"],
  ["/buscar", "Buscar"],
  ["/libreta", "Libreta"],
  ["/guia", "Guía"],
  ["/cuenta", "Cuenta"],
] as const;

function Enlaces() {
  return (
    <>
      {SECCIONES.map(([href, texto]) => (
        <Link key={href} href={href}>
          {texto}
        </Link>
      ))}
      <form action={logoutAction}>
        <button type="submit" className="enlace-boton">
          Cerrar sesión
        </button>
      </form>
    </>
  );
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();

  return (
    <html lang="es" className={`${ui.variable} ${lectura.variable} ${codigo.variable}`}>
      <body>
        <div className="barra-superior">
          <header className="cabecera">
            <Link href="/" className="marca">
              Exodus
            </Link>
            {user ? (
              <>
                <nav aria-label="Principal" className="nav-escritorio">
                  <Enlaces />
                </nav>
                {/* En el móvil, un menú desplegable con todas las secciones (sin JavaScript: <details>). */}
                <details className="menu-movil">
                  <summary>Menú</summary>
                  <nav aria-label="Principal (móvil)">
                    <Enlaces />
                  </nav>
                </details>
              </>
            ) : (
              <nav aria-label="Ayuda" className="nav-escritorio nav-visible">
                <Link href="/guia">Guía</Link>
              </nav>
            )}
          </header>
        </div>
        <Suspense fallback={null}>
          <IndicadorCarga />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
