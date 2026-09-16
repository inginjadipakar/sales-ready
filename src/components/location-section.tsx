"use client";

import React, { useState } from "react";
import { MapPin, Clock, ExternalLink, Copy, Check, Navigation, Calendar } from "lucide-react";

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const fullAddress =
    "Masjid Jami Sosrohadisewoyo, Jl. Munginsidi No 51 RT 011 RW 002 Pelem II, Desa Pelem, Kab. Ngawi";

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Masjid Jami Sosrohadisewoyo Jl. Munginsidi No 51 RT 011 RW 002 Pelem II Desa Pelem, Ngawi"
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lokasi" className="py-20 sm:py-28 bg-[#0C0D0F] border-t border-white/[0.07] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-widest block">
            Jadwal &amp; Lokasi Acara
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Bertemu Langsung di Ngawi
          </h2>
          <p className="text-gray-400 font-body text-sm sm:text-base mt-3 leading-relaxed">
            Sesi tatap muka eksklusif dirancang intim dan interaktif di tempat yang tenang dan kondusif.
          </p>
        </div>

        {/* Location & Time Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Location Card (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 rounded-2xl bg-[#131519] border border-white/[0.07] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group">
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500/80 via-emerald-400/40 to-transparent" />

            <div className="space-y-6">
              <div className="border-b border-white/[0.05] pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider">
                    [LOKASI VENUE]
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                    KABUPATEN NGAWI
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  Masjid Jami Sosrohadisewoyo
                </h3>
              </div>

              {/* Address details */}
              <div className="space-y-2 p-4 rounded-xl bg-[#0C0D0F] border border-white/[0.05]">
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  Alamat Lengkap:
                </p>
                <p className="text-sm sm:text-base font-body text-gray-200 leading-relaxed">
                  Jl. Munginsidi No 51 RT 011 RW 002 Pelem II, Desa Pelem, Kab. Ngawi, Jawa Timur
                </p>
              </div>

              {/* Perks / Facility chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-lg border border-white/[0.05] bg-white/[0.02]">
                  <p className="text-xs font-display font-semibold text-white">Suasana Nyaman</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Kondusif untuk belajar &amp; diskusi</p>
                </div>
                <div className="p-3 rounded-lg border border-white/[0.05] bg-white/[0.02]">
                  <p className="text-xs font-display font-semibold text-white">Fasilitas Sholat</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Tersedia untuk waktu Dzuhur</p>
                </div>
                <div className="p-3 rounded-lg border border-white/[0.05] bg-white/[0.02]">
                  <p className="text-xs font-display font-semibold text-white">Akses &amp; Parkir</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Mudah dijangkau kendaraan</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 pt-6 border-t border-white/[0.07] flex flex-wrap items-center gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                <Navigation className="w-4 h-4" />
                Buka di Google Maps
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-gray-300 hover:text-white text-xs font-mono transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Time & Session Card */}
          <div className="rounded-2xl bg-[#131519] border border-white/[0.07] p-7 sm:p-9 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-6">
              <div className="border-b border-white/[0.05] pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider">
                    [WAKTU &amp; JADWAL]
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                    ZONA WIB
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  10.00 – 14.00 WIB
                </h3>
              </div>

              <div className="space-y-3 font-mono text-xs text-gray-400">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0C0D0F] border border-white/[0.05]">
                  <span className="text-gray-500">Durasi:</span>
                  <span className="text-white font-bold">4 Jam Efektif</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0C0D0F] border border-white/[0.05]">
                  <span className="text-gray-500">Sesi Istirahat:</span>
                  <span className="text-white font-bold">Sholat Dzuhur &amp; Coffee</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0C0D0F] border border-white/[0.05]">
                  <span className="text-gray-500">Kapasitas:</span>
                  <span className="text-emerald-400 font-bold">Maksimal 20 Orang</span>
                </div>
              </div>

              <p className="text-xs font-body text-gray-500 leading-relaxed">
                Disarankan hadir 15 menit lebih awal (pukul 09.45 WIB) untuk registrasi ulang dan persiapan.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.07]">
              <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>Tanggal sesi akan diinfokan Admin via WA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
