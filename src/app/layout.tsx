import type { Metadata } from "next";
import Link from "next/link";
import { Archivo, JetBrains_Mono, STIX_Two_Text } from "next/font/google";
import "./globals.css";

const ui = Archivo({ subsets: ["latin"], variable: "--fuente-ui", display: "swap" });
const lectura = STIX_Two_Text({ subsets: ["latin"], variable: "--fuente-lectura", display: "swap" });
const codigo = JetBrains_Mono({ subsets: ["latin"], variable: "--fuente-codigo", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Exodus", template: "%s · Exodus" },
  description: "Árbol de conocimiento troncal con validación por retos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${ui.variable} ${lectura.variable} ${codigo.variable}`}>
      <body>
        <header className="cabecera">
          <Link href="/" className="marca">
            Exodus
          </Link>
          <nav aria-label="Principal">
            <Link href="/">Árbol</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
