import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sales Ready! — Bekal Praktis Menjadi Tenaga Penjualan | Ruang Sales",
  description:
    "Program Sales Ready! oleh Ruang Sales — belajar langsung dari Pak Dito, praktisi 25 tahun di bidang Sales & Distribusi. Materi pemula: praktis, simple, dilengkapi sesi praktek Next Plan Action (NPA), role-play, dan konsultasi bebas. Tatap muka 10.00–15.00 WIB di Masjid Sosrohadisewoyo, Ngawi. Kuota 8–20 peserta.",
  keywords: [
    "Sales Ready",
    "Ruang Sales",
    "Belajar Sales Ngawi",
    "Workshop Sales Pemula",
    "Pak Dito Sales",
    "Sales & Distribusi",
    "Next Plan Action NPA",
    "Masjid Jami Sosrohadisewoyo",
    "Materi Pemula Sales",
  ],
  authors: [{ name: "Ruang Sales — Sales Ready Community" }],
  openGraph: {
    title: "Sales Ready! — Bekal Praktis Menjadi Tenaga Penjualan | Ruang Sales",
    description:
      "Bersama Pak Dito (25 Tahun Sales & Distribusi). Materi pemula: praktis, simple, ada sesi praktek NPA & role-play. Tatap muka 10.00–15.00 WIB di Masjid Sosrohadisewoyo, Ngawi. Kuota 8–20 orang.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${jakartaSans.variable} ${dmSans.variable} ${plexMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#0C0D0F] text-white selection:bg-emerald-500/30 selection:text-emerald-200 flex flex-col font-body">
        {children}
      </body>
    </html>
  );
}
