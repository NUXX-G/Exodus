import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Imagen Docker mínima: `.next/standalone` contiene solo lo necesario para ejecutar.
  output: "standalone",
  // Módulos que deben resolverse desde node_modules en runtime (binario nativo / carga dinámica).
  serverExternalPackages: ["better-sqlite3", "shiki", "mathjax-full"],
  outputFileTracingIncludes: {
    "/**": ["./database/migrations/**/*"],
  },
};

export default nextConfig;
