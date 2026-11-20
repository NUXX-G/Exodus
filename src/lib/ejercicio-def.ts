import type { DefEjercicio } from "./tipos-ejercicio";
import type { VaultExercise } from "./vault";

/** Lo que el corrector necesita de un ejercicio del vault. Puro: lo usan servidor, tests y scripts. */
export function defDe(ex: VaultExercise): DefEjercicio {
  return { id: ex.id, type: ex.type, sig: ex.sig, unit: ex.unit, vars: ex.vars, domain: ex.domain, form: ex.form, options: ex.options, multiple: ex.multiple };
}
