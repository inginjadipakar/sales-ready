"use server";

import { db, isDatabaseConfigured } from "@/db";
import { participants } from "@/db/schema";
import { normalizeWhatsApp, registrationSubmissionSchema, type RegistrationFormData } from "@/lib/validation";
import { eq, ne, and } from "drizzle-orm";

export type RegistrationResult = {
  success: boolean;
  error?: string;
  data?: {
    id: number | string;
    name: string;
    whatsapp: string;
  };
};

export async function registerParticipant(formData: RegistrationFormData): Promise<RegistrationResult> {
  try {
    // 1. Honeypot check (anti-bot protection)
    if (formData.hp_website && formData.hp_website.trim().length > 0) {
      // Silently accept bot submissions without storing
      return {
        success: true,
        data: {
          id: "bot-accepted",
          name: formData.name || "Bot",
          whatsapp: formData.whatsapp || "62800000000",
        },
      };
    }

    // 2. Validate form data with Zod
    const validationResult = registrationSubmissionSchema.safeParse(formData);
    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0]?.message || "Data pendaftaran tidak valid";
      return { success: false, error: firstError };
    }

    const data = validationResult.data;

    // 3. Normalize WhatsApp number
    const normalizedWhatsApp = normalizeWhatsApp(data.whatsapp);
    if (!/^628[1-9][0-9]{6,12}$/.test(normalizedWhatsApp)) {
      return {
        success: false,
        error: "Nomor WhatsApp harus berformat nomor Indonesia yang valid (contoh: 08123456789)",
      };
    }

    // 4. Check database configuration & execute insert
    if (isDatabaseConfigured() && db) {
      try {
        // Check for duplicate active registration with the same normalized WhatsApp
        const existing = await db
          .select({ id: participants.id, status: participants.registrationStatus })
          .from(participants)
          .where(
            and(
              eq(participants.whatsapp, normalizedWhatsApp),
              ne(participants.registrationStatus, "cancelled")
            )
          )
          .limit(1);

        if (existing.length > 0) {
          return {
            success: false,
            error: "Nomor WhatsApp ini sudah terdaftar sebelumnya. Tim kami sedang memverifikasi data Anda via WhatsApp.",
          };
        }

        // Insert new participant
        const [inserted] = await db
          .insert(participants)
          .values({
            name: data.name,
            whatsapp: normalizedWhatsApp,
            email: data.email || null,
            domicile: data.domicile,
            participantType: data.participantType,
            salesExperience: data.salesExperience,
            goals: data.goals,
            question: data.question || null,
            registrationStatus: "pending",
          })
          .returning({ id: participants.id });

        return {
          success: true,
          data: {
            id: inserted?.id ?? "success",
            name: data.name,
            whatsapp: normalizedWhatsApp,
          },
        };
      } catch (dbError: unknown) {
        console.error("Database error during participant registration:", dbError);
        return {
          success: false,
          error: "Terjadi kendala pada koneksi database. Silakan coba kembali atau hubungi admin via WhatsApp.",
        };
      }
    } else {
      // Fallback mode when live Neon DATABASE_URL is not yet configured
      console.warn("Neon DATABASE_URL is not configured. Running registration in demo/preview mode.");
      return {
        success: true,
        data: {
          id: `preview-${Date.now()}`,
          name: data.name,
          whatsapp: normalizedWhatsApp,
        },
      };
    }
  } catch (error: unknown) {
    console.error("Unexpected error in registerParticipant server action:", error);
    return {
      success: false,
      error: "Terjadi kesalahan internal. Silakan periksa kembali data Anda dan coba lagi.",
    };
  }
}
