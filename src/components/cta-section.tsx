"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0C0D0F] border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl bg-[#131519] border border-white/[0.07] overflow-hidden p-10 sm:p-16 text-center">

          {/* Background radial glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-emerald-500/[0.07] rounded-full blur-3xl" />
          </div>

          {/* Top emerald line accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            {/* Status Pill Badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[11px] font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Pendaftaran Sesi Terbuka
              </span>
            </div>

            {/* Heading */}
            <div>
              <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-widest">
                Kuota Terbatas
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-3 tracking-tight leading-tight">
                Siap Belajar Langsung dari Praktisi Sales 25 Tahun?
              </h2>
            </div>

            <p className="text-gray-400 font-body text-sm sm:text-base leading-relaxed">
              Hanya <span className="text-white font-semibold">8–20 peserta</span> per sesi di{" "}
              <span className="text-emerald-400 font-medium">Masjid Jami Sosrohadisewoyo, Ngawi</span> (10.00 – 15.00 WIB). Sesi pembelajaran inti{" "}
              <span className="text-white font-semibold">180 menit</span> + konsultasi bebas. Materi pemula — praktis, simple, ada sesi praktek (NPA) &amp; role-play.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/daftar"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-mono font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                Daftar Sekarang — Gratis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-[11px] font-mono text-gray-500 mt-4 uppercase tracking-widest">
                Ruang Sales · Sales Ready! · Tatap Muka di Ngawi · 10.00–15.00 WIB
              </p>
            </div>
          </div>

          {/* Bottom emerald line accent */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
