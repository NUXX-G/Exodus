"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { changeOwnPassword, closeOtherSessions, createOwner, hasOwner, login, logout } from "@/lib/auth";
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

export async function setupAction(_prev: FormState | null, form: FormData): Promise<FormState> {
  const username = String(form.get("username") ?? "").trim().toLowerCase();
  const password = String(form.get("password") ?? "");
  const repeat = String(form.get("repeat") ?? "");

  if (hasOwner()) redirect("/entrar");
  if (!USERNAME.test(username)) {
    return { message: "El usuario debe tener de 3 a 32 caracteres: letras minúsculas, números, guion o guion bajo." };
  }
  if (password.length < MIN_PASSWORD_LENGTH || password.length > 256) {
    return { message: `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.` };
  }
  if (password !== repeat) return { message: "Las dos contraseñas no coinciden." };

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
