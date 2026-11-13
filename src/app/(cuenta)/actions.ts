"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  changeOwnPassword,
  closeOtherSessions,
  createOwner,
  createOwnInvitation,
  hasOwner,
  login,
  logout,
  registerWithInvitation,
  revokeOwnInvitation,
} from "@/lib/auth";
import { MAX_PENDING } from "@/lib/invitations";
import { MIN_PASSWORD_LENGTH } from "@/lib/password";

export interface AccountState {
  message: string;
  ok: boolean;
}

export async function changePasswordAction(_prev: AccountState | null, form: FormData): Promise<AccountState> {
  const current = String(form.get("current") ?? "");
  const next = String(form.get("next") ?? "");
  const repeat = String(form.get("repeat") ?? "");
  if (next !== repeat) return { ok: false, message: "Las dos contraseñas nuevas no coinciden." };

  const result = await changeOwnPassword(current, next);
  revalidatePath("/cuenta");
  switch (result) {
    case "ok":
      return { ok: true, message: "Contraseña cambiada. Las demás sesiones se han cerrado." };
    case "actual":
      return { ok: false, message: "La contraseña actual no es correcta." };
    case "corta":
      return { ok: false, message: `La contraseña nueva debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.` };
    case "larga":
      return { ok: false, message: "La contraseña nueva es demasiado larga (máximo 256 caracteres)." };
    case "igual":
      return { ok: false, message: "La contraseña nueva es igual a la actual." };
    case "espera":
      return { ok: false, message: "Demasiados intentos fallidos. Espera 10 minutos." };
  }
}

export async function closeSessionsAction(_prev: AccountState | null): Promise<AccountState> {
  const n = await closeOtherSessions();
  revalidatePath("/cuenta");
  return { ok: true, message: n === 1 ? "Se ha cerrado 1 sesión." : `Se han cerrado ${n} sesiones.` };
}

export interface FormState {
  message: string;
}

const USERNAME = /^[a-z0-9_-]{3,32}$/;

/** Usuario y contraseña de una cuenta nueva (en /configurar y en /registro), o el mensaje de error. */
function newAccountFields(form: FormData): { username: string; password: string } | FormState {
  const username = String(form.get("username") ?? "").trim().toLowerCase();
  const password = String(form.get("password") ?? "");
  const repeat = String(form.get("repeat") ?? "");
  if (!USERNAME.test(username)) {
    return { message: "El usuario debe tener de 3 a 32 caracteres: letras minúsculas, números, guion o guion bajo." };
  }
  if (password.length < MIN_PASSWORD_LENGTH || password.length > 256) {
    return { message: `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.` };
  }
  if (password !== repeat) return { message: "Las dos contraseñas no coinciden." };
  return { username, password };
}

export async function setupAction(_prev: FormState | null, form: FormData): Promise<FormState> {
  if (hasOwner()) redirect("/entrar");
  const fields = newAccountFields(form);
  if ("message" in fields) return fields;
  const { username, password } = fields;

  const result = await createOwner(username, password, String(form.get("code") ?? ""));
  if (result === "espera") return { message: "Demasiados intentos fallidos. Espera 10 minutos." };
  if (result === "codigo") {
    return { message: "Código de configuración incorrecto. Cópialo del registro del servidor tal como aparece." };
  }
  if (result === "existe") redirect("/entrar");
  redirect("/");
}

export async function loginAction(_prev: FormState | null, form: FormData): Promise<FormState> {
  const username = String(form.get("username") ?? "").trim().toLowerCase();
  const password = String(form.get("password") ?? "");
  if (!username || !password) return { message: "Escribe usuario y contraseña." };
  if (password.length > 256) return { message: "Usuario o contraseña incorrectos." };

  const result = await login(username, password);
  if (result === "espera") return { message: "Demasiados intentos fallidos. Espera 10 minutos." };
  if (result === "credenciales") return { message: "Usuario o contraseña incorrectos." };
  redirect("/");
}

export async function logoutAction(): Promise<void> {
  await logout();
  redirect("/entrar");
}

export async function registerAction(_prev: FormState | null, form: FormData): Promise<FormState> {
  if (!hasOwner()) redirect("/configurar");
  const fields = newAccountFields(form);
  if ("message" in fields) return fields;

  const result = await registerWithInvitation(String(form.get("code") ?? ""), fields.username, fields.password);
  if (result === "espera") return { message: "Demasiados intentos fallidos. Espera 10 minutos." };
  if (result === "codigo") {
    return { message: "El código de invitación no es válido: puede estar mal copiado, caducado, anulado o ya usado." };
  }
  if (result === "usuario") return { message: "Ese nombre de usuario ya existe. Elige otro." };
  redirect("/");
}

export interface InviteState extends AccountState {
  code?: string;
  link?: string;
}

export async function inviteAction(_prev: InviteState | null, form: FormData): Promise<InviteState> {
  const result = await createOwnInvitation(Number(form.get("days")), String(form.get("note") ?? ""));
  revalidatePath("/cuenta");
  if (result === "limite") {
    return { ok: false, message: `Ya tienes ${MAX_PENDING} invitaciones pendientes. Anula alguna o espera a que caduquen.` };
  }
  if (result === "dias") return { ok: false, message: "Elige una caducidad de la lista." };
  if (result === "permiso") return { ok: false, message: "Solo la cuenta principal puede invitar." };

  const link = `${await publicOrigin()}/registro?codigo=${result.code}`;
  const when = result.expiresAt.toLocaleString("es-ES", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" });
  return {
    ok: true,
    message: `Invitación creada. Sirve para una sola cuenta y caduca el ${when}. Cópiala ahora: no se volverá a mostrar.`,
    code: result.code,
    link,
  };
}

export async function revokeInviteAction(form: FormData): Promise<void> {
  await revokeOwnInvitation(String(form.get("id") ?? ""));
  revalidatePath("/cuenta");
}

/**
 * Dirección por la que el admin ve la web, para que el enlace de invitación funcione igual desde fuera:
 * la cabecera Origin del navegador (exacta también tras Caddy, Tailscale o un túnel); si faltara, Host.
 */
async function publicOrigin(): Promise<string> {
  const h = await headers();
  const origin = h.get("origin");
  if (origin && /^https?:\/\/[^/\s]+$/.test(origin)) return origin;
  const proto = h.get("x-forwarded-proto") === "https" ? "https" : "http";
  return `${proto}://${h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000"}`;
}
