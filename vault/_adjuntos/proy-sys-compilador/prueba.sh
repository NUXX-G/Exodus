#!/usr/bin/env bash
# Pruebas de los hitos de proy-sys-compilador.
# Uso: bash prueba.sh ./mini N [-v]    (N = hito, de 1 a 8; runtime.c debe estar junto a este guion)
# Si todos los casos son correctos, el código que se imprime al final es la respuesta del hito en Exodus.
# Necesita Linux x86-64 con gcc (por ejemplo, la imagen de Docker gcc:latest).
set -u
k=$(cd "$(dirname "$1")" && pwd)/$(basename "$1")
hito=$2
detalle=${3:-}
rt=$(cd "$(dirname "$0")" && pwd)/runtime.c
[ -x "$k" ] || { echo "no encuentro un ejecutable en $1" >&2; exit 2; }
[ -f "$rt" ] || { echo "falta runtime.c junto a prueba.sh" >&2; exit 2; }
t=$(mktemp -d)
trap 'rm -rf "$t"' EXIT
total=""
anota() {
  total+="$1|$2"$'\n'
  printf '  %-22s %s\n' "$1" "$(printf '%s' "$2" | tr '\n' ' ' | cut -c1-80)"
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | sed 's/^/      | /'
}
m() { cat > "$t/$1.mini"; }
sal() { # sal ORDEN NOMBRE: salida estándar y código de salida
  local s
  s=$(cd "$t" && "$k" "$1" "$2.mini" 2>/dev/null)
  printf '%s\n[estado %s]' "$s" "$?"
}
estado() { # solo el código de salida (para los casos de error)
  (cd "$t" && "$k" "$1" "$2.mini" >/dev/null 2>&1)
  printf '[estado %s]' "$?"
}
nativo() { # compila con tu compilador y gcc, y ejecuta (máximo 10 s)
  if ! (cd "$t" && "$k" asm "$1.mini" > "$1.s" 2>/dev/null && gcc -o "$1.bin" "$1.s" "$rt" 2>/dev/null); then
    printf '[no compila]'
    return
  fi
  local s
  s=$(cd "$t" && timeout 10 "./$1.bin" 2>/dev/null)
  printf '%s\n[estado %s]' "$s" "$?"
}

# ---------- programas de prueba ----------
m lex1 <<'EOF'
// factorial
func fact(n) {
  if (n <= 1) { return 1; }   // caso base
  return n * fact(n - 1);
}
func main() { var x_1 = 007; print(fact(x_1) != 5040 && !0 || x_1 >= 3); }
EOF
printf 'a<=b==c!=!d&&e||f<g>h=i%%j/k*l-m+n;{},()\n\tiffy elsewhere return_ print _x9 9x\n' > "$t/lex2.mini"
: > "$t/lex3.mini"
printf '// solo un comentario\n' > "$t/lex4.mini"
printf 'var a = 3 & 4;\n' > "$t/lexmal1.mini"
printf 'x = 9223372036854775808;\n' > "$t/lexmal2.mini"
printf 'x = 9223372036854775807;\n' > "$t/lexlimite.mini"
printf 'var a\xc3\xb1o = 1;\n' > "$t/lexmal3.mini"
printf 'a @ b\n' > "$t/lexmal4.mini"

m ast1 <<'EOF'
func main() {
  var a = 1 + 2 * 3 - 4 / 2 % 3;
  a = -a * -(2 + 3);
  if (a < 0 || a >= 10 && !(a == 5)) { print(a); } else if (a != 3) { print(0); } else { { var b = a; } }
  while (a > 0) { a = a - 1; }
  f(a, g(), 3);
  return;
}
func f(x, y, z) { return x + y + z; }
func g() { return 7; }
EOF
m ast2 <<'EOF'
func main() {
  print(1 - 2 - 3); print(2 * 3 / 4 % 5); print(1 < 2 == 3 > 4);
  print(a || b || c && d && e); print(!!x); print(- - 5); print((((7))));
  x = y;
  h();
}
EOF
m ast3 <<'EOF'
func main() {}
EOF
printf 'func main() { var = 3; }\n' > "$t/astmal1.mini"
printf 'func main() { print(1) }\n' > "$t/astmal2.mini"
printf 'func main() { if x { } }\n' > "$t/astmal3.mini"
printf 'func main( { }\n' > "$t/astmal4.mini"
printf 'func main() { return 1 + ; }\n' > "$t/astmal5.mini"
printf 'var x = 1;\nfunc main() { }\n' > "$t/astmal6.mini"
printf 'func main() { 1 = 2; }\n' > "$t/astmal7.mini"
printf 'func main() {\n' > "$t/astmal8.mini"
printf 'func main() { if (1) { } else print(1); }\n' > "$t/astmal9.mini"

