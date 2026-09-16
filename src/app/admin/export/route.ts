import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/db";
import { participants } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  if (session !== "authenticated") {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    if (!db) return new NextResponse("Database tidak terkonfigurasi.", { status: 503 });
    const data = await db
      .select()
      .from(participants)
      .orderBy(desc(participants.createdAt));

    const headers = [
      "No",
      "Nama",
      "WhatsApp",
      "Email",
      "Domisili",
      "Status",
      "Pengalaman Sales",
      "Tujuan",
      "Pertanyaan",
      "Status Pendaftaran",
      "Waktu Daftar",
    ];

    const rows = data.map((p, i) => [
      i + 1,
      p.name,
      p.whatsapp,
      p.email || "",
      p.domicile,
      p.participantType,
      p.salesExperience,
      Array.isArray(p.goals) ? p.goals.join("; ") : "",
      (p.question || "").replace(/\n/g, " "),
      p.registrationStatus,
      new Date(p.createdAt).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }),
    ]);

    const escape = (val: unknown) => {
      const s = String(val);
      if (s.includes(",") || s.includes('"') || s.includes("\n")) {
        return `"${s.replace(/"/g, '""')}"`;
      }
      return s;
    };

    const csv = [headers, ...rows]
      .map((row) => row.map(escape).join(","))
      .join("\r\n");

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="peserta-sales-ready-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch {
    return new NextResponse("Gagal mengambil data.", { status: 500 });
  }
}
