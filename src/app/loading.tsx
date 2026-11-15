/** Mientras el servidor prepara una página, se ve esto en lugar de la página anterior congelada. */
export default function Cargando() {
  return (
    <main className="pagina cargando-pagina" aria-busy="true">
      <p className="cargando-texto">Cargando…</p>
      <span className="esqueleto ancho" />
      <span className="esqueleto" />
      <span className="esqueleto" />
      <span className="esqueleto corto" />
    </main>
  );
}
