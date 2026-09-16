"use client";

import React from "react";

const AUDIENSI = [
  {
    index: "01",
    role: "Pelajar & Mahasiswa",
    question: "Mau terjun ke dunia kerja tapi belum paham dunia sales?",
    narrative:
      "Memiliki antusiasme tinggi tetapi belum memahami cara kerja industri nyata. Sesi ini memberikan peta jalan karir sales yang realistis dari seseorang yang merintis karier dari nol.",
  },
  {
    index: "02",
    role: "Fresh Graduate & Pencari Kerja",
    question: "Lamaran sudah dikirim, tapi posisi sales terasa membingungkan?",
    narrative:
      "Membedakan mana lowongan sales yang membangun prospek karier jangka panjang dengan yang sekadar mengejar omzet instan, serta cara memposisikan diri sebagai kandidat bernilai tinggi.",
  },
  {
    index: "03",
    role: "Karyawan Baru di Bidang Sales",
    question: "Sudah mulai bekerja tapi menghadapi tekanan target tanpa arahan?",
    narrative:
      "Banyak staf baru dibebani target tanpa dibekali metode mitigasi penolakan. Sesi ini membedah teknik memecah target bulanan menjadi langkah harian yang terukur.",
  },
  {
    index: "04",
    role: "Pelaku UMKM",
    question: "Produk sudah siap, tapi penjualan stagnan dan sulit tembus pasar?",
    narrative:
      "Belajar membangun alur penjualan mandiri yang praktis tanpa harus membakar modal iklan besar atau merekrut tim yang mahal di awal.",
  },
  {
    index: "05",
    role: "Wirausahawan & Pemilik Usaha",
    question: "Ingin memperluas jangkauan distribusi ke berbagai kota?",
    narrative:
      "Pak Dito membagikan blueprint distribusi nyata: pola negosiasi toko retail, pemilihan titik distribusi, dan manajemen piutang dagang yang aman.",
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
              Relevansi Calon Peserta
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Apakah Sesi Ini Dirancang untuk Anda?
            </h2>
          </div>
          <p className="text-gray-400 font-body text-sm max-w-sm leading-relaxed">
            Format tatap muka kelompok kecil (8–20 peserta) memastikan kendala spesifik Anda
            bisa langsung didiskusikan tanpa rasa canggung.
          </p>
        </div>

        {/* Editorial Index Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENSI.map((item) => (
            <div
              key={item.index}
              className="relative p-7 rounded-xl bg-[#131519] border border-white/[0.07] hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
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
                <h3 className="font-display font-bold text-white text-base leading-snug mb-3 group-hover:text-emerald-300 transition-colors">
                  &ldquo;{item.question}&rdquo;
                </h3>

                {/* Narrative */}
                <p className="text-gray-400 font-body text-xs sm:text-sm leading-relaxed">
                  {item.narrative}
                </p>
              </div>

              {/* Bottom Hairline Highlight */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>Studi Kasus Lapangan</span>
                <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Tatap Muka &rarr;
                </span>
              </div>
            </div>
          ))}

          {/* Sesi Terbuka Highlight Box */}
          <div className="relative p-7 rounded-xl bg-gradient-to-br from-emerald-950/20 via-[#131519] to-[#131519] border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4 mb-5">
                <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider">
                  [SESI]
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                  Latar Belakang Lain
                </span>
              </div>
              <h3 className="font-display font-bold text-white text-base leading-snug mb-3">
                Memiliki ketertarikan kuat mendalami profesi sales?
              </h3>
              <p className="text-gray-400 font-body text-xs sm:text-sm leading-relaxed">
                Terbuka bagi siapa pun yang ingin memahami bagaimana negosiasi, mentalitas lapangan,
                dan distribusi produk bekerja langsung dari praktisi berpengalaman.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-500/15 text-[11px] font-mono text-emerald-400">
              Kapasitas Terbatas 8–20 Orang
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
