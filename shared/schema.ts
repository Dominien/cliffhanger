import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const leadResponses = pgTable("lead_responses", {
  id: serial("id").primaryKey(),
  businessType: text("business_type").notNull(),
  projectTimeline: text("project_timeline").notNull(),
  projectGoals: text("project_goals").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  companyName: text("company_name"),
  website: text("website"),
  currentChatbot: boolean("current_chatbot"),
  privacyAccepted: boolean("privacy_accepted").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export const insertLeadResponseSchema = createInsertSchema(leadResponses)
  .extend({
    businessType: z.enum(["ecommerce", "service", "saas", "other"]),
    projectTimeline: z.enum(["immediate", "next_quarter", "planning"]),
    projectGoals: z.enum([
      "increase_sales",
      "improve_support",
      "automate_faq",
      "lead_generation",
      "other"
    ]),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(5, "Please enter a valid phone number"),
    website: z.string().url("Please enter a valid website URL").optional(),
    companyName: z.string().min(2, "Please enter a valid company name").optional(),
    currentChatbot: z.boolean().optional(),
    privacyAccepted: z.literal(true, {
      errorMap: () => ({ message: "Please accept the privacy policy" })
    })
  });

export const funnelResponses = pgTable("funnel_responses", {
  id: serial("id").primaryKey(),
  businessType: text("business_type").notNull(),
  selectedService: text("selected_service").notNull(),
  projectTimeline: text("project_timeline").notNull(),
  projectGoals: text("project_goals").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  companyName: text("company_name"),
  website: text("website"),
  message: text("message"),
  privacyAccepted: boolean("privacy_accepted").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export const insertFunnelResponseSchema = createInsertSchema(funnelResponses)
  .extend({
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
    website: z.string().url("Please enter a valid website URL").optional(),
    companyName: z.string().min(2, "Please enter a valid company name").optional(),
    message: z.string().optional(),
    privacyAccepted: z.literal(true, {
      errorMap: () => ({ message: "Please accept the privacy policy" })
    })
  });

export type InsertLeadResponse = z.infer<typeof insertLeadResponseSchema>;
export type LeadResponse = typeof leadResponses.$inferSelect;
export type InsertFunnelResponse = z.infer<typeof insertFunnelResponseSchema>;
export type FunnelResponse = typeof funnelResponses.$inferSelect;