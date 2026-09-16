"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { participants } from "@/db/schema";
import { desc } from "drizzle-orm";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "salesready2026";
const SESSION_COOKIE = "admin_session";

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password") as string;

  if (password !== ADMIN_PASSWORD) {
    redirect("/admin/login?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  redirect("/admin");
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  redirect("/admin/login");
}

export async function checkAdminSession() {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value === "authenticated";
}

export async function getParticipants() {
  try {
    if (!db) return [];
    const data = await db
      .select()
      .from(participants)
      .orderBy(desc(participants.createdAt));
    return data;
  } catch {
    return [];
  }
}
