---
glosario: ciberseguridad
terminos:
  - termino: función hash
    sinonimos: [funciones hash]
    llano: "Una función que convierte cualquier dato en una «huella» corta de tamaño fijo; cambiar una sola letra del dato cambia la huella por completo."
    formal: "Función $H\\colon \\{0,1\\}^* \\to \\{0,1\\}^n$; criptográfica si es resistente a preimágenes, a segundas preimágenes y a colisiones (por ejemplo, SHA-256)."
    nodo: sec-fundamentos
  - termino: vulnerabilidad
    sinonimos: [vulnerabilidades]
    llano: "Un fallo en un programa o en una configuración que alguien podría aprovechar para hacer lo que no debería."
    formal: "Debilidad de un sistema que puede ser explotada por una amenaza (catalogadas como CVE; sus tipos, como CWE)."
    nodo: sec-fundamentos
  - termino: texto en claro
    llano: "El mensaje original, legible, antes de cifrarlo (o después de descifrarlo)."
    formal: "Entrada $m$ del algoritmo de cifrado; el criptograma es $c = \\mathsf{Enc}_k(m)$."
    nodo: sec-criptografia
  - termino: cifrado simétrico
    llano: "Un tipo de cifrado en el que se usa la misma clave para cifrar y para descifrar, como un candado con una sola llave que tienen las dos partes."
    formal: "Esquema $(\\mathsf{Gen}, \\mathsf{Enc}, \\mathsf{Dec})$ con $\\mathsf{Dec}_k(\\mathsf{Enc}_k(m)) = m$ y la misma clave $k$ en los dos sentidos (por ejemplo, AES)."
    nodo: sec-criptografia
---

Glosario de ciberseguridad (esta nota no es un nodo).
