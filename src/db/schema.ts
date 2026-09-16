import { pgTable, serial, varchar, text, timestamp, jsonb } from "drizzle-orm/pg-core";

export const participants = pgTable("participants", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  whatsapp: varchar("whatsapp", { length: 30 }).notNull(),
  email: varchar("email", { length: 255 }),
  domicile: varchar("domicile", { length: 100 }).notNull(),
  participantType: varchar("participant_type", { length: 100 }).notNull(),
  salesExperience: varchar("sales_experience", { length: 100 }).notNull(),
  goals: jsonb("goals").$type<string[]>().notNull(),
  question: text("question"),
  registrationStatus: varchar("registration_status", { length: 30 }).default("pending").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type Participant = typeof participants.$inferSelect;
export type NewParticipant = typeof participants.$inferInsert;
