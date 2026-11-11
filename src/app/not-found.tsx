import Link from "next/link";

export default function NoEncontrado() {
  return (
    <main className="pagina">
      <h1>Este nodo no existe en el vault</h1>
      <p>
        Puede que el archivo se haya renombrado o que su <code>id</code> haya cambiado.{" "}
        <Link href="/">Volver al árbol</Link>
      </p>
    </main>
  );
}
