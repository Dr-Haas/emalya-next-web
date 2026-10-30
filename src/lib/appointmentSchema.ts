import * as z from "zod";

/** Format français : 0X XX XX XX XX ou +33 X XX XX XX XX, une fois les espaces retirés. */
export const FRENCH_PHONE_REGEX = /^(\+33|0)[1-9]\d{8}$/;

/** Retire tous les espaces : "06 12 34 56 78" devient "0612345678". */
export const normalizePhone = (value: string): string => value.replace(/\s/g, "");

/**
 * Champs patient, partagés entre le formulaire (navigateur) et la route serveur,
 * pour que la validation soit strictement identique des deux côtés.
 */
export const patientSchema = z.object({
  firstName: z.string().trim().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères.",
  }),
  lastName: z.string().trim().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().trim().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  address: z.string().trim().min(5, {
    message: "L'adresse doit contenir au moins 5 caractères.",
  }),
  postalCode: z.string().trim().regex(/^\d{5}$/, {
    message: "Le code postal doit contenir 5 chiffres.",
  }),
  city: z.string().trim().min(2, {
    message: "La ville doit contenir au moins 2 caractères.",
  }),
  // Les espaces sont acceptés à la saisie (l'exemple affiché en contient),
  // la valeur est nettoyée avant d'être testée.
  phoneNumber: z.string().refine((value) => FRENCH_PHONE_REGEX.test(normalizePhone(value)), {
    message: "Veuillez entrer un numéro de téléphone français valide.",
  }),
});

export const formSchema = patientSchema.extend({
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter les conditions.",
  }),
});

export type PatientData = z.infer<typeof patientSchema>;
export type FormData = z.infer<typeof formSchema>;
