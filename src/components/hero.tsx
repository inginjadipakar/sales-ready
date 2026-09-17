"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const TYPEWRITER_WORDS = [
  "Praktisi Sales 25 Tahun",
  "Ahli Distribusi Lapangan",
  "Mentor Strategi Penjualan",
  "Konsultan Bisnis Nasional",
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = TYPEWRITER_WORDS[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 65);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % TYPEWRITER_WORDS.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="relative w-full bg-[#0C0D0F] overflow-hidden flex flex-col justify-between">
      {/* Container Banner Utama (Rasio Asli 2048 x 768, Gambar Utuh 100% Tidak Dipotong) */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/8] lg:aspect-[2048/768] min-h-[460px] lg:min-h-[500px]">
        {/* Gambar Utuh Asli tanpa crop / tidak dipotong */}
        <Image
          src="/images/hero.webp"
          alt="Pak Dito - Sales Ready Workshop"
          fill
          priority
          className="object-cover lg:object-contain object-right"
        />

        {/* Gradient shadow hitam transparan di kiri agar teks kontras dan terbaca jelas, kanan tetap terang */}
        <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-r from-[#0C0D0F] via-[#0C0D0F]/90 via-35% to-transparent to-75%" />

        {/* Area Teks di Sebelah Kiri — Bersih Tanpa Frame */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-lg lg:max-w-xl py-4 sm:py-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0C0D0F] border border-emerald-500/40 mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-widest">
                  Ruang Sales · Belajar dari Praktisi · Ngawi
                </span>
              </div>

              {/* Tagline / Subtitle dari PDF */}
              <p className="text-emerald-400 font-mono text-xs sm:text-sm font-semibold tracking-wide mb-1">
                SALES READY ! — Bekal Praktis Menjadi Tenaga Penjualan
              </p>

              {/* Main Headline */}
              <h1 className="font-display font-extrabold leading-[1.08] tracking-tight mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl lg:text-4xl text-white block">
                  Belajar Langsung dari
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-emerald-400 block mt-1">
                  {displayed}
                  <span className="cursor-blink inline-block w-[3px] h-[0.85em] bg-emerald-400 ml-1 align-middle" />
                </span>
              </h1>

              {/* Sub-description */}
              <p className="text-gray-300 font-body text-xs sm:text-sm leading-relaxed max-w-md mb-4">
                Disusun berdasarkan 25 tahun pengalaman praktisi sales &amp; distribusi nasional bersama <strong className="text-white font-semibold">Pak Dito</strong>. Materi pemula yang dirancang praktis, simple, mudah dimengerti, dilengkapi sesi praktik (Next Plan Action), role-play, dan konsultasi bebas.
              </p>

              {/* PDF Highlight Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                {["Materi Pemula", "Praktis & Simple", "Sesi Praktek", "Konsultasi Bebas"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono bg-white/[0.05] border border-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/daftar"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-mono font-bold text-xs tracking-wider uppercase transition-colors"
                >
                  Daftar Sekarang
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="#agenda"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0C0D0F] border border-white/20 hover:border-white/50 text-gray-200 hover:text-white font-body text-xs font-semibold transition-colors"
                >
                  Lihat Kurikulum
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info bar di bawah hero: 4 kolom ringkas & informatif */}
      <div className="relative z-20 border-t border-white/[0.08] bg-[#0C0D0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {[
              {
                index: "01",
                label: "Waktu Sesi",
                value: "10.00 – 15.00 WIB",
                desc: "180 Mnt Inti + Konsultasi",
              },
              {
                index: "02",
                label: "Lokasi Acara",
                value: "Masjid Sosrohadisewoyo",
                desc: "Desa Pelem, Kab. Ngawi",
              },
              {
                index: "03",
                label: "Kapasitas",
                value: "8–20 Peserta",
                desc: "Efektif Praktik & Role-Play",
              },
              {
                index: "04",
                label: "Format Sesi",
                value: "Tatap Muka Langsung",
                desc: "Ceramah, Kasus & Role-Play",
              },
            ].map(({ index, label, value, desc }) => (
              <div key={label} className="flex items-start gap-2.5 py-3.5 px-3 sm:px-5">
                <span className="font-mono text-[10px] font-bold text-emerald-400/90 shrink-0 mt-0.5 tracking-wider">
                  [{index}]
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">{label}</p>
                  <p className="text-xs sm:text-sm font-display font-bold text-white mt-0.5 truncate">{value}</p>
                  <p className="text-[11px] font-body text-gray-400 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
