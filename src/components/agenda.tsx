"use client";

import React from "react";

const MATERI = [
  {
    num: "01",
    tag: "DIRI & DUNIA SALES",
    durasi: "30 Menit",
    time: "10.20–10.50",
    title: "Mengenal Diri & Memahami Gambaran Dunia Kerja Sales",
    points: [
      "Apa itu sales — profesi dengan masa depan cerah",
      "Perbedaan dan hubungan antara sales, marketing, dan distribusi",
      "Mindset, ketahanan mental tahan banting & kekuatan keinginan",
      "Jenis-jenis sales: ritel, B2B, B2C, distribusi/kanvasser, dan lainnya",
      "Kesalahan umum pemula sales dan cara menghindarinya",
    ],
    metode: "Ceramah interaktif + diskusi pengalaman peserta",
  },
  {
    num: "02",
    tag: "PRODUK, PELANGGAN & WILAYAH",
    durasi: "60 Menit",
    time: "11.00–12.00",
    title: "Memetakan Produk, Pelanggan & Penguasaan Wilayah Penjualan",
    points: [
      "Product knowledge: karakteristik produk, masa simpan (shelf life)",
      "Product life cycle & pengaruhnya terhadap strategi penjualan",
      "Marketing mix 4P: product, price, place, promotion",
      "Konsep distribusi: pabrik → distributor → toko/outlet & rotasi stok",
      "Territory management (sekilas penguasaan wilayah)",
      "Siklus penjualan: prospecting → closing → after sales → piutang",
      "First impression: penampilan, bahasa tubuh, nada suara & attitude",
      "Need identification & teknik komunikasi menghadapi penolakan",
    ],
    metode: "Ceramah interaktif + simulasi kasus memetakan produk & wilayah",
  },
  {
    num: "03",
    tag: "PENTINGNYA PERENCANAAN",
    durasi: "60 Menit",
    time: "13.00–14.00",
    title: "Menyusun Rencana Tindak Lanjut yang Terukur",
    points: [
      "Peran dalam struktur organisasi & tanggung jawabnya",
      "Pola pikir analitis (abstraksi), berpikir kritis & membaca data",
      "Pengantar kerangka manajemen kerja: POAC, PDCA, dan OKR",
      "Fokus Praktik: Next Plan Action (NPA) — rencana & monitoring harian/mingguan",
      "Pengawasan, monitoring, dan evaluasi (MONEV)",
    ],
    metode: "Ceramah + praktek menyusun Next Plan Action",
  },
  {
    num: "04",
    tag: "RANGKUMAN & TANYA JAWAB",
    durasi: "30 Menit",
    time: "14.00–14.30",
    title: "Rangkuman Inti, Post-Test & Penutupan",
    points: [
      "Penyampaian key points (poin-poin kunci) materi",
      "Stepping stone menjadi sales yang handal",
      "Tanya jawab interaktif bersama peserta",
      "Post-test evaluasi pemahaman",
      "Closing & komitmen tindak lanjut peserta",
    ],
    metode: "Diskusi interaktif (membangun komunikasi dua arah yang hidup)",
  },
];