m chk1 <<'EOF'
func main() {
  var x = 1;
  { var x = x + 1; print(x); }
  var y = doble(x);
  while (y > 0) { var z = y; y = z - 1; }
  if (x) { var x = 5; } else { var w = 2; print(w); }
  return y;
}
func doble(n) { { var n = 3; } return n * 2; }
EOF
m chk2 <<'EOF'
func main() {
  var a = b;
  var a = 2;
  c = 3;
  f(1);
  h();
  { var a = a; var d = 1; }
  print(d);
  var e = e;
}
func f(x, y) { var x = 1; return x + y; }
func f() { return 0; }
func g(a, b, c, d, e, f, h) { return 0; }
EOF
m chk3 <<'EOF'
func f() { return 1; }
EOF
m chk4 <<'EOF'
func main(x) { return x; }
EOF
m chk5 <<'EOF'
func main() { return k(1, 2); }
func k(p, p) { return p; }
EOF
m chk6 <<'EOF'
func main() { var main2 = 1; print(main); return main2(); }
EOF
m chk7 <<'EOF'
func main() {
  if (1) { var t = 1; }
  while (0) { var w = 1; }
  { w = 2; }
  return t;
}
EOF

m run1 <<'EOF'
func fib(n) { if (n < 2) { return n; } return fib(n - 1) + fib(n - 2); }
func main() { var i = 0; while (i <= 15) { print(fib(i)); i = i + 3; } return fib(10); }
EOF
m run2 <<'EOF'
func main() {
  print(-7 / 2); print(-7 % 2); print(7 / -2); print(7 % -2); print(-7 / -2); print(-7 % -2);
  var m = 9223372036854775807; print(m + 1); print(-m - 1); print(m * 2); print(-(-m - 1));
  print(3 < 4); print(4 < 3); print(!5); print(!0); print(2 == 2 == 1); print(1 - 2 - 3); print(2 + 3 * 4 % 5);
  print(3 <= 3); print(3 >= 4); print(-3 > -4); print(5 != 5);
  return -1;
}
EOF
m run3 <<'EOF'
func dice(x) { print(x); return x; }
func tres(a, b, c) { return a * 100 + b * 10 + c; }
func main() {
  print(dice(0) && dice(1)); print(dice(2) || dice(3)); print(dice(4) && dice(0)); print(dice(0) || dice(5));
  print(tres(dice(1), dice(2), dice(3)));
  print(dice(6) - dice(7));
  return 0;
}
EOF
m run4 <<'EOF'
func main() {
  var x = 1;
  { var x = 2; print(x); x = 3; print(x); }
  print(x);
  var i = 0; var s = 0;
  while (i < 5) { var j = 0; while (j < i) { s = s + j; j = j + 1; } i = i + 1; }
  print(s);
  if (s > 100) { print(1); } else if (s > 10) { print(2); } else { print(3); }
  return s;
}
EOF
m run5 <<'EOF'
func main() { print(1); var z = 0; print(5 / z); print(2); return 0; }
EOF
m run6 <<'EOF'
func f() { print(9); }
func main() { print(f()); }
EOF
m run7 <<'EOF'
func mcd(a, b) { while (b != 0) { var t = a % b; a = b; b = t; } return a; }
func collatz(n) { var p = 0; while (n != 1) { if (n % 2 == 0) { n = n / 2; } else { n = 3 * n + 1; } p = p + 1; } return p; }
func main() { print(mcd(1071, 462)); print(collatz(27)); print(mcd(0, 5)); return collatz(97); }
EOF

m nat3 <<'EOF'
func main() {
  var z = 0;
  print(z != 0 && 10 / z > 1); print(z == 0 || 10 / z);
  var a = 1; var b = 2; var c = 3; var d = 4; var e = 5; var f = 6; var g = 7; var h = 8; var i = 9; var j = 10;
  var k = 11; var l = 12; var m = 13; var n = 14; var o = 15; var p = 16; var q = 17; var r = 18; var s = 19; var t = 20;
  print(a + b * c - d + e * f - g + h * i - j + k * l - m + n * o - p + q * r - s + t);
  var cuenta = 0; var x = 2;
  while (x < 50) {
    var y = 2; var primo = 1;
    while (y * y <= x) { if (x % y == 0) { primo = 0; } y = y + 1; }
    if (primo) { cuenta = cuenta + 1; }
    x = x + 1;
  }
  print(cuenta);
  return cuenta;
}
EOF
m nat4 <<'EOF'
func main() { print(7); print(1 % (3 - 3)); return 0; }
EOF

