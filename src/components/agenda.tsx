"use client";

import React from "react";

const MATERI = [
  {
    num: "01",
    tag: "FONDASI MENTAL",
    title: "Mindset Sales Profesional & Mitigasi Penolakan",
    desc: "Memahami apa yang membedakan sales medioker dengan sales yang konsisten mencetak angka. Membangun resiliensi menghadapi penolakan dan stigma profesi sales di lapangan.",
  },
  {
    num: "02",
    tag: "MANAJEMEN PIPELINE",
    title: "Membangun & Menjaga Alur Prospek yang Sehat",
    desc: "Metode menyaring calon pembeli potensial, menghitung konversi realistis, dan memastikan target bulanan bisa diprediksi tanpa kepanikan di akhir periode.",
  },
  {
    num: "03",
    tag: "RELASI & KEPERCAYAAN",
    title: "Prinsip Negosiasi & Hubungan Pelanggan Jangka Panjang",
    desc: "Teknik membedakan antara menjual produk sekali putus dengan membangun relasi komersial berkelanjutan yang menghasilkan repeat order konsisten.",
  },
  {
    num: "04",
    tag: "TERITORI & DISTRIBUSI",
    title: "Pemetaan Area, Rute Kunjungan & Penetrasi Pasar",
    desc: "Cara memetakan wilayah penjualan, menghitung efisiensi rute harian, dan strategi menembus titik-titik distribusi baru di tingkat retail maupun grosir.",
  },
  {
    num: "05",
    tag: "OBJEKSI & DEAL-CLOSING",
    title: "Mengurai Keberatan Harga dan Manuver Kompetitor",
    desc: "Taktik taktis merespons alasan 'harga kemahalan', 'sudah punya langganan lain', atau 'nanti saya kabari lagi' tanpa terkesan memaksa calon pembeli.",
  },
  {
    num: "06",
    tag: "SESI KLINIK BISNIS",
    title: "Bedah Kasus Nyata & Tanya Jawab Bebas",
    desc: "Peserta membawa langsung masalah penjualan, kendala tim, atau skenario negosiasi yang sedang dihadapi untuk dibedah solusinya bersama Pak Dito.",
  },
];

export function Agenda() {
  return (
    <section id="agenda" className="py-20 sm:py-28 bg-[#0C0D0F] border-t border-white/[0.07] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/[0.07] pb-10">
          <div>
            <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-widest block mb-3">
              Kurikulum Workshop
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Pokok Bahasan Sesi
            </h2>
          </div>
          <p className="text-gray-400 font-body text-sm max-w-md leading-relaxed">
            Disusun dari 25 tahun pengalaman nyata di lapangan distribusi dan sales nasional —
            berorientasi solusi praktis, bukan teori akademis.
          </p>
        </div>

        {/* 2-Column Numbered Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MATERI.map((item) => (
            <div
              key={item.num}
              className="p-8 rounded-xl bg-[#131519] border border-white/[0.07] hover:border-emerald-500/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Header row: Number + Tag */}
                <div className="flex items-baseline justify-between border-b border-white/[0.05] pb-4 mb-5">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-white text-lg leading-snug mb-3 group-hover:text-emerald-200 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 font-body text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>Format: Paparan &amp; Diskusi Terbuka</span>
                <span className="text-gray-400 font-semibold">Bagian {item.num}/06</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
