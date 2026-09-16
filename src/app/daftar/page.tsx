import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { RegistrationForm } from "@/components/registration-form";

export const metadata = {
  title: "Pendaftaran — Sales Ready! Ngobrol Bareng Praktisi",
  description: "Formulir pendaftaran workshop interaktif bersama praktisi sales 25 tahun, Pak Dito di Ngawi.",
};

export default function DaftarPage() {
  return (
    <div className="min-h-screen bg-[#0C0D0F] text-white selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Header Bar */}
      <header className="border-b border-white/[0.07] bg-[#0C0D0F]/95 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <div className="font-display font-bold text-base tracking-tight text-white">
            Sales Ready!
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Intro Section */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
          <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-widest block">
            Formulir Pendaftaran Sesi Tatap Muka
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Konfirmasi Data Calon Peserta
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed font-body">
            Lengkapi formulir singkat berikut untuk mendaftarkan diri ke sesi diskusi
            tatap muka bersama <strong className="text-white">Pak Dito</strong> di Ngawi.
          </p>

          {/* Editorial Specs Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-mono">
            <span className="bg-[#131519] text-gray-300 px-3 py-1.5 rounded-lg border border-white/[0.07]">
              <span className="text-emerald-400 font-semibold mr-1.5">WAKTU:</span>
              10.00 – 14.00 WIB
            </span>
            <span className="bg-[#131519] text-gray-300 px-3 py-1.5 rounded-lg border border-white/[0.07]">
              <span className="text-emerald-400 font-semibold mr-1.5">VENUE:</span>
              Masjid Jami Sosrohadisewoyo, Ngawi
            </span>
            <span className="bg-[#131519] text-gray-300 px-3 py-1.5 rounded-lg border border-white/[0.07]">
              <span className="text-emerald-400 font-semibold mr-1.5">KUOTA:</span>
              8–20 Peserta
            </span>
          </div>
        </div>

        {/* Registration Form */}
        <RegistrationForm />
      </main>
    </div>
  );
}
