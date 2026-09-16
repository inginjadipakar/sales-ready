"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import {
  PARTICIPANT_TYPES,
  SALES_EXPERIENCE_LEVELS,
  type RegistrationFormData,
} from "@/lib/validation";

interface Step02ProfilProps {
  data: Partial<RegistrationFormData>;
  onChange: (field: keyof RegistrationFormData, value: string) => void;
  errors: Record<string, string | undefined>;
}

const radioCard = (isSelected: boolean) =>
  `flex items-center gap-3 p-3 rounded-lg border text-xs sm:text-sm cursor-pointer transition-all ${
    isSelected
      ? "border-emerald-500/60 bg-emerald-500/[0.08] text-white font-medium"
      : "border-white/[0.07] bg-white/[0.02] text-gray-400 hover:border-white/15 hover:text-gray-200"
  }`;

export function Step02Profil({ data, onChange, errors }: Step02ProfilProps) {
  return (
    <div className="space-y-8">
      <div className="border-b border-white/[0.07] pb-4">
        <h2 className="text-xl font-display font-bold text-white tracking-tight">
          Profil &amp; Pengalaman
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed font-body">
          Membantu narasumber memahami komposisi dan latar belakang peserta di dalam ruangan.
        </p>
      </div>

      {/* Status Saat Ini */}
      <div className="space-y-2.5">
        <label className="block text-xs font-mono font-semibold text-gray-300">
          Status atau peran Anda saat ini: <span className="text-emerald-400">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {PARTICIPANT_TYPES.map((type) => {
            const isSelected = data.participantType === type;
            return (
              <label key={type} className={radioCard(isSelected)}>
                <input
                  type="radio"
                  name="participantType"
                  value={type}
                  checked={isSelected}
                  onChange={() => onChange("participantType", type)}
                  className="accent-emerald-500"
                />
                <span>{type}</span>
              </label>
            );
          })}
        </div>
        {errors.participantType && (
          <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1">
            <AlertCircle className="w-3.5 h-3.5" />{errors.participantType}
          </p>
        )}
      </div>

      {/* Pengalaman Sales */}
      <div className="space-y-2.5">
        <label className="block text-xs font-mono font-semibold text-gray-300">
          Tingkat pengalaman di bidang penjualan: <span className="text-emerald-400">*</span>
        </label>
        <div className="space-y-2">
          {SALES_EXPERIENCE_LEVELS.map((level) => {
            const isSelected = data.salesExperience === level;
            return (
              <label key={level} className={radioCard(isSelected)}>
                <input
                  type="radio"
                  name="salesExperience"
                  value={level}
                  checked={isSelected}
                  onChange={() => onChange("salesExperience", level)}
                  className="accent-emerald-500"
                />
                <span>{level}</span>
              </label>
            );
          })}
        </div>
        {errors.salesExperience && (
          <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1">
            <AlertCircle className="w-3.5 h-3.5" />{errors.salesExperience}
          </p>
        )}
      </div>
    </div>
  );
}