const RUNDOWN = [
  { no: "1", time: "10.00–10.10", durasi: "10 menit", kegiatan: "Registrasi" },
  { no: "2", time: "10.10–10.20", durasi: "10 menit", kegiatan: "Pembukaan" },
  { no: "3", time: "10.20–10.50", durasi: "30 menit", kegiatan: "Materi 1: Diri & Dunia Sales" },
  { no: "4", time: "10.50–11.00", durasi: "10 menit", kegiatan: "Break" },
  { no: "5", time: "11.00–12.00", durasi: "60 menit", kegiatan: "Materi 2: Produk, Pelanggan & Wilayah" },
  { no: "6", time: "12.00–13.00", durasi: "60 menit", kegiatan: "Istirahat (Ishoma Dzuhur)" },
  { no: "7", time: "13.00–14.00", durasi: "60 menit", kegiatan: "Materi 3: Pentingnya Perencanaan" },
  { no: "8", time: "14.00–14.30", durasi: "30 menit", kegiatan: "Penutupan (Rangkuman, Tanya Jawab & Post-Test)" },
  { no: "9", time: "14.30–15.00", durasi: "30 menit", kegiatan: "Konsultasi Bebas" },
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
              Rincian Sesi Pembelajaran
            </h2>
          </div>
          <p className="text-gray-400 font-body text-sm max-w-md leading-relaxed">
            3 Materi Inti + Penutupan + Konsultasi Bebas. Disusun dari 25 tahun pengalaman
            nyata di lapangan — praktis, simple, dan langsung bisa diterapkan.
          </p>
        </div>

        {/* 2-Column Materi Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {MATERI.map((item) => (
            <div
              key={item.num}
              className="p-7 sm:p-8 rounded-xl bg-[#131519] border border-white/[0.07] hover:border-emerald-500/40 transition-all duration-300 group flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-white/[0.05] pb-4 mb-5">
                <div>
                  <span className="font-mono text-3xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors block leading-none">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold mt-1 block">
                    {item.tag}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-gray-500 block">{item.time} WIB</span>
                  <span className="text-[11px] font-mono font-bold text-white block">{item.durasi}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-white text-base sm:text-lg leading-snug mb-4 group-hover:text-emerald-200 transition-colors">
                {item.title}
              </h3>

              {/* Points */}
              <ul className="space-y-2 flex-1">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400 font-body leading-relaxed">
                    <span className="text-emerald-500 font-mono font-bold shrink-0 mt-0.5">—</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Metode Footer */}
              <div className="mt-5 pt-4 border-t border-white/[0.04] text-[11px] font-mono text-gray-500 leading-relaxed">
                <span className="text-emerald-400 font-semibold">Metode:</span> {item.metode}
              </div>
            </div>
          ))}
        </div>

        {/* Rundown Acara Table */}
        <div className="rounded-2xl bg-[#131519] border border-white/[0.07] overflow-hidden">
          <div className="border-b border-white/[0.07] px-7 sm:px-9 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-widest block mb-1">
                Rundown Acara
              </span>
              <h3 className="font-display font-bold text-white text-xl tracking-tight">
                Jadwal Lengkap 10.00 – 15.00 WIB
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              ±5 Jam Total
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.05]">
                  <th className="text-left px-5 sm:px-7 py-3 text-[10px] font-mono uppercase tracking-widest text-gray-500 w-8">No</th>
                  <th className="text-left px-3 py-3 text-[10px] font-mono uppercase tracking-widest text-gray-500">Waktu</th>
                  <th className="text-left px-3 py-3 text-[10px] font-mono uppercase tracking-widest text-gray-500 hidden sm:table-cell">Durasi</th>
                  <th className="text-left px-3 py-3 text-[10px] font-mono uppercase tracking-widest text-gray-500">Kegiatan</th>
                </tr>
              </thead>
              <tbody>
                {RUNDOWN.map((row, idx) => (
                  <tr
                    key={row.no}
                    className={`border-b border-white/[0.04] transition-colors hover:bg-white/[0.02] ${
                      row.no === "9" ? "bg-emerald-500/[0.04]" : ""
                    }`}
                  >
                    <td className="px-5 sm:px-7 py-3.5 text-[11px] font-mono text-gray-600">{row.no}</td>
                    <td className="px-3 py-3.5 text-xs font-mono font-semibold text-white whitespace-nowrap">{row.time}</td>
                    <td className="px-3 py-3.5 text-[11px] font-mono text-gray-500 hidden sm:table-cell whitespace-nowrap">{row.durasi}</td>
                    <td className={`px-3 py-3.5 text-xs sm:text-sm font-body ${
                      row.no === "6" ? "text-gray-500 italic" :
                      row.no === "9" ? "text-emerald-400 font-medium" :
                      [3,5,7,8].includes(idx) ? "text-white font-medium" : "text-gray-300"
                    }`}>
                      {row.kegiatan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-5 sm:px-7 py-4 border-t border-white/[0.05] text-[11px] font-mono text-gray-600 leading-relaxed">
            *Sesi pembelajaran inti (Materi 1–3 + Penutupan) berdurasi <span className="text-white font-semibold">180 menit</span>. Total rangkaian acara ±5 jam, termasuk registrasi, istirahat Ishoma, dan konsultasi bebas.
          </div>
        </div>

        {/* Pembelajaran Berjenjang */}
        <div className="mt-8 p-6 sm:p-8 rounded-xl border border-white/[0.07] bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-widest block mb-2">
              Tersedia Pembelajaran Berjenjang
            </span>
            <p className="text-sm font-body text-gray-400 leading-relaxed">
              Sales Ready! dirancang sebagai bagian dari program berjenjang di Ruang Sales. Setelah menyelesaikan sesi ini, Anda dapat melanjutkan ke level berikutnya.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {["Beginner", "Intermediate", "Advance"].map((level, i) => (
              <div key={level} className={`px-3.5 py-2 rounded-lg border text-center text-xs font-mono font-bold tracking-wider ${
                i === 0
                  ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-400"
                  : "border-white/[0.07] text-gray-600"
              }`}>
                <span className="block text-[10px] text-gray-500 mb-0.5">Level {["1","2","3"][i]}</span>
                {level}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
