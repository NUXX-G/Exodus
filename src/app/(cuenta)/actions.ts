"use server";

import { redirect } from "next/navigation";
import { createOwner, hasOwner, login, logout } from "@/lib/auth";
import { MIN_PASSWORD_LENGTH } from "@/lib/password";

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

  if (!(await createOwner(username, password))) redirect("/entrar");
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
