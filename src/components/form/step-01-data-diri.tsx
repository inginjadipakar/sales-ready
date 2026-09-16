"use client";

import React from "react";
import { User, Phone, MapPin, Mail, AlertCircle } from "lucide-react";
import type { RegistrationFormData } from "@/lib/validation";

interface Step01DataDiriProps {
  data: Partial<RegistrationFormData>;
  onChange: (field: keyof RegistrationFormData, value: string) => void;
  errors: Record<string, string | undefined>;
}

const inputClass = (hasError: boolean) =>
  `w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm bg-[#0C0D0F] text-white placeholder-gray-600 transition-all focus:outline-none focus:ring-2 ${
    hasError
      ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/15"
      : "border-white/10 focus:border-emerald-500 focus:ring-emerald-500/15"
  }`;

export function Step01DataDiri({ data, onChange, errors }: Step01DataDiriProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-white/[0.07] pb-4">
        <h2 className="text-xl font-display font-bold text-white tracking-tight">
          Data Diri &amp; Kontak
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed font-body">
          Informasi ini digunakan untuk konfirmasi kehadiran dan pengiriman detail lokasi via WhatsApp.
        </p>
      </div>

      {/* Honeypot field (hidden for anti-bot) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_website">Website URL</label>
        <input
          type="text"
          id="hp_website"
          name="hp_website"
          value={data.hp_website || ""}
          onChange={(e) => onChange("hp_website", e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Nama Lengkap */}
      <div className="space-y-1.5">
        <label htmlFor="name" className="block text-xs font-mono font-semibold text-gray-300">
          Nama Lengkap <span className="text-emerald-400">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-600">
            <User className="w-4 h-4" />
          </div>
          <input
            id="name" name="name" type="text" required maxLength={100}
            placeholder="Nama lengkap Anda"
            value={data.name || ""}
            onChange={(e) => onChange("name", e.target.value)}
            className={inputClass(!!errors.name)}
          />
        </div>
        {errors.name && (
          <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1">
            <AlertCircle className="w-3.5 h-3.5" />{errors.name}
          </p>
        )}
      </div>

      {/* Nomor WhatsApp */}
      <div className="space-y-1.5">
        <label htmlFor="whatsapp" className="block text-xs font-mono font-semibold text-gray-300">
          Nomor WhatsApp Aktif <span className="text-emerald-400">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-600">
            <Phone className="w-4 h-4" />
          </div>
          <input
            id="whatsapp" name="whatsapp" type="tel" required maxLength={20}
            placeholder="081234567890"
            value={data.whatsapp || ""}
            onChange={(e) => onChange("whatsapp", e.target.value)}
            className={`${inputClass(!!errors.whatsapp)} font-mono`}
          />
        </div>
        <p className="text-[11px] text-gray-600 font-mono">
          Nomor ini akan dihubungi Admin untuk verifikasi kehadiran.
        </p>
        {errors.whatsapp && (
          <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1">
            <AlertCircle className="w-3.5 h-3.5" />{errors.whatsapp}
          </p>
        )}
      </div>

      {/* Domisili */}
      <div className="space-y-1.5">
        <label htmlFor="domicile" className="block text-xs font-mono font-semibold text-gray-300">
          Kota Domisili Saat Ini <span className="text-emerald-400">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-600">
            <MapPin className="w-4 h-4" />
          </div>
          <input
            id="domicile" name="domicile" type="text" required maxLength={100}
            placeholder="Contoh: Ngawi, Madiun, Magetan"
            value={data.domicile || ""}
            onChange={(e) => onChange("domicile", e.target.value)}
            className={inputClass(!!errors.domicile)}
          />
        </div>
        {errors.domicile && (
          <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1">
            <AlertCircle className="w-3.5 h-3.5" />{errors.domicile}
          </p>
        )}
      </div>

      {/* Email (Opsional) */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="email" className="block text-xs font-mono font-semibold text-gray-300">
            Alamat Email
          </label>
          <span className="text-[11px] font-mono text-gray-600">Opsional</span>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-600">
            <Mail className="w-4 h-4" />
          </div>
          <input
            id="email" name="email" type="email" maxLength={150}
            placeholder="nama@email.com"
            value={data.email || ""}
            onChange={(e) => onChange("email", e.target.value)}
            className={inputClass(!!errors.email)}
          />
        </div>
        {errors.email && (
          <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1">
            <AlertCircle className="w-3.5 h-3.5" />{errors.email}
          </p>
        )}
      </div>
    </div>
  );
}
