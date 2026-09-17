"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Speaker() {
  return (
    <section id="praktisi" className="py-20 sm:py-28 bg-[#0C0D0F] border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-center">

          {/* LEFT: Portrait card */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-72 lg:w-full max-w-[340px]">
              {/* Emerald corner accent */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-emerald-500/50 rounded-tl-lg z-10" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-emerald-500/50 rounded-br-lg z-10" />

              {/* Photo */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#131519] border border-white/[0.07]">
                <Image
                  src="/images/pak-dito.webp"
                  alt="Pak Dito — Praktisi Sales & Distribusi"
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 288px, 340px"
                />
                {/* Overlay gradient bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0F]/80 via-transparent to-transparent pointer-events-none" />

                {/* Experience badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-[#131519]/90 backdrop-blur-sm border border-white/[0.1] rounded-lg px-4 py-3">
                    <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-0.5">
                      Rekam Jejak
                    </p>
                    <p className="text-white font-display font-bold text-base">
                      25+ Tahun di Sales &amp; Distribusi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Bio content */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <div>
              <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-widest">
                Profil Praktisi
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight tracking-tight">
              Saya Pak Dito, Praktisi Sales &amp;{" "}
              <span className="text-emerald-400">Distribusi Lapangan</span>
            </h2>

            {/* Bio paragraph */}
            <p className="text-gray-400 font-body text-sm sm:text-base leading-relaxed max-w-lg">
              Selama 25 tahun bekerja di lapangan — dari sales ritel, B2B, B2C, hingga distribusi nasional. Pengalaman nyata membangun tim, mengelola territory, melatih mental tahan banting, dan menghadapi tekanan target. Materi Sales Ready! disusun berdasarkan realitas lapangan, bukan teori akademis.
            </p>

            {/* Editorial Spec Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { label: "Pengalaman", value: "25+ Tahun", detail: "Praktisi Lapangan Langsung" },
                { label: "Spesialisasi", value: "Sales & Distribusi", detail: "B2B, B2C, Ritel, Kanvasser" },
                { label: "Format", value: "Materi Pemula", detail: "Praktis, Simple, Role-Play" },
                { label: "Keunggulan", value: "Konsultasi Bebas", detail: "Praktek NPA Langsung" },
              ].map(({ label, value, detail }) => (
                <div key={label} className="p-3.5 rounded-lg bg-[#131519] border border-white/[0.06]">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-medium">
                    {label}
                  </p>
                  <p className="text-white font-display font-bold text-sm sm:text-base mt-1">
                    {value}
                  </p>
                  <p className="text-[11px] font-body text-gray-500 mt-0.5">
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-emerald-500 pl-4 py-1">
              <p className="text-gray-300 font-body italic text-sm leading-relaxed">
                &ldquo;Pengalaman lapangan sering kali memberikan pelajaran yang tidak ditemukan hanya dari teori. Sesi ini dibuat untuk membuka ruang ngobrol langsung mengenai realitas dunia sales.&rdquo;
              </p>
            </blockquote>

            {/* CTA */}
            <Link
              href="/daftar"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-mono font-semibold text-sm tracking-wider uppercase transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 mt-2"
            >
              Ikuti Sesi Bersama Pak Dito
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
