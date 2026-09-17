"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MessageCircle, ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { normalizeWhatsApp } from "@/lib/validation";

function BerhasilContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Peserta";
  const whatsapp = searchParams.get("whatsapp") || "";

  const rawAdminWA = process.env.NEXT_PUBLIC_ADMIN_WHATSAPP || "6281234567890";
  const adminWhatsApp = normalizeWhatsApp(rawAdminWA) || "6281234567890";
  const prefilledMessage = encodeURIComponent(
    `Halo Admin Sales Ready! (Ruang Sales), saya sudah mendaftar atas nama ${name} (${whatsapp}) untuk program Sales Ready! — Bekal Praktis Menjadi Tenaga Penjualan, di Masjid Jami Sosrohadisewoyo Ngawi (10.00–15.00 WIB). Mohon konfirmasi kehadiran dan informasi selanjutnya. Terima kasih!`
  );
  const waUrl = `https://wa.me/${adminWhatsApp}?text=${prefilledMessage}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Masjid Jami Sosrohadisewoyo Jl. Munginsidi No 51 RT 011 RW 002 Pelem II Desa Pelem, Ngawi"
  )}`;

  return (
    <div className="max-w-lg mx-auto bg-[#131519] border border-white/[0.07] rounded-2xl p-7 sm:p-9 space-y-6">
      {/* Header */}
      <div className="space-y-2 border-b border-white/[0.07] pb-5">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
          Pendaftaran Berhasil Dikirim
        </h1>
        <p className="text-sm font-body text-gray-400 leading-relaxed">
          Terima kasih, <strong className="text-white">{name}</strong>. Data registrasi Anda telah tersimpan di sistem kami.
        </p>
      </div>

      {/* Event Details */}
      <div className="p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] space-y-3">
        <div>
          <span className="font-mono text-[11px] font-semibold text-emerald-400 uppercase tracking-widest block">
            Detail Sesi Tatap Muka
          </span>
          <h2 className="text-base font-display font-bold text-white mt-0.5">
            Sales Ready! — Ngobrol Bareng Praktisi
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">Bersama Pak Dito (25 Tahun Pengalaman)</p>
        </div>

        <div className="pt-2.5 border-t border-white/[0.07] space-y-2.5 text-xs font-mono">
          <div className="flex items-baseline justify-between p-2.5 rounded-lg bg-[#0C0D0F] border border-white/[0.05]">
            <span className="text-emerald-400 font-semibold">WAKTU:</span>
            <span className="text-white font-medium">10.00 – 15.00 WIB (±5 Jam)</span>
          </div>
          <div className="flex items-baseline justify-between p-2.5 rounded-lg bg-[#0C0D0F] border border-white/[0.05]">
            <span className="text-emerald-400 font-semibold">SESI INTI:</span>
            <span className="text-white font-medium">180 Menit + Konsultasi Bebas</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#0C0D0F] border border-white/[0.05] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-emerald-400 font-semibold">VENUE:</span>
              <span className="text-white font-medium">Masjid Jami Sosrohadisewoyo</span>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed font-body">
              Jl. Munginsidi No 51 RT 011 RW 002 Pelem II, Desa Pelem, Kab. Ngawi
            </p>
          </div>
        </div>

        <div className="pt-1">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
          >
            <span>Petunjuk Arah (Buka Google Maps)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Status Badge */}
      <div className="space-y-2 p-4 bg-emerald-500/[0.07] rounded-xl border border-emerald-500/20">
        <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-semibold uppercase tracking-widest">
          Status: Menunggu Konfirmasi Admin
        </div>
        <p className="text-xs text-gray-400 font-body leading-relaxed">
          Admin kami akan menghubungi nomor WhatsApp Anda ({whatsapp || "yang Anda daftarkan"}) untuk
          verifikasi data dan konfirmasi kehadiran di lokasi.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 space-y-3">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-mono font-semibold uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
        >
          <MessageCircle className="w-4 h-4" />
          Hubungi Admin Langsung
        </a>
        <Link
          href="/"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 text-xs font-mono font-medium transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Halaman Depan
        </Link>
      </div>
    </div>
  );
}

export default function BerhasilPage() {
  return (
    <div className="min-h-screen bg-[#0C0D0F] text-white selection:bg-emerald-500/30 selection:text-emerald-200 flex items-center justify-center p-4 sm:p-8">
      <Suspense
        fallback={
          <div className="text-center p-8 font-mono text-xs text-gray-600">
            Memuat data pendaftaran...
          </div>
        }
      >
        <BerhasilContent />
      </Suspense>
    </div>
  );
}
