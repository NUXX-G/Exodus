/**
 * Libreta: notas en Markdown de cada usuario. Sin dependencias de Next (como sessions.ts) para probarlo con una base
 * de datos temporal. Toda operación lleva el usuario: nunca se lee ni se modifica una nota de otro.
 */
import "server-only";
import { and, desc, eq, sql } from "drizzle-orm";
import { getDb, schema } from "./db";
import type { Note } from "@db/schema";

const { notes } = schema;

export const MAX_TITLE = 200;
export const MAX_BODY = 100_000;
export const MAX_NOTES = 5_000;

export type NoteInput = { title: string; body: string; nodeId?: string | null };
export type NoteError = "titulo" | "largo" | "limite";

function validate(input: NoteInput): NoteError | null {
  if (!input.title.trim()) return "titulo";
  if (input.title.length > MAX_TITLE || input.body.length > MAX_BODY) return "largo";
  return null;
}

const cleanNode = (nodeId?: string | null) => (nodeId && /^[a-z0-9]+(-[a-z0-9]+)*$/.test(nodeId) ? nodeId : null);

export function createNote(userId: number, input: NoteInput, now = new Date()): Note | NoteError {
  const err = validate(input);
  if (err) return err;
  const db = getDb();
  const n = db.select({ n: sql<number>`count(*)` }).from(notes).where(eq(notes.userId, userId)).get()!.n;
  if (n >= MAX_NOTES) return "limite";
  return db
    .insert(notes)
    .values({ userId, title: input.title.trim(), body: input.body, nodeId: cleanNode(input.nodeId), createdAt: now, updatedAt: now })
    .returning()
    .get();
}

export function updateNote(userId: number, id: number, input: NoteInput, now = new Date()): Note | NoteError | null {
  const err = validate(input);
  if (err) return err;
  return (
    getDb()
      .update(notes)
      .set({ title: input.title.trim(), body: input.body, nodeId: cleanNode(input.nodeId), updatedAt: now })
      .where(and(eq(notes.id, id), eq(notes.userId, userId)))
      .returning()
      .get() ?? null
  );
}

export function deleteNote(userId: number, id: number): boolean {
  return getDb().delete(notes).where(and(eq(notes.id, id), eq(notes.userId, userId))).run().changes === 1;
}

export function getNote(userId: number, id: number): Note | null {
  return getDb().select().from(notes).where(and(eq(notes.id, id), eq(notes.userId, userId))).get() ?? null;
}

/** Notas del usuario, de la más reciente a la más antigua; opcionalmente solo las de un nodo. */
export function listNotes(userId: number, nodeId?: string): Note[] {
  const where = nodeId ? and(eq(notes.userId, userId), eq(notes.nodeId, nodeId)) : eq(notes.userId, userId);
  return getDb().select().from(notes).where(where).orderBy(desc(notes.updatedAt), desc(notes.id)).all();
}

/* ───────── Dibujos de la Libreta (fase 8B) ───────── */

export const MAX_DIBUJOS_POR_NOTA = 30;

export type Dibujo = typeof schema.noteDrawings.$inferSelect;

/** Dibujos de una nota del usuario (en orden de creación). */
export function listDrawings(userId: number, noteId: number): Dibujo[] {
  return getDb()
    .select()
    .from(schema.noteDrawings)
    .where(and(eq(schema.noteDrawings.userId, userId), eq(schema.noteDrawings.noteId, noteId)))
    .orderBy(schema.noteDrawings.id)
    .all();
}

/** Todos los dibujos del usuario (exportación a Obsidian). */
export function allDrawings(userId: number): Dibujo[] {
  return getDb().select().from(schema.noteDrawings).where(eq(schema.noteDrawings.userId, userId)).orderBy(schema.noteDrawings.id).all();
}

/**
 * Crea (id null) o actualiza un dibujo de una nota propia. Los trazos ya vienen validados (src/lib/dibujo.ts).
 * Devuelve el id, o null si la nota no es del usuario o se supera el límite.
 */
export function saveDrawing(userId: number, noteId: number, drawingId: number | null, strokesJson: string, now = new Date()): number | null {
  if (!getNote(userId, noteId)) return null;
  const db = getDb();
  if (drawingId === null) {
    if (listDrawings(userId, noteId).length >= MAX_DIBUJOS_POR_NOTA) return null;
    const id = db.insert(schema.noteDrawings).values({ userId, noteId, strokes: strokesJson, createdAt: now, updatedAt: now }).returning({ id: schema.noteDrawings.id }).get().id;
    db.update(notes).set({ updatedAt: now }).where(eq(notes.id, noteId)).run();
    return id;
  }
  const r = db
    .update(schema.noteDrawings)
    .set({ strokes: strokesJson, updatedAt: now })
    .where(and(eq(schema.noteDrawings.id, drawingId), eq(schema.noteDrawings.userId, userId), eq(schema.noteDrawings.noteId, noteId)))
    .run();
  if (r.changes !== 1) return null;
  db.update(notes).set({ updatedAt: now }).where(eq(notes.id, noteId)).run();
  return drawingId;
}

export function deleteDrawing(userId: number, drawingId: number): boolean {
  return getDb().delete(schema.noteDrawings).where(and(eq(schema.noteDrawings.id, drawingId), eq(schema.noteDrawings.userId, userId))).run().changes === 1;
}
