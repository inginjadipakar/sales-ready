"use client";

import React from "react";
import { AlertCircle, Edit3 } from "lucide-react";
import type { RegistrationFormData } from "@/lib/validation";

interface Step04KonfirmasiProps {
  data: RegistrationFormData;
  onEditStep: (step: number) => void;
  submitError?: string;
  agreed: boolean;
  onAgreedChange: (agreed: boolean) => void;
}

export function Step04Konfirmasi({
  data,
  onEditStep,
  submitError,
  agreed,
  onAgreedChange,
}: Step04KonfirmasiProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-white/[0.07] pb-4">
        <h2 className="text-xl font-display font-bold text-white tracking-tight">
          Konfirmasi Data Pendaftaran
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed font-body">
          Pastikan seluruh informasi kontak dan profil Anda sudah benar sebelum dikirimkan ke Admin.
        </p>
      </div>

      {submitError && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-xs font-mono uppercase tracking-wide text-red-300">Pendaftaran Belum Berhasil</p>
            <p className="mt-0.5 text-xs font-body text-red-400">{submitError}</p>
          </div>
        </div>
      )}

      {/* Ringkasan Data */}
      <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] divide-y divide-white/[0.05] text-sm overflow-hidden">
        {/* Data Diri */}
        <div className="p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold">1. Data Diri</span>
            <button
              type="button"
              onClick={() => onEditStep(1)}
              className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 cursor-pointer transition-colors"
            >
              <Edit3 className="w-3 h-3" /> Ubah
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {[
              { label: "Nama Lengkap", value: data.name },
              { label: "Nomor WhatsApp", value: data.whatsapp, mono: true },
              { label: "Kota Domisili", value: data.domicile },
              { label: "Email", value: data.email || "—" },
            ].map(({ label, value, mono }) => (
              <div key={label}>
                <span className="text-gray-600 block mb-0.5">{label}</span>
                <span className={`font-semibold text-white text-sm ${mono ? "font-mono" : ""}`}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profil */}
        <div className="p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold">2. Profil &amp; Pengalaman</span>
            <button
              type="button"
              onClick={() => onEditStep(2)}
              className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 cursor-pointer transition-colors"
            >
              <Edit3 className="w-3 h-3" /> Ubah
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-gray-600 block mb-0.5">Status Saat Ini</span>
              <span className="font-semibold text-white">{data.participantType}</span>
            </div>
            <div>
              <span className="text-gray-600 block mb-0.5">Pengalaman Sales</span>
              <span className="font-semibold text-white">{data.salesExperience}</span>
            </div>
          </div>
        </div>

        {/* Tujuan */}
        <div className="p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold">3. Ekspektasi Materi</span>
            <button
              type="button"
              onClick={() => onEditStep(3)}
              className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 cursor-pointer transition-colors"
            >
              <Edit3 className="w-3 h-3" /> Ubah
            </button>
          </div>
          <div>
            <span className="text-xs text-gray-600 block mb-1.5">Topik yang Dipilih:</span>
            <ul className="space-y-1 text-xs text-gray-300">
              {data.goals?.map((g, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold mt-0.5">•</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
          {data.question && (
            <div className="pt-2">
              <span className="text-xs text-gray-600 block mb-1.5">Pertanyaan untuk Pak Dito:</span>
              <p className="text-xs text-gray-300 italic bg-white/[0.03] p-3 rounded-lg border border-white/[0.07] leading-relaxed font-body">
                &ldquo;{data.question}&rdquo;
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Checkbox Agreement */}
      <div className="pt-2">
        <label className="flex items-start gap-3 p-4 rounded-lg border border-white/[0.07] bg-white/[0.02] cursor-pointer hover:border-emerald-500/30 transition-colors">
          <input
            type="checkbox"
            id="agreement"
            checked={agreed}
            onChange={(e) => onAgreedChange(e.target.checked)}
            className="mt-0.5 rounded accent-emerald-500"
          />
          <span className="text-xs text-gray-400 font-body leading-relaxed">
            Saya memastikan data yang saya isi benar dan berkomitmen untuk hadir tatap muka
            jika pendaftaran dikonfirmasi oleh Admin.
          </span>
        </label>
      </div>
    </div>
  );
}
