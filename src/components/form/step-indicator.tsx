"use client";

import React from "react";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
  onStepClick?: (step: number) => void;
}

const steps = [
  { step: 1, label: "Data Diri", description: "Identitas kontak" },
  { step: 2, label: "Profil", description: "Latar belakang" },
  { step: 3, label: "Tujuan", description: "Fokus & pertanyaan" },
  { step: 4, label: "Konfirmasi", description: "Review data" },
];

export function StepIndicator({ currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="w-full mb-8">
      {/* Mobile Step Bar */}
      <div className="md:hidden flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs font-mono text-gray-500">
          <span>Langkah 0{currentStep} / 04</span>
          <span className="font-semibold text-white">
            {steps[currentStep - 1]?.label}
          </span>
        </div>
        <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop Step Numbers */}
      <div className="hidden md:grid grid-cols-4 gap-3">
        {steps.map((item) => {
          const isCompleted = item.step < currentStep;
          const isCurrent = item.step === currentStep;

          return (
            <button
              key={item.step}
              type="button"
              disabled={item.step > currentStep}
              onClick={() => isCompleted && onStepClick?.(item.step)}
              className={`text-left p-3 rounded-lg border transition-all text-xs font-mono ${
                isCurrent
                  ? "border-emerald-500/50 bg-emerald-500/[0.08] text-white"
                  : isCompleted
                  ? "border-white/10 bg-white/[0.04] text-gray-300 hover:border-white/20 cursor-pointer"
                  : "border-white/[0.05] bg-transparent text-gray-600 cursor-not-allowed opacity-50"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold ${
                    isCompleted
                      ? "bg-emerald-500 text-white"
                      : isCurrent
                      ? "bg-emerald-500 text-white ring-2 ring-emerald-500/30"
                      : "bg-white/[0.06] text-gray-500"
                  }`}
                >
                  {isCompleted ? <Check className="w-3 h-3 stroke-[3]" /> : item.step}
                </span>
                <span className="font-semibold tracking-wider uppercase text-[10px]">
                  {item.label}
                </span>
              </div>
              <p className="text-[10px] text-gray-600 truncate">{item.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
