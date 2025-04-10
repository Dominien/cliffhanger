import { z } from "zod";

// Lead response schema without database integration
export const insertLeadResponseSchema = z.object({
  businessType: z.enum(["ecommerce", "service", "saas", "other"]),
  projectTimeline: z.enum(["immediate", "next_quarter", "planning"]),
  projectGoals: z.enum([
    "increase_sales",
    "improve_support",
    "automate_faq",
    "lead_generation",
    "other"
  ]),
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  website: z.string().regex(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+.*$/, "Bitte geben Sie eine gültige Website-Adresse ein (z.B. www.name.de)").optional().or(z.literal('')),
  companyName: z.string().min(2, "Please enter a valid company name").optional(),
  currentChatbot: z.boolean().optional(),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({ message: "Please accept the privacy policy" })
  })
});

// Funnel response schema without database integration
export const insertFunnelResponseSchema = z.object({
  businessType: z.enum(["service", "business"], {
    errorMap: () => ({ message: "Please select your business type" })
  }),
  selectedService: z.enum(["landing_page", "chatbot", "media", "complete"], {
    errorMap: () => ({ message: "Please select a service" })
  }),
  projectTimeline: z.enum(["immediate", "next_quarter", "planning"], {
    errorMap: () => ({ message: "Please select your project timeline" })
  }),
  projectGoals: z.enum([
    "increase_sales",
    "improve_support",
    "automate_faq",
    "lead_generation",
    "other"
  ], {
    errorMap: () => ({ message: "Please select your project goals" })
  }),
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  website: z.string().regex(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+.*$/, "Bitte geben Sie eine gültige Website-Adresse ein (z.B. www.name.de)").optional().or(z.literal('')),
  companyName: z.string().min(2, "Please enter a valid company name").optional(),
  message: z.string().optional(),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({ message: "Please accept the privacy policy" })
  })
});

// Contact form schema
export const insertContactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  website: z.string().regex(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+.*$/, "Bitte geben Sie eine gültige Website-Adresse ein (z.B. www.name.de)").optional().or(z.literal('')),
  goal: z.string().min(5, "Please describe your goal briefly")
});

export type InsertLeadResponse = z.infer<typeof insertLeadResponseSchema>;
export type InsertFunnelResponse = z.infer<typeof insertFunnelResponseSchema>;
export type InsertContactResponse = z.infer<typeof insertContactSchema>;