m fun1 <<'EOF'
func seis(a, b, c, d, e, f) { return a - b + c * d - e * f; }
func id(x) { return x; }
func main() {
  print(seis(1, 2, 3, 4, 5, 6));
  print(seis(id(6), id(5), seis(1, 1, 1, 1, 1, 1), id(3), 2, id(1)));
  print(id(id(id(42))));
  return seis(10, 9, 8, 7, 6, 5);
}
EOF
m fun2 <<'EOF'
func par(n) { if (n == 0) { return 1; } return impar(n - 1); }
func impar(n) { if (n == 0) { return 0; } return par(n - 1); }
func suma(n) { if (n == 0) { return 0; } return n + suma(n - 1); }
func main() { print(par(10)); print(impar(7)); print(suma(50000)); return 0; }
EOF
m fun3 <<'EOF'
func f(x) { print(x); return x * 10; }
func g(a, b) { return a + f(b); }
func main() { print(1 + f(2)); print(g(3, 4) + g(5, 6) * f(7)); print(f(f(f(1)))); return 0; }
EOF

m big1 <<'EOF'
func primo(n) {
  if (n < 2) { return 0; }
  var d = 2;
  while (d * d <= n) { if (n % d == 0) { return 0; } d = d + 1; }
  return 1;
}
func main() { var n = 0; var c = 0; while (n < 200000) { c = c + primo(n); n = n + 1; } print(c); return c % 256; }
EOF
m big2 <<'EOF'
func f(x) { return 100 / x; }
func main() { print(f(5)); print(1 + f(0)); return 0; }
EOF
m big3 <<'EOF'
func main() {
  print(9223372036854775807);
  var a = 4611686018427387904;
  print(a * 2); print(a * 4); print(-9223372036854775807 - 1);
  return 0;
}
EOF
m big4 <<'EOF'
func main() {
  print(((((((((1 + 2) * 3) - 4) * 5) + 6) * 7) - 8) * 9));
  print(1 + (2 + (3 + (4 + (5 + (6 + (7 + (8 + (9 + (10 + (11 + (12 + (13 + (14 + (15 + (16 + (17 + (18 + (19 + 20)))))))))))))))))));
  return 0;
}
EOF
m big5 <<'EOF'
func ack(m, n) {
  if (m == 0) { return n + 1; }
  if (n == 0) { return ack(m - 1, 1); }
  return ack(m - 1, ack(m, n - 1));
}
func main() { print(ack(2, 3)); return ack(3, 3); }
EOF
printf 'func main() { return x; }\n' > "$t/bigmal1.mini"
printf 'func main() { return 1 }\n' > "$t/bigmal2.mini"

m fold1 <<'EOF'
func main() {
  var a = 2 * 3 + 4;
  var b = a * (10 - 2 * 5);
  print(-(3 - 5) * !0 + (7 % -3));
  if (1 < 2) { print(a); } else { print(b); }
  if (0) { print(1); }
  if (0) { print(2); } else if (a) { print(3); } else { print(4); }
  if (b) { print(5); } else if (0) { print(6); }
  while (0) { print(7); }
  while (1 - 1 + a) { a = a - 1; }
  print(0 && f(1)); print(1 || f(2)); print(1 && f(3)); print(0 || 0); print(1 && 2); print(f(1 + 1));
  print(1 / 0); print(5 % (2 - 2));
  print(9223372036854775807 + 1);
  return a;
  print(99);
}
func f(x) { { return x; print(1); } return 0; if (1) { return 2; } }
EOF
m fold2 <<'EOF'
func main() {
  if (!(2 > 3)) { if (0) { print(1); } }
  if (3 - 3) { print(1); } else if (2 == 2) { print(2); } else { print(3); }
  var x = 0 || x;
  while (x) { if (1) { return 1; } x = 0; }
  return;
  return 5;
}
EOF

# ---------- casos por hito ----------
case $hito in
1)
  for c in lex1 lex2 lex3 lex4 lexlimite; do anota "$c" "$(sal lex $c)"; done
  for c in lexmal1 lexmal2 lexmal3 lexmal4; do anota "$c" "$(estado lex $c)"; done
  ;;
2)
  for c in ast1 ast2 ast3; do anota "$c" "$(sal ast $c)"; done
  for c in astmal1 astmal2 astmal3 astmal4 astmal5 astmal6 astmal7 astmal8 astmal9 lexmal1; do anota "$c" "$(estado ast $c)"; done
  ;;
3)
  for c in chk1 chk2 chk3 chk4 chk5 chk6 chk7; do anota "$c" "$(sal check $c)"; done
  anota sintaxis-mal "$(estado check astmal2)"
  ;;
4)
  for c in run1 run2 run3 run4 run5 run6 run7; do anota "$c" "$(sal run $c)"; done
  ;;
5)
  for c in run2 run4 nat3 nat4; do anota "$c" "$(nativo $c)"; done
  ;;
6)
  for c in run1 run3 run6 run7 fun1 fun2 fun3; do anota "$c" "$(nativo $c)"; done
  ;;
7)
  for c in big1 big2 big3 big4 big5; do anota "$c" "$(nativo $c)"; done
  for c in bigmal1 bigmal2; do anota "$c" "$(estado asm $c)"; done
  ;;
8)
  for c in fold1 fold2; do anota "$c" "$(sal fold $c)"; done
  ;;
*) echo "hito desconocido: $hito (de 1 a 8)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
