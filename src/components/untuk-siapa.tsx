"use client";

import React from "react";

const AUDIENSI = [
  {
    index: "01",
    role: "Pelamar Kerja Sales",
    question: "Mau melamar kerja sales tapi ragu dan belum tahu gambarannya?",
    narrative:
      "Mempersiapkan diri dengan bekal mental tahan banting, memahami bahwa sales adalah profesi dengan masa depan cerah, serta mengetahui kesalahan umum pemula agar dapat dihindari.",
  },
  {
    index: "02",
    role: "Fresh Graduate & Mahasiswa",
    question: "Baru lulus dan ingin punya keterampilan praktis sebelum melamar?",
    narrative:
      "Mendalami dasar teori sales, marketing, dan distribusi, melatih first impression (bahasa tubuh, nada suara, attitude), dan memahami siklus penjualan nyata dari praktisi.",
  },
  {
    index: "03",
    role: "Karyawan Baru Sales & Distribusi",
    question: "Baru terjun di sales/distribusi tapi bingung cara kelola area dan target?",
    narrative:
      "Mempelajari product knowledge, siklus alur distribusi dari pabrik ke outlet, penguasaan wilayah (territory management), serta praktik menyusun Next Plan Action (NPA).",
  },
  {
    index: "04",
    role: "Calon Wirausaha & Pelaku UMKM",
    question: "Punya produk sendiri tapi bingung strategi memasarkan dan menjualnya?",
    narrative:
      "Menerapkan konsep marketing mix (4P), memetakan kebutuhan pelanggan (need identification), teknik negosiasi dan menghadapi penolakan tanpa harus membakar modal besar.",
  },
];

export function UntukSiapa() {
  return (
    <section id="tentang" className="py-20 sm:py-28 bg-[#0C0D0F] border-t border-white/[0.07] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/[0.07] pb-10">
          <div className="max-w-xl">
            <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-widest block mb-3">
              Target Peserta Sesi
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Apakah Program Ini Cocok untuk Anda?
            </h2>
          </div>
          <p className="text-gray-400 font-body text-sm max-w-sm leading-relaxed">
            Dirancang khusus untuk materi pemula: praktis, simple, mudah dimengerti, dilengkapi sesi praktik role-play dan konsultasi bebas.
          </p>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AUDIENSI.map((item) => (
            <div
              key={item.index}
              className="relative p-7 sm:p-8 rounded-xl bg-[#131519] border border-white/[0.07] hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Typographic Index & Tag */}
                <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-5">
                  <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider">
                    [{item.index}]
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                    {item.role}
                  </span>
                </div>

                {/* Headline Question */}
                <h3 className="font-display font-bold text-white text-base sm:text-lg leading-snug mb-3 group-hover:text-emerald-300 transition-colors">
                  &ldquo;{item.question}&rdquo;
                </h3>

                {/* Narrative */}
                <p className="text-gray-400 font-body text-xs sm:text-sm leading-relaxed">
                  {item.narrative}
                </p>
              </div>

              {/* Bottom Hairline Highlight */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>Metode: Ceramah + Role-play</span>
                <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Materi Pemula &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Tujuan Pembelajaran & Output Peserta dari Dokumen PDF */}
        <div className="mt-8 rounded-2xl bg-gradient-to-br from-emerald-950/25 via-[#131519] to-[#131519] border border-emerald-500/30 p-7 sm:p-9">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-6 lg:pb-0 lg:pr-8">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                [TUJUAN PEMBELAJARAN]
              </span>
              <h3 className="font-display font-bold text-white text-xl leading-snug mb-3">
                Membentuk Kepercayaan Diri &amp; Keterampilan Praktis
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-body leading-relaxed">
                Membekali peserta teori dan keterampilan praktis di bidang sales, distribusi, dan marketing — baik untuk memasuki dunia kerja maupun menjalankan usaha sendiri.
              </p>
            </div>

            <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-6 lg:pb-0 lg:pr-8">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                [OUTPUT PESERTA]
              </span>
              <h3 className="font-display font-bold text-white text-xl leading-snug mb-3">
                Kesiapan Nyata Terjun ke Lapangan Penjualan
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-body leading-relaxed">
                Memahami dasar teori sales &amp; distribusi, menguasai alur kerja harian, serta memiliki kesiapan mental dan kepercayaan diri untuk bekerja atau berwirausaha.
              </p>
            </div>

            <div className="lg:col-span-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                  [FORMAT &amp; METODE]
                </span>
                <h3 className="font-display font-bold text-white text-xl leading-snug mb-2">
                  Interaktif &amp; Bebas Tanya Jawab
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-body leading-relaxed">
                  Ceramah interaktif, studi kasus lapangan, simulasi pemetaan wilayah, dan role-play. Kuota 8–20 orang memastikan bimbingan berlangsung intensif.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-500/20 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span>Tatap Muka di Ngawi</span>
                <span>±5 Jam Acara (10.00–15.00)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
