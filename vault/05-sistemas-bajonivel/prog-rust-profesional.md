---
id: prog-rust-profesional
title: "Rust V, en producción: proyectos y workspaces, diseño de API y semver, errores con thiserror y anyhow, pruebas, rendimiento, tracing, serde, servicios con axum, CLI y CI"
area: bajo-nivel
trunk_level: 13
prerequisites: [prog-rust-unsafe-ffi-macros, sys-redes-sockets]
academic_sources:
  - "Rust API Guidelines, The Cargo Book (SemVer Compatibility, Features, Profiles) y documentación de tokio, axum, serde, tracing, thiserror y anyhow. Consultados en noviembre de 2026."
  - "Gjengset, J. Rust for Rustaceans: Idiomatic Programming for Experienced Developers. No Starch Press, 2021 (caps. Designing Interfaces, Error Handling, Testing, Project Structure)."
  - "Palmieri, L. Zero To Production In Rust: An Opinionated Introduction to Backend Development. Autoedición, 2022."
exercises:
  - id: semver-caret
    tier: 1
    prompt: |
      ¿Qué versiones acepta el requisito `^1.2.3` (el que escribe cargo si pones `"1.2.3"`)? Las líneas `// cargo:` son las que se añaden a `Cargo.toml`.

      ```rust
      // cargo: semver = "1"
      use semver::{Version, VersionReq};

      fn main() {
          let req = VersionReq::parse("^1.2.3").unwrap();
          let candidatas = ["1.2.2", "1.2.3", "1.2.9", "1.9.0", "2.0.0", "1.3.0-beta.1"];
          let ok: Vec<&str> = candidatas.iter().copied().filter(|v| req.matches(&Version::parse(v).unwrap())).collect();
          println!("{}", ok.join(" "));
      }
      ```

      Respuesta: las versiones aceptadas, separadas por espacios, en el orden de la lista.
    answers: ["sha256:5d9db2a6d7ae17a34725e8e8d3f6461dc1cf931c52a1988c0cf79ee883df28d2"]
  - id: semver-cero
    tier: 1
    prompt: |
      ¿Cuántas versiones de la lista acepta cada requisito? (En las versiones 0.x, el *caret* trata la versión menor como si fuera la mayor.)

      ```rust
      // cargo: semver = "1"
      use semver::{Version, VersionReq};

      fn main() {
          let candidatas = ["0.3.0", "0.3.7", "0.4.0", "1.2.0", "1.2.8", "1.3.0", "1.4.9", "1.5.0"];
          for r in ["0.3", "~1.2", ">=1.2, <1.5"] {
              let req = VersionReq::parse(r).unwrap();
              let n = candidatas.iter().filter(|v| req.matches(&Version::parse(v).unwrap())).count();
              print!("{n} ");
          }
          println!();
      }
      ```

      Respuesta: los tres números separados por espacios.
    answers: ["sha256:84a5092e4a5b6fe968fd523fb2fc917dbffae44105f82b6b94c8ed5b9a800223"]
  - id: serde-renombrar
    tier: 1
    prompt: |
      ¿Qué JSON imprime?

      ```rust
      // cargo: serde = { version = "1", features = ["derive"] }
      // cargo: serde_json = "1"
      use serde::{Deserialize, Serialize};

      #[derive(Debug, Serialize, Deserialize)]
      #[serde(rename_all = "camelCase")]
      struct Usuario {
          nombre_completo: String,
          #[serde(default)]
          es_admin: bool,
          #[serde(skip_serializing_if = "Option::is_none")]
          telefono: Option<String>,
      }

      fn main() {
          let u: Usuario = serde_json::from_str(r#"{"nombreCompleto": "Ana Ruiz"}"#).unwrap();
          println!("{}", serde_json::to_string(&u).unwrap());
      }
      ```

      Respuesta: el JSON tal cual.
    answers: ["sha256:9a18d516a5718c37f3626f1f6798f0a0757c75d413580143c7b15af1296f169a"]
  - id: thiserror
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      // cargo: thiserror = "2"
      use std::num::ParseIntError;
      use thiserror::Error;

      #[derive(Debug, Error)]
      enum ErrorPedido {
          #[error("cantidad inválida: {0}")]
          Cantidad(#[from] ParseIntError),
          #[error("producto desconocido «{nombre}»")]
          Desconocido { nombre: String },
      }

      fn pedido(producto: &str, cantidad: &str) -> Result<u32, ErrorPedido> {
          let n: u32 = cantidad.parse()?;
          if producto != "tornillo" {
              return Err(ErrorPedido::Desconocido { nombre: producto.to_string() });
          }
          Ok(n * 25)
      }

      fn main() {
          for (p, c) in [("tornillo", "4"), ("tornillo", "cuatro"), ("tuerca", "1")] {
              match pedido(p, c) {
                  Ok(v) => println!("{v}"),
                  Err(e) => println!("{e}"),
              }
          }
      }
      ```

      Respuesta: las tres líneas separadas por `;`.
    answers: ["sha256:6dea37ae07712a9925ceedfbb21ced5957d46f105a09e3b66e4702dbf2782714"]
  - id: anyhow-contexto
    tier: 1
    prompt: |
      ¿Qué imprime? (`{:#}` muestra la cadena de causas en una línea.)

      ```rust
      // cargo: anyhow = "1"
      use anyhow::{Context, Result};

      fn leer_puerto(texto: &str) -> Result<u16> {
          let linea = texto.lines().find(|l| l.starts_with("puerto=")).context("falta la clave puerto")?;
          let valor = &linea["puerto=".len()..];
          valor.parse::<u16>().with_context(|| format!("puerto «{valor}» no válido"))
      }

      fn main() {
          println!("{:?}", leer_puerto("nombre=x\npuerto=8080").ok());
          let e1 = leer_puerto("nombre=x").unwrap_err();
          let e2 = leer_puerto("puerto=99999").unwrap_err();
          println!("{e1}");
          println!("{e2}");
          println!("{e2:#}");
          println!("{}", e2.chain().count());
      }
      ```

      Respuesta: las cinco líneas separadas por `;`.
    answers: ["sha256:fb287d8952661d69bb5506017c94126cb7266aa253bc93c0e465f46ae4f1e6b3"]
  - id: clap
    tier: 1
    prompt: |
      ¿Qué imprime? (`kind()` da la clase de error de clap.)

      ```rust
      // cargo: clap = { version = "4", features = ["derive"] }
      use clap::Parser;

      #[derive(Parser, Debug)]
      #[command(name = "copia")]
      struct Args {
          origen: String,
          #[arg(short, long, default_value_t = 7)]
          copias: u32,
          #[arg(short, long, action = clap::ArgAction::Count)]
          verbose: u8,
          #[arg(long)]
          excluir: Vec<String>,
      }

      fn main() {
          let a = Args::parse_from(["copia", "/datos", "-vv", "--excluir", "*.tmp", "--excluir", "cache", "-c", "3"]);
          println!("{} {} {} {:?}", a.origen, a.copias, a.verbose, a.excluir);
          let e = Args::try_parse_from(["copia", "/datos", "--copias", "muchas"]).unwrap_err();
          println!("{:?}", e.kind());
      }
      ```

      Respuesta: las dos líneas separadas por `;`.
    answers: ["sha256:4ba82b524d25e8b0bc47076d9e3c05c0f993767cd33f84580707c8b31c1f116f"]
  - id: combinadores
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::collections::HashMap;

      fn main() {
          let precios: HashMap<&str, u32> = [("pan", 120), ("leche", 95)].into_iter().collect();
          let total = |p: &str, n: &str| -> Result<u32, String> {
              let precio = precios.get(p).copied().ok_or(format!("sin precio: {p}"))?;
              let n: u32 = n.parse().map_err(|_| format!("cantidad: {n}"))?;
              precio.checked_mul(n).ok_or_else(|| "desbordamiento".to_string())
          };
          println!("{:?}", total("pan", "3"));
          println!("{:?}", total("vino", "1"));
          println!("{:?}", total("leche", "x"));
          let opt: Option<&u32> = precios.get("pan");
          println!("{} {}", opt.map_or(0, |p| p / 10), precios.get("sal").is_some_and(|&p| p > 0));
      }
      ```

      Respuesta: las cuatro líneas separadas por `;`.
    answers: ["sha256:188710a466d79c20da05dffb5f86084a9d71978782b2c06cfec184d9f8481866"]
  - id: builder
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      #[derive(Debug)]
      struct Peticion {
          url: String,
          metodo: &'static str,
          reintentos: u8,
          cabeceras: Vec<(String, String)>,
      }

      #[derive(Default)]
      struct Constructor {
          url: Option<String>,
          metodo: Option<&'static str>,
          reintentos: u8,
          cabeceras: Vec<(String, String)>,
      }

      impl Constructor {
          fn url(mut self, u: &str) -> Self {
              self.url = Some(u.into());
              self
          }
          fn post(mut self) -> Self {
              self.metodo = Some("POST");
              self
          }
          fn reintentos(mut self, n: u8) -> Self {
              self.reintentos = n.min(5);
              self
          }
          fn cabecera(mut self, k: &str, v: &str) -> Self {
              self.cabeceras.push((k.into(), v.into()));
              self
          }
          fn construir(self) -> Result<Peticion, &'static str> {
              Ok(Peticion {
                  url: self.url.ok_or("falta la url")?,
                  metodo: self.metodo.unwrap_or("GET"),
                  reintentos: self.reintentos,
                  cabeceras: self.cabeceras,
              })
          }
      }

      fn main() {
          let p = Constructor::default().url("https://x").post().reintentos(9).cabecera("a", "1").cabecera("b", "2").construir().unwrap();
          println!("{} {} {} {}", p.url, p.metodo, p.reintentos, p.cabeceras.len());
          println!("{:?}", Constructor::default().post().construir().map(|p| p.metodo));
      }
      ```

      Respuesta: las dos líneas separadas por `;`.
    answers: ["sha256:ed2d1b2b88d6c4e9bad08c503b7b871da473410054dcbe69b0665f5f520d164c"]
  - id: features
    tier: 2
    prompt: |
      Las líneas `// cargo:` crean la sección `[features]` de `Cargo.toml`, y el programa se compila con `cargo run` sin opciones. ¿Qué imprime?

      ```rust
      // cargo: [features]
      // cargo: default = ["json"]
      // cargo: json = []
      // cargo: metricas = []
      fn formatos() -> Vec<&'static str> {
          let mut v = vec!["texto"];
          if cfg!(feature = "json") {
              v.push("json");
          }
          #[cfg(feature = "metricas")]
          v.push("metricas");
          v
      }

      fn main() {
          println!("{:?}", formatos());
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:96f822e8b6d74a1a2132f6b5ba56145aeda8491be98a5ce5d73e0157a0bce437"]
  - id: depuracion-y-error
    tier: 2
    prompt: |
      El formato `{:?}` de un error de anyhow muestra el mensaje y la lista de causas. ¿Cuántas líneas no vacías tiene?

      ```rust
      // cargo: anyhow = "1"
      use anyhow::{anyhow, Context};

      fn main() {
          let e = Err::<(), _>(anyhow!("disco lleno")).context("escribiendo el registro").context("guardando el pedido 42").unwrap_err();
          let depuracion = format!("{e:?}");
          let lineas: Vec<&str> = depuracion.lines().filter(|l| !l.trim().is_empty()).collect();
          println!("{}", lineas.len());
          println!("{}", lineas.join("|"));
      }
      ```

      Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: serde-enums
    tier: 2
    prompt: |
      ¿Qué imprime? Compara la representación por defecto (externa) con `#[serde(tag = "tipo")]` (interna).

      ```rust
      // cargo: serde = { version = "1", features = ["derive"] }
      // cargo: serde_json = "1"
      use serde::Serialize;

      #[derive(Serialize)]
      enum Externo {
          Clic { x: i32, y: i32 },
          Tecla(char),
      }

      #[derive(Serialize)]
      #[serde(tag = "tipo", rename_all = "snake_case")]
      enum Interno {
          Clic { x: i32, y: i32 },
          Salir,
      }

      fn main() {
          println!("{}", serde_json::to_string(&Externo::Clic { x: 1, y: 2 }).unwrap());
          println!("{}", serde_json::to_string(&Externo::Tecla('q')).unwrap());
          println!("{}", serde_json::to_string(&Interno::Clic { x: 1, y: 2 }).unwrap());
          println!("{}", serde_json::to_string(&Interno::Salir).unwrap());
      }
      ```

      Respuesta: las cuatro líneas separadas por `;`.
    answers: ["sha256:005f4a0b7e383303377dd081703285a4a97dd69d4945be6b8f226c3ee9ae4401"]
  - id: fromstr
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::str::FromStr;

      #[derive(Debug, PartialEq)]
      struct Rgb(u8, u8, u8);

      impl FromStr for Rgb {
          type Err = String;
          fn from_str(s: &str) -> Result<Self, Self::Err> {
              let h = s.strip_prefix('#').ok_or("falta #")?;
              if h.len() != 6 {
                  return Err(format!("longitud {}", h.len()));
              }
              let c = |i: usize| u8::from_str_radix(&h[i..i + 2], 16).map_err(|e| e.to_string());
              Ok(Rgb(c(0)?, c(2)?, c(4)?))
          }
      }

      fn main() {
          let r: Result<Vec<Rgb>, _> = ["#ff8000", "#00ff7f"].iter().map(|s| s.parse()).collect();
          println!("{:?}", r);
          for s in ["ff8000", "#fff", "#gg0000"] {
              println!("{:?}", s.parse::<Rgb>());
          }
      }
      ```

      Respuesta: las cuatro líneas separadas por `;`.
    answers: ["sha256:a41ef6d344d30d62dc0c54609e2242046270a3bfbf4a920d84f303b60a0297fb"]
  - id: newtype-validado
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      #[derive(Debug, Clone, PartialEq)]
      struct Email(String);

      impl Email {
          fn nuevo(s: &str) -> Result<Self, &'static str> {
              let s = s.trim().to_lowercase();
              let (local, dominio) = s.split_once('@').ok_or("sin @")?;
              if local.is_empty() || !dominio.contains('.') || dominio.starts_with('.') || dominio.ends_with('.') {
                  return Err("formato");
              }
              Ok(Email(s))
          }
          fn dominio(&self) -> &str {
              self.0.split_once('@').map(|(_, d)| d).unwrap_or("")
          }
      }

      fn main() {
          let validos: Vec<Email> = [" Ana@Ejemplo.ES ", "x@y", "luis@empresa.com", "@a.b", "eva@.com"].iter().filter_map(|s| Email::nuevo(s).ok()).collect();
          let dominios: Vec<&str> = validos.iter().map(Email::dominio).collect();
          println!("{} {:?}", validos.len(), dominios);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:b13c3b88b991039d04dbe7921d56f0411700e06a68e587b0140420bf8abf7a25"]
  - id: cadena-de-causas
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      // cargo: thiserror = "2"
      use std::error::Error;
      use thiserror::Error;

      #[derive(Debug, Error)]
      #[error("fallo de E/S simulado")]
      struct Io;

      #[derive(Debug, Error)]
      #[error("no se pudo leer la configuración")]
      struct Config(#[source] Io);

      #[derive(Debug, Error)]
      #[error("el servicio no arrancó")]
      struct Arranque(#[from] Config);

      fn main() {
          let e: Box<dyn Error> = Box::new(Arranque::from(Config(Io)));
          let mut causas = vec![e.to_string()];
          let mut actual = e.source();
          while let Some(c) = actual {
              causas.push(c.to_string());
              actual = c.source();
          }
          println!("{}", causas.join(" <- "));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:9d37c9d39b53867e85f0e094aace1256d6bb68ab6f6476c636c8f4b6dd26962a"]
  - id: axum
    tier: 3
    prompt: |
      Se prueba un servicio de axum sin abrir ningún puerto, enviando peticiones directamente al `Router`. ¿Qué código de estado devuelve cada una de las cinco peticiones, y cuántas visitas indica la cuarta?

      ```rust
      // cargo: axum = "0.8"
      // cargo: tokio = { version = "1", features = ["full"] }
      // cargo: tower = { version = "0.5", features = ["util"] }
      // cargo: serde = { version = "1", features = ["derive"] }
      // cargo: http-body-util = "0.1"
      // cargo: serde_json = "1"
      use axum::{
          body::Body,
          extract::{Path, Query, State},
          http::{Request, StatusCode},
          routing::get,
          Json, Router,
      };
      use http_body_util::BodyExt;
      use serde::Deserialize;
      use std::sync::{Arc, Mutex};
      use tower::ServiceExt;

      #[derive(Deserialize)]
      struct Operandos {
          a: i64,
          b: i64,
      }

      async fn suma(Query(o): Query<Operandos>) -> String {
          (o.a + o.b).to_string()
      }

      async fn visita(State(n): State<Arc<Mutex<u32>>>, Path(nombre): Path<String>) -> Result<Json<serde_json::Value>, StatusCode> {
          if nombre.is_empty() || nombre.len() > 20 {
              return Err(StatusCode::BAD_REQUEST);
          }
          let mut g = n.lock().unwrap();
          *g += 1;
          Ok(Json(serde_json::json!({ "hola": nombre, "visitas": *g })))
      }

      fn app() -> Router {
          Router::new().route("/suma", get(suma)).route("/hola/{nombre}", get(visita)).with_state(Arc::new(Mutex::new(0)))
      }

      async fn pide(app: &Router, uri: &str) -> (u16, String) {
          let r = app.clone().oneshot(Request::get(uri).body(Body::empty()).unwrap()).await.unwrap();
          let estado = r.status().as_u16();
          let cuerpo = r.into_body().collect().await.unwrap().to_bytes();
          (estado, String::from_utf8(cuerpo.to_vec()).unwrap())
      }

      #[tokio::main]
      async fn main() {
          let app = app();
          for uri in ["/suma?a=2&b=40", "/suma?a=2", "/hola/ana", "/hola/ana", "/nada"] {
              let (e, c) = pide(&app, uri).await;
              println!("{e} {c}");
          }
      }
      ```

      Respuesta: los cinco códigos y el número de visitas separados por `;`.
    answers: ["sha256:0afe140811ae09e34ddbfef443bd01259e468c5603ea4d6d850315d9178b6c71"]
  - id: tuberia-de-datos
    tier: 3
    prompt: |
      ¿Qué imprime?

      ```rust
      // cargo: serde = { version = "1", features = ["derive"] }
      // cargo: serde_json = "1"
      // cargo: anyhow = "1"
      use anyhow::{bail, Context, Result};
      use serde::Deserialize;
      use std::collections::BTreeMap;

      #[derive(Deserialize)]
      struct Evento {
          usuario: String,
          ms: u64,
          #[serde(default)]
          error: bool,
      }

      fn procesa(lineas: &str) -> Result<(BTreeMap<String, (u64, u64)>, usize)> {
          let mut por_usuario: BTreeMap<String, (u64, u64)> = BTreeMap::new();
          let mut descartadas = 0;
          for (i, l) in lineas.lines().enumerate() {
              let ev: Evento = match serde_json::from_str(l) {
                  Ok(ev) => ev,
                  Err(_) => {
                      descartadas += 1;
                      continue;
                  }
              };
              if ev.ms > 60_000 {
                  bail!("línea {}: duración imposible", i + 1);
              }
              let e = por_usuario.entry(ev.usuario).or_default();
              e.0 += 1;
              e.1 += if ev.error { 0 } else { ev.ms };
          }
          Ok((por_usuario, descartadas))
      }

      fn main() -> Result<()> {
          let datos = [
              r#"{"usuario":"ana","ms":120}"#,
              r#"{"usuario":"luis","ms":80,"error":true}"#,
              r#"esto no es json"#,
              r#"{"usuario":"ana","ms":30}"#,
              r#"{"usuario":"eva"}"#,
              r#"{"usuario":"luis","ms":200}"#,
          ]
          .join("\n");
          let (m, d) = procesa(&datos).context("procesando eventos")?;
          let resumen: Vec<String> = m.iter().map(|(u, (n, t))| format!("{u}:{n}/{t}")).collect();
          println!("{} descartadas={d}", resumen.join(" "));
          let e = procesa("{\"usuario\":\"x\",\"ms\":99999}").context("procesando eventos").unwrap_err();
          println!("{e:#}");
          Ok(())
      }
      ```

      Respuesta: las dos líneas separadas por `;`.
    answers: ["sha256:653eef7f9aa9c3fc5eeb71bffc95960d2337ed201c9d7e43de832ac612f8444c"]
---

Saber Rust no es lo mismo que **trabajar** en Rust. En un equipo hay que decidir cómo se organiza un proyecto que crece, qué forma tiene una API para que nadie la use mal y
para poder evolucionarla sin romper a los usuarios, cómo se modelan los errores en una biblioteca frente a una aplicación, cómo se prueba (más allá de `assert_eq!`), cómo se mide y
se mejora el rendimiento, cómo se observa un servicio en producción y qué comprueba la integración continua antes de fusionar. Este nodo cierra la serie de Rust con esas prácticas,
las herramientas que las automatizan y los crates que forman el ecosistema estándar de facto (serde, tokio, axum, tracing, thiserror, anyhow, clap). Es lo que se espera de un perfil
intermedio que aspira a sénior: escribir código que otros puedan mantener, revisar el de otros con criterio, y razonar sobre compatibilidad, rendimiento y fallos.

## Objetivos

Al terminar sabrás:

1. Estructurar paquetes y workspaces, usar features aditivas, perfiles de compilación y la MSRV.
2. Diseñar APIs según las Rust API Guidelines y decidir qué cambios rompen la compatibilidad semántica.
3. Modelar errores con thiserror en bibliotecas y anyhow en aplicaciones, con contexto y cadenas de causas.
4. Probar a varios niveles: unitarias, de integración, de documentación, de propiedades, instantáneas, fuzzing y servicios sin red.
5. Medir y mejorar el rendimiento con criterion y perfiladores, y saber qué optimizaciones importan.
6. Instrumentar con tracing, serializar con serde y construir servicios con tokio y axum y herramientas de línea de órdenes con clap.
7. Montar la integración continua y la cadena de suministro: formato, lints, pruebas, auditoría de dependencias, compilación cruzada e imágenes de contenedor.

## Qué debes dominar antes

Los cuatro nodos anteriores de Rust, hasta [[prog-rust-unsafe-ffi-macros]], y [[sys-redes-sockets]] (TCP y HTTP) para la parte de servicios.

> [!question] Test de entrada
> 1. ¿Qué significa pasar de la versión 1.4.2 a la 2.0.0 en versionado semántico?
> 2. ¿Qué diferencia hay entre una prueba unitaria y una de integración?
> 3. ¿Por qué no debe una biblioteca hacer `panic!` ante una entrada mal formada?
>
> Respuestas: que hay cambios incompatibles en la API pública; la unitaria prueba una pieza aislada (en Rust, junto al código y con acceso a lo privado), la de integración usa la API pública
> como lo haría un usuario; porque quien decide qué hacer con un error es la aplicación que la usa, y un pánico le quita esa decisión.

## 1. Para qué sirve

Es la diferencia entre un prototipo y un sistema que funciona años: servicios backend y de infraestructura, herramientas internas, bibliotecas publicadas en crates.io, agentes y
componentes embebidos. En las entrevistas de nivel intermedio y sénior se evalúa exactamente esto: diseño de API, manejo de errores, concurrencia correcta, pruebas y criterio para
revisar código.

## 2. Proyectos, workspaces y compilación

- **Paquetes y crates**: un paquete puede tener una biblioteca (`src/lib.rs`) y varios binarios (`src/main.rs`, `src/bin/*.rs`). Lo habitual es poner la lógica en la biblioteca y dejar el binario
  como una capa fina: la biblioteca se prueba y se reutiliza.
- **Workspaces**: varios paquetes en un repositorio con un único `Cargo.lock` y una carpeta `target` compartida (`[workspace] members = [...]`), con dependencias y metadatos comunes en
  `[workspace.dependencies]` y `[workspace.package]`.
- **Features**: compilación condicional (`#[cfg(feature = "json")]`, `cfg!(...)`) y dependencias opcionales. Deben ser **aditivas**: cargo une las features que piden todos los dependientes,
  así que activar una nunca puede romper nada ni quitar API.
- **MSRV**: la versión mínima de Rust que soportas, declarada en `rust-version`; el resolvedor de dependencias de la edición 2024 (resolver 3, desde Rust 1.84) la tiene en cuenta al elegir
  versiones. Y `Cargo.lock` se versiona en el repositorio (también en bibliotecas, según la guía actual de cargo) para que la CI sea reproducible.
- **Perfiles**: `dev` (rápido de compilar) y `release` (optimizado). Ajustes típicos para binarios de producción: `lto = "thin"` o `"fat"`, `codegen-units = 1`, `panic = "abort"` (binario más
  pequeño, sin desenrollar), `strip = true`, y conservar símbolos de depuración aparte para los perfiladores.

## 3. Diseño de API y compatibilidad

Las **Rust API Guidelines** recogen las convenciones que hacen que una biblioteca se sienta "de Rust":

- Nombres: `as_` (conversión barata prestada), `to_` (cara), `into_` (consume); `iter`, `iter_mut`, `into_iter`; `new` y `with_...` como constructores; `is_`/`has_` para booleanos.
- Implementa los traits comunes (`Debug`, `Clone`, `PartialEq`, `Default`, `Display`, `From`, `Send`/`Sync` cuando proceda) y, en errores, `std::error::Error`.
- Acepta entradas generales y devuelve tipos concretos: `fn abrir(ruta: impl AsRef<Path>)`, `fn nuevo(nombre: impl Into<String>)`.
- Haz que los usos incorrectos no compilen: *newtypes* validados ("parse, don't validate"), tipos de estado, constructores que devuelven `Result`.
- Prepara la evolución: `#[non_exhaustive]` en enums y structs públicos que pueden crecer, traits sellados, campos privados con métodos de acceso.
- Documenta cada elemento público con un ejemplo que compile (`///` con bloques de código, que `cargo test` ejecuta) y una sección `# Errors` y `# Panics` cuando corresponda.

**Versionado semántico en Rust** (el capítulo *SemVer Compatibility* del libro de cargo detalla cada caso): requiere versión **mayor** quitar o renombrar algo público, cambiar firmas,
añadir una variante a un enum **exhaustivo**, añadir un método sin implementación por defecto a un trait público, endurecer cotas genéricas o subir la MSRV según la política del
proyecto; basta una versión **menor** para añadir funciones, tipos, variantes a un enum `#[non_exhaustive]` o métodos con implementación por defecto. En versiones `0.x`, cargo trata la
menor como si fuera la mayor (`"0.3"` acepta `0.3.*` pero no `0.4.0`). `cargo-semver-checks` lo comprueba automáticamente antes de publicar.

## 4. Errores en bibliotecas y en aplicaciones

- En una **biblioteca**, errores **precisos y que se puedan inspeccionar**: un enum con una variante por causa, que el llamador pueda distinguir con `match`. **thiserror** genera `Display`
  (`#[error("...")]`), `Error::source` (`#[source]`) y conversiones (`#[from]`, que permiten usar `?`). Los mensajes de `Display` van en minúscula y sin punto final, porque se
  encadenan.
- En una **aplicación**, lo que importa es **contexto** para quien lee el registro: **anyhow** ofrece `anyhow::Result<T>`, `.context("haciendo X")`/`.with_context(|| ...)` y `bail!`. `{}` muestra el
  último contexto, `{:#}` toda la cadena en una línea, y `{:?}` la cadena completa con "Caused by:" (y la traza si `RUST_BACKTRACE=1`).
- Nunca `unwrap` sobre datos externos; `expect("motivo")` solo para invariantes; un `panic` en un servicio debe tratarse como un fallo grave.

## 5. Pruebas

- **Unitarias** en `#[cfg(test)] mod tests`, **de integración** en `tests/` (solo ven la API pública), **de documentación** en los `///`. `cargo-nextest` las ejecuta en paralelo y aisladas.
- **Inyección por traits**: el código depende de `trait Repositorio`, y la prueba usa una implementación en memoria; así no hacen falta bibliotecas de *mocks* para la mayoría de los casos.
- **Basadas en propiedades** (proptest): en vez de ejemplos, propiedades que deben cumplirse para entradas generadas ("decodificar lo codificado devuelve lo original"); cuando fallan,
  **reducen** el contraejemplo al mínimo.
- **Instantáneas** (insta) para salidas grandes; **fuzzing** (cargo-fuzz, libFuzzer) para analizadores que reciben datos no confiables; **Miri** y **loom** para `unsafe` y concurrencia.
- **Servicios sin red**: un `Router` de axum es un `tower::Service`; se le envían peticiones con `oneshot` y se comprueba la respuesta sin abrir puertos.
- **Cobertura** con `cargo-llvm-cov`, como indicador y no como objetivo.

## 6. Rendimiento

Medir antes de optimizar: **criterion** hace *benchmarks* estadísticos (detecta regresiones con intervalos de confianza) y los perfiladores (`perf`, `samply`, *flamegraphs*) dicen dónde se va
el tiempo. Lo que más suele importar, por orden: el **algoritmo** y las estructuras de datos; las **asignaciones** (reservar con `with_capacity`, reutilizar buffers, evitar `clone` y
`String` intermedios, `Cow`); la **localidad** de memoria (vectores contiguos frente a punteros); la E/S con buffers (`BufReader`, `BufWriter`); y la compilación (`--release`, LTO,
`codegen-units = 1`, PGO). Los iteradores, los genéricos y el `#[inline]` del compilador ya dan rendimiento de C en la mayoría de bucles: no hace falta `unsafe` para ir rápido, y casi
nunca compensa.

## 7. Observabilidad, serialización y configuración

**tracing** es el estándar para registros estructurados: *eventos* (`info!(pedido = id, "procesado")`) y *spans* (`#[instrument]` sobre una función, que propaga contexto a todo lo que pasa dentro,
también a través de `.await`), con niveles y campos con nombre; un *subscriber* (`tracing-subscriber`) decide el formato (texto, JSON) y el filtro (`RUST_LOG=info,mi_crate=debug`), y se
exporta a OpenTelemetry para trazas distribuidas.

**serde** separa el modelo de datos de los formatos: `#[derive(Serialize, Deserialize)]` y atributos como `rename_all`, `default`, `skip_serializing_if`, `flatten` y las representaciones de enums
(externa por defecto, `tag` interna, adyacente, sin etiqueta) sirven igual para JSON, TOML, YAML, MessagePack o formatos binarios. La configuración de una aplicación se carga de archivos y
variables de entorno en un struct validado al arrancar (y los secretos, nunca en el repositorio).

## 8. Servicios y herramientas de línea de órdenes

Un servicio HTTP típico: **tokio** como entorno, **axum** para el enrutado (extractores tipados: `Path`, `Query`, `Json`, `State`; un error que no se puede extraer se convierte en un 400 o un 422
automáticamente), **tower** para el *middleware* (tiempos máximos, límites de concurrencia, trazas, CORS), **sqlx** para la base de datos (consultas comprobadas contra el esquema en tiempo de
compilación) y **reqwest** como cliente. Buenas prácticas: un tipo de error propio que implemente `IntoResponse`, estado compartido en `Arc`, apagado ordenado (`with_graceful_shutdown`), y
comprobaciones de salud para el orquestador.

Para herramientas de línea de órdenes, **clap** con `#[derive(Parser)]` genera el análisis, la ayuda y los errores de uso; el programa devuelve códigos de salida significativos, escribe los
datos por la salida estándar y los mensajes por la de error, y lee de la entrada estándar cuando no se le pasa un archivo, como cualquier herramienta de Unix (`prog-bash-scripting`).

## 9. Integración continua y cadena de suministro

Una CI mínima de un proyecto Rust serio: `cargo fmt --check`, `cargo clippy --all-targets -- -D warnings`, `cargo test` (o nextest) en la MSRV y en la estable, `cargo doc` sin avisos, y
para el código `unsafe`, Miri. Para las dependencias: **cargo-deny** (licencias permitidas, duplicados, fuentes) y **cargo-audit** (avisos de seguridad de la base de datos RustSec),
actualizaciones automáticas con revisión, y revisar qué entra al añadir un crate (mantenimiento, `unsafe`, dependencias que arrastra). Para distribuir: compilación cruzada (`cross`, objetivos
`musl` para binarios estáticos) e imágenes de contenedor en varias etapas (compilar en una imagen con el compilador y copiar solo el binario a una mínima), con `cargo-chef` para cachear las
dependencias.

> [!example] Ejemplo resuelto 1: el mismo fallo en una biblioteca y en una aplicación
> Un crate `facturas` que lee archivos define `enum ErrorFactura { Io(#[from] io::Error), Formato { linea: usize, motivo: String }, Total { esperado: i64, calculado: i64 } }` con thiserror: quien lo
> use puede reintentar en `Io`, mostrar la línea en `Formato` y alertar en `Total`. La aplicación que lo usa no necesita distinguir: `facturas::leer(&ruta).with_context(|| format!("procesando
> {}", ruta.display()))?` añade el contexto y anyhow lleva la cadena hasta el registro: "procesando 2026-11.csv: línea 14: importe no numérico".

> [!example] Ejemplo resuelto 2: un servicio que se prueba sin red
> Un servicio de notas con axum: `trait Almacen: Send + Sync` con una implementación en memoria (y otra con sqlx en producción), un estado `Arc<dyn Almacen>`, manejadores que devuelven
> `Result<Json<Nota>, ErrorApi>` con `impl IntoResponse for ErrorApi` (404 si no existe, 422 si el título está vacío) y pruebas que envían peticiones al `Router` con `oneshot`. El programa del §10
> es exactamente ese servicio, con una prueba de propiedades sobre la validación.

> [!example] Ejemplo resuelto 3: una herramienta de línea de órdenes completa (con menos ayuda)
> Escribe `contar`, que reciba archivos (o lea la entrada estándar), cuente líneas, palabras y bytes como `wc`, admita `--json` y termine con código 1 si algún archivo no se puede leer
> (mostrando el error con su contexto y siguiendo con los demás). Usa clap, anyhow y serde_json; pruébala con archivos temporales y compárala con `wc` sobre los mismos datos.

## 10. Comprobar con un programa

El servicio del ejemplo 2: compila sin avisos de `cargo clippy -- -D warnings` y sus pruebas (`cargo test`) envían peticiones al `Router` sin abrir puertos e incluyen una prueba de
propiedades con proptest.

```rust
// cargo: axum = "0.8"
// cargo: tokio = { version = "1", features = ["full"] }
// cargo: serde = { version = "1", features = ["derive"] }
// cargo: serde_json = "1"
// cargo: thiserror = "2"
// cargo: [dev-dependencies]
// cargo: tower = { version = "0.5", features = ["util"] }
// cargo: http-body-util = "0.1"
// cargo: proptest = "1"
use axum::{
    extract::{Path, State},
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::{get, post},
    Json, Router,
};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::{Arc, Mutex};

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct Nota {
    pub id: u64,
    pub titulo: String,
}

#[derive(Debug, Deserialize)]
pub struct NuevaNota {
    pub titulo: String,
}

#[derive(Debug, thiserror::Error, PartialEq)]
pub enum ErrorApi {
    #[error("nota {0} no encontrada")]
    NoEncontrada(u64),
    #[error("título inválido: {0}")]
    Invalida(&'static str),
}

impl IntoResponse for ErrorApi {
    fn into_response(self) -> Response {
        let estado = match self {
            ErrorApi::NoEncontrada(_) => StatusCode::NOT_FOUND,
            ErrorApi::Invalida(_) => StatusCode::UNPROCESSABLE_ENTITY,
        };
        (estado, Json(serde_json::json!({ "error": self.to_string() }))).into_response()
    }
}

/// Valida y normaliza un título: sin espacios en los extremos, de 1 a 80 caracteres.
pub fn valida_titulo(t: &str) -> Result<String, ErrorApi> {
    let t = t.trim();
    match t.chars().count() {
        0 => Err(ErrorApi::Invalida("vacío")),
        n if n > 80 => Err(ErrorApi::Invalida("demasiado largo")),
        _ => Ok(t.to_string()),
    }
}

pub trait Almacen: Send + Sync {
    fn crear(&self, titulo: String) -> Nota;
    fn obtener(&self, id: u64) -> Option<Nota>;
}

#[derive(Default)]
pub struct EnMemoria {
    datos: Mutex<(u64, HashMap<u64, Nota>)>,
}

impl Almacen for EnMemoria {
    fn crear(&self, titulo: String) -> Nota {
        let mut g = self.datos.lock().unwrap();
        g.0 += 1;
        let nota = Nota { id: g.0, titulo };
        g.1.insert(nota.id, nota.clone());
        nota
    }
    fn obtener(&self, id: u64) -> Option<Nota> {
        self.datos.lock().unwrap().1.get(&id).cloned()
    }
}

type Estado = Arc<dyn Almacen>;

async fn crear(State(a): State<Estado>, Json(n): Json<NuevaNota>) -> Result<(StatusCode, Json<Nota>), ErrorApi> {
    let titulo = valida_titulo(&n.titulo)?;
    Ok((StatusCode::CREATED, Json(a.crear(titulo))))
}

async fn obtener(State(a): State<Estado>, Path(id): Path<u64>) -> Result<Json<Nota>, ErrorApi> {
    a.obtener(id).map(Json).ok_or(ErrorApi::NoEncontrada(id))
}

pub fn app(almacen: Estado) -> Router {
    Router::new().route("/notas", post(crear)).route("/notas/{id}", get(obtener)).with_state(almacen)
}

#[tokio::main]
async fn main() {
    let _app = app(Arc::new(EnMemoria::default()));
    // En producción: let l = tokio::net::TcpListener::bind("0.0.0.0:8080").await?;
    //                axum::serve(l, app).with_graceful_shutdown(señal).await?;
    println!("rutas: POST /notas, GET /notas/{{id}}");
}

#[cfg(test)]
mod tests {
    use super::*;
    use axum::body::Body;
    use axum::http::Request;
    use http_body_util::BodyExt;
    use proptest::prelude::*;
    use tower::ServiceExt;

    async fn pide(app: &Router, metodo: &str, uri: &str, cuerpo: Option<&str>) -> (StatusCode, serde_json::Value) {
        let mut r = Request::builder().method(metodo).uri(uri);
        if cuerpo.is_some() {
            r = r.header("content-type", "application/json");
        }
        let resp = app.clone().oneshot(r.body(Body::from(cuerpo.unwrap_or("").to_string())).unwrap()).await.unwrap();
        let estado = resp.status();
        let bytes = resp.into_body().collect().await.unwrap().to_bytes();
        (estado, serde_json::from_slice(&bytes).unwrap_or(serde_json::Value::Null))
    }

    #[tokio::test]
    async fn crear_y_leer() {
        let app = app(Arc::new(EnMemoria::default()));
        let (e, v) = pide(&app, "POST", "/notas", Some(r#"{"titulo":"  comprar pan  "}"#)).await;
        assert_eq!((e, v["id"].as_u64(), v["titulo"].as_str()), (StatusCode::CREATED, Some(1), Some("comprar pan")));
        let (e, v) = pide(&app, "GET", "/notas/1", None).await;
        assert_eq!((e, v["titulo"].as_str()), (StatusCode::OK, Some("comprar pan")));
    }

    #[tokio::test]
    async fn errores_http() {
        let app = app(Arc::new(EnMemoria::default()));
        let (e, v) = pide(&app, "GET", "/notas/7", None).await;
        assert_eq!((e, v["error"].as_str()), (StatusCode::NOT_FOUND, Some("nota 7 no encontrada")));
        let (e, _) = pide(&app, "POST", "/notas", Some(r#"{"titulo":"   "}"#)).await;
        assert_eq!(e, StatusCode::UNPROCESSABLE_ENTITY);
        let (e, _) = pide(&app, "GET", "/notas/no-es-un-numero", None).await;
        assert_eq!(e, StatusCode::BAD_REQUEST);
    }

    proptest! {
        #[test]
        fn validar_es_idempotente(s in "\\PC{0,100}") {
            if let Ok(t) = valida_titulo(&s) {
                prop_assert_eq!(valida_titulo(&t), Ok(t.clone()));
                prop_assert!(!t.is_empty() && t.chars().count() <= 80 && t == t.trim());
            }
        }
    }
}
```

## 11. Errores típicos

- Una sola carpeta `src/main.rs` con todo dentro: imposible de probar y de reutilizar.
- Features que quitan API o que son incompatibles entre sí.
- Publicar una versión menor que rompe (añadir una variante a un enum público sin `#[non_exhaustive]`, cambiar una firma).
- anyhow en una biblioteca (los usuarios no pueden distinguir errores) o enums de error gigantes en una aplicación.
- Pruebas que dependen de la red, del reloj o del orden de ejecución; *mocks* elaborados donde bastaba un trait y una implementación en memoria.
- Optimizar sin medir; medir en modo depuración.
- `println!` como sistema de registro en un servicio; registrar secretos.
- Añadir dependencias sin revisar su mantenimiento, licencia y avisos de seguridad.

## 12. Resumen

- Biblioteca más binario fino; workspaces; features aditivas; `rust-version` y resolver 3; `Cargo.lock` versionado; perfiles con LTO, `codegen-units`, `panic = "abort"`.
- Rust API Guidelines (`as_`/`to_`/`into_`, traits comunes, `impl AsRef`/`impl Into`, tipos que impiden el mal uso, `#[non_exhaustive]`, ejemplos que compilan); semver de cargo y `cargo-semver-checks`.
- thiserror en bibliotecas, anyhow con contexto en aplicaciones; `{}`, `{:#}`, `{:?}`.
- Pruebas unitarias, de integración y de documentación; traits para inyectar; proptest, insta, cargo-fuzz, Miri, loom; servicios con `oneshot`; nextest y cobertura.
- criterion y perfiladores; algoritmos, asignaciones, localidad, E/S con buffer, opciones de compilación.
- tracing (eventos, spans, `#[instrument]`, filtros), serde (atributos y representaciones), configuración validada.
- tokio, axum (extractores, `IntoResponse`, `State`), tower, sqlx, reqwest; clap y convenciones de Unix.
- CI: fmt, clippy `-D warnings`, test en MSRV y estable, doc, Miri; cargo-deny, cargo-audit; compilación cruzada e imágenes en varias etapas.

## Repaso: lo que debe quedarte dentro de un mes

1. La lógica en una biblioteca; el binario solo la conecta.
2. Añadir una variante a un enum exhaustivo es un cambio mayor.
3. Bibliotecas: errores que se pueden inspeccionar; aplicaciones: errores con contexto.
4. Un servicio de axum se prueba enviándole peticiones sin abrir puertos.
5. La CI bloquea fusionar sin formato, sin lints limpios, sin pruebas y sin auditoría de dependencias.

## Siguiente

El proyecto `proy-sys-kv-rust` (un almacén clave-valor persistente y concurrente con protocolo de red, donde se aplica todo lo de la serie de Rust), y `sys-sistemas-distribuidos`.
