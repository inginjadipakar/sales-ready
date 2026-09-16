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
  title: "Sales Ready! — Ngobrol Bareng Praktisi (Pak Dito)",
  description:
    "Belajar memahami dunia sales langsung dari praktisi 25 tahun di Masjid Jami Sosrohadisewoyo, Ngawi (10.00–14.00 WIB). Sesi tatap muka eksklusif 8–20 peserta.",
  keywords: [
    "Sales Ready",
    "Belajar Sales Ngawi",
    "Workshop Sales Ngawi",
    "Pak Dito Sales",
    "Sales & Distribusi",
    "Masjid Jami Sosrohadisewoyo",
  ],
  authors: [{ name: "Sales Ready Community" }],
  openGraph: {
    title: "Sales Ready! — Ngobrol Bareng Praktisi (Pak Dito)",
    description:
      "Sesi tatap muka 10.00–14.00 WIB bersama praktisi 25 tahun di Masjid Jami Sosrohadisewoyo, Ngawi. Kuota terbatas 8–20 orang.",
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
