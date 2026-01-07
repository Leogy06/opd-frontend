import { z } from "zod";

export const patientSchema = z.object({
  first_name: z
    .string()
    .min(2, "First name must be atleast 2 characters.")
    .max(50, "Maximum of 50 characters"),
  last_name: z
    .string()
    .min(2, "Last name must be atleast 2 characters.")
    .max(50, "Maximum of atleast 50 characters"),
  middle_name: z.string().or(z.literal("")).optional(),
  suffix: z.string().or(z.literal("")).optional(),
  sex: z
    .enum(["Male", "Female"])
    .refine((val) => val !== undefined, { message: "Sex is required" })
    .optional(),
  dateOfBirth: z
    .date()
    .refine((date) => !!date, { message: "Date of birth is required" })
    .refine((date) => date <= new Date(), {
      message: "Date cannot be in the future",
    }),

  barangay: z.string().min(2, "Barangay must be atleast 2 characters."),
  city: z.string(),
  philHealthNumber: z
    .string()
    .trim()
    .regex(/^\d{12}$/, "PhilHealth number must be exactly 12 digits"),

  emergencyContact: z.string().min(5, "Must be atleast 5 characters").max(100),
  emergencyContactNumber: z
    .string()
    .length(11, "Contact # should definitely have 11 numbers"),
  allergies: z.string().optional(),
});

export type PatientFormValues = z.infer<typeof patientSchema>;
