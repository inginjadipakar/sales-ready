import { z } from "zod";

/**
 * Normalizes Indonesian WhatsApp number to standard format: 628xxxxxxxxxx
 * Handles:
 * - 0812-3456-7890 -> 6281234567890
 * - +62 812 3456 7890 -> 6281234567890
 * - 81234567890 -> 6281234567890
 * - 6281234567890 -> 6281234567890
 */
export function normalizeWhatsApp(phone: string): string {
  if (!phone) return "";
  // Strip all non-numeric characters except leading +
  let cleaned = phone.replace(/[^0-9+]/g, "");

  // Remove leading +
  if (cleaned.startsWith("+")) {
    cleaned = cleaned.substring(1);
  }

  // If user typed +62 08... -> cleaned becomes 6208...
  if (cleaned.startsWith("620")) {
    cleaned = "62" + cleaned.substring(3);
  } else if (cleaned.startsWith("0")) {
    // If starts with 0, replace with 62
    cleaned = "62" + cleaned.substring(1);
  } else if (cleaned.startsWith("8")) {
    // If starts with 8, prepend 62
    cleaned = "62" + cleaned;
  }

  return cleaned;
}

export const PARTICIPANT_TYPES = [
  "Mahasiswa",
  "Fresh Graduate",
  "Pencari Kerja",
  "Karyawan",
  "Wirausaha / UMKM",
  "Lainnya",
] as const;

export const SALES_EXPERIENCE_LEVELS = [
  "Belum pernah",
  "Pernah belajar",
  "Pernah praktik",
  "Sedang bekerja di bidang sales",
  "Memiliki usaha",
] as const;

export const AVAILABLE_GOALS = [
  "Memahami dasar & mindset dunia sales",
  "Mengenal produk, pelanggan & wilayah penjualan",
  "Siklus penjualan, komunikasi & teknik closing",
  "Praktik menyusun Next Plan Action (NPA)",
  "Persiapan masuk ke dunia kerja sales",
  "Mengembangkan penjualan usaha / UMKM",
] as const;

// Step 1 Schema: Data Diri
export const step1Schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nama lengkap minimal 2 karakter")
    .max(100, "Nama lengkap maksimal 100 karakter"),
  whatsapp: z
    .string()
    .trim()
    .min(9, "Nomor WhatsApp terlalu pendek")
    .max(25, "Nomor WhatsApp terlalu panjang")
    .refine((val) => {
      const normalized = normalizeWhatsApp(val);
      // Valid Indonesian mobile starts with 628 followed by 7-13 digits (10-16 digits total)
      return /^628[1-9][0-9]{6,12}$/.test(normalized);
    }, "Format nomor WhatsApp tidak valid (contoh: 08123456789)"),
  domicile: z
    .string()
    .trim()
    .min(2, "Domisili wajib diisi")
    .max(100, "Domisili maksimal 100 karakter"),
  email: z
    .string()
    .trim()
    .email("Format email tidak valid")
    .max(150, "Email maksimal 150 karakter")
    .optional()
    .or(z.literal("")),
});

// Step 2 Schema: Profil
export const step2Schema = z.object({
  participantType: z
    .string()
    .min(1, "Pilih status profil Anda saat ini"),
  salesExperience: z
    .string()
    .min(1, "Pilih pengalaman sales Anda saat ini"),
});

// Step 3 Schema: Tujuan & Pertanyaan
export const step3Schema = z.object({
  goals: z
    .array(z.string())
    .min(1, "Pilih minimal satu tujuan yang ingin Anda capai")
    .max(6, "Maksimal 6 tujuan"),
  question: z
    .string()
    .trim()
    .max(500, "Pertanyaan maksimal 500 karakter")
    .optional()
    .or(z.literal("")),
});

// Combined Server Action Schema with Honeypot
export const registrationSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Nama lengkap minimal 2 karakter").max(100, "Nama lengkap maksimal 100 karakter"),
  whatsapp: z
    .string()
    .trim()
    .min(9, "Nomor WhatsApp terlalu pendek")
    .max(25, "Nomor WhatsApp terlalu panjang")
    .refine((val) => {
      const normalized = normalizeWhatsApp(val);
      return /^628[1-9][0-9]{6,12}$/.test(normalized);
    }, "Format nomor WhatsApp tidak valid"),
  domicile: z.string().trim().min(2, "Domisili wajib diisi").max(100, "Domisili maksimal 100 karakter"),
  email: z.string().trim().email("Format email tidak valid").max(150).optional().or(z.literal("")),
  participantType: z.string().min(1, "Status profil wajib dipilih").max(100),
  salesExperience: z.string().min(1, "Pengalaman sales wajib dipilih").max(100),
  goals: z.array(z.string()).min(1, "Pilih minimal 1 tujuan").max(6, "Maksimal 6 tujuan"),
  question: z.string().trim().max(500, "Pertanyaan maksimal 500 karakter").optional().or(z.literal("")),
  hp_website: z.string().max(0, "Bot detected").optional().or(z.literal("")), // Honeypot
});

export type RegistrationFormData = {
  name: string;
  whatsapp: string;
  domicile: string;
  email?: string;
  participantType: string;
  salesExperience: string;
  goals: string[];
  question?: string;
  hp_website?: string;
};
