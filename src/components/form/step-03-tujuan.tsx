"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import { AVAILABLE_GOALS, type RegistrationFormData } from "@/lib/validation";

interface Step03TujuanProps {
  data: Partial<RegistrationFormData>;
  onChange: (field: keyof RegistrationFormData, value: string | string[]) => void;
  errors: Record<string, string | undefined>;
}

export function Step03Tujuan({ data, onChange, errors }: Step03TujuanProps) {
  const selectedGoals = data.goals || [];
  const question = data.question || "";

  const handleGoalToggle = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      onChange("goals", selectedGoals.filter((g) => g !== goal));
    } else {
      onChange("goals", [...selectedGoals, goal]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="border-b border-white/[0.07] pb-4">
        <h2 className="text-xl font-display font-bold text-white tracking-tight">
          Tujuan &amp; Pertanyaan
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed font-body">
          Pilih ekspektasi materi yang ingin Anda dalami dan sampaikan pertanyaan khusus jika ada.
        </p>
      </div>

      {/* Goals */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-mono font-semibold text-gray-300">
            Materi atau insight yang paling Anda butuhkan: <span className="text-emerald-400">*</span>
          </label>
          <span className="text-[11px] font-mono text-gray-600">
            {selectedGoals.length} dipilih
          </span>
        </div>

        <div className="space-y-2">
          {AVAILABLE_GOALS.map((goal, idx) => {
            const isSelected = selectedGoals.includes(goal);
            return (
              <label
                key={idx}
                className={`flex items-center gap-3 p-3 rounded-lg border text-xs sm:text-sm cursor-pointer transition-all ${
                  isSelected
                    ? "border-emerald-500/60 bg-emerald-500/[0.08] text-white font-medium"
                    : "border-white/[0.07] bg-white/[0.02] text-gray-400 hover:border-white/15 hover:text-gray-200"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleGoalToggle(goal)}
                  className="rounded accent-emerald-500"
                />
                <span>{goal}</span>
              </label>
            );
          })}
        </div>

        {errors.goals && (
          <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1">
            <AlertCircle className="w-3.5 h-3.5" />{errors.goals}
          </p>
        )}
      </div>

      {/* Pertanyaan */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="question" className="block text-xs font-mono font-semibold text-gray-300">
            Pertanyaan Khusus untuk Pak Dito
          </label>
          <span className={`text-[11px] font-mono ${question.length > 500 ? "text-red-400 font-bold" : "text-gray-600"}`}>
            {question.length} / 500
          </span>
        </div>
        <textarea
          id="question"
          name="question"
          rows={4}
          maxLength={500}
          placeholder="Tuliskan kendala nyata atau hal spesifik yang ingin Anda diskusikan..."
          value={question}
          onChange={(e) => onChange("question", e.target.value)}
          className={`w-full p-3 rounded-lg border text-sm bg-[#0C0D0F] text-white placeholder-gray-600 transition-all focus:outline-none focus:ring-2 ${
            errors.question
              ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/15"
              : "border-white/10 focus:border-emerald-500 focus:ring-emerald-500/15"
          }`}
        />
        <p className="text-[11px] text-gray-600 font-mono">
          Maksimal 500 karakter. Pertanyaan ini akan dibahas saat sesi tanya jawab terbuka.
        </p>
        {errors.question && (
          <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1">
            <AlertCircle className="w-3.5 h-3.5" />{errors.question}
          </p>
        )}
      </div>
    </div>
  );
}
