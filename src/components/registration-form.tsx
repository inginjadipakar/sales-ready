"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User, Phone, MapPin, Mail, AlertCircle, Check, Loader2,
} from "lucide-react";
import {
  PARTICIPANT_TYPES,
  SALES_EXPERIENCE_LEVELS,
  AVAILABLE_GOALS,
  registrationSubmissionSchema,
  type RegistrationFormData,
} from "@/lib/validation";
import { registerParticipant } from "@/app/actions/registration";

const initial: RegistrationFormData = {
  name: "",
  whatsapp: "",
  domicile: "",
  email: "",
  participantType: "",
  salesExperience: "",
  goals: [],
  question: "",
  hp_website: "",
};

const inp = (hasError: boolean) =>
  `w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm bg-[#0C0D0F] text-white placeholder-gray-600 transition-all focus:outline-none focus:ring-2 ${
    hasError
      ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/15"
      : "border-white/10 focus:border-emerald-500 focus:ring-emerald-500/15"
  }`;

const radioCard = (active: boolean) =>
  `flex items-center gap-2.5 px-3 py-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
    active
      ? "border-emerald-500/60 bg-emerald-500/[0.08] text-white font-medium"
      : "border-white/[0.07] bg-transparent text-gray-400 hover:border-white/15 hover:text-gray-200"
  }`;

export function RegistrationForm() {
  const router = useRouter();
  const [data, setData] = useState<RegistrationFormData>(initial);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [submitError, setSubmitError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [agreedGroup, setAgreedGroup] = useState(false);

  const WA_GROUP_URL = "https://chat.whatsapp.com/DuNbn9aM3Td2mCQJzbJCU4?s=cl&p=a&mlu=4&ilr=4";

  const set = (field: keyof RegistrationFormData, value: string | string[]) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleGoal = (goal: string) => {
    const next = data.goals.includes(goal)
      ? data.goals.filter((g) => g !== goal)
      : [...data.goals, goal];
    set("goals", next);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitError(undefined);

    // Validate full schema
    const result = registrationSubmissionSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      // Scroll to first error
      const firstKey = Object.keys(fieldErrors)[0];
      document.getElementById(firstKey)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (!agreed || !agreedGroup) {
      setSubmitError("Centang semua persetujuan terlebih dahulu sebelum mengirim.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await registerParticipant(data);
      if (res.success) {
          // Buka grup WA di tab baru
          window.open(WA_GROUP_URL, "_blank", "noopener,noreferrer");
          const params = new URLSearchParams({
            name: data.name,
            whatsapp: res.data?.whatsapp || data.whatsapp,
          });
          router.push(`/berhasil?${params.toString()}`);
      } else {
        setSubmitError(res.error || "Gagal mengirim formulir. Silakan periksa data Anda.");
      }
    } catch {
      setSubmitError("Terjadi kendala koneksi ke server. Silakan coba kembali.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const q = data.question || "";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-2xl mx-auto bg-[#131519] border border-white/[0.07] rounded-2xl p-6 sm:p-10 space-y-8"
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text" name="hp_website" tabIndex={-1} autoComplete="off"
          value={data.hp_website || ""} onChange={(e) => set("hp_website", e.target.value)}
        />
      </div>

      {/* ── Bagian 1: Data Diri ── */}
      <section className="space-y-4">
        <div className="border-b border-white/[0.07] pb-3">
          <h2 className="font-display font-bold text-white text-base tracking-tight">
            Data Diri &amp; Kontak
          </h2>
          <p className="text-xs text-gray-600 mt-0.5 font-body">
            Untuk konfirmasi kehadiran via WhatsApp.
          </p>
        </div>

        {/* Nama */}
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
              value={data.name}
              onChange={(e) => set("name", e.target.value)}
              className={inp(!!errors.name)}
            />
          </div>
          {errors.name && <p className="flex items-center gap-1.5 text-xs text-red-400 mt-0.5"><AlertCircle className="w-3.5 h-3.5" />{errors.name}</p>}
        </div>

        {/* WhatsApp */}
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
              value={data.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              className={`${inp(!!errors.whatsapp)} font-mono`}
            />
          </div>
          <p className="text-[11px] text-gray-600 font-mono">Admin akan menghubungi nomor ini untuk verifikasi.</p>
          {errors.whatsapp && <p className="flex items-center gap-1.5 text-xs text-red-400 mt-0.5"><AlertCircle className="w-3.5 h-3.5" />{errors.whatsapp}</p>}
        </div>

        {/* Domisili + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="domicile" className="block text-xs font-mono font-semibold text-gray-300">
              Kota Domisili <span className="text-emerald-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-600">
                <MapPin className="w-4 h-4" />
              </div>
              <input
                id="domicile" name="domicile" type="text" required maxLength={100}
                placeholder="Contoh: Ngawi, Madiun, Magetan, ..."
                value={data.domicile}
                onChange={(e) => set("domicile", e.target.value)}
                className={inp(!!errors.domicile)}
              />
            </div>
            {errors.domicile && <p className="flex items-center gap-1.5 text-xs text-red-400 mt-0.5"><AlertCircle className="w-3.5 h-3.5" />{errors.domicile}</p>}
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="email" className="block text-xs font-mono font-semibold text-gray-300">Email</label>
              <span className="text-[10px] font-mono text-gray-600">Opsional</span>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-600">
                <Mail className="w-4 h-4" />
              </div>
              <input
                id="email" name="email" type="email" maxLength={150}
                placeholder="nama@email.com"
                value={data.email || ""}
                onChange={(e) => set("email", e.target.value)}
                className={inp(!!errors.email)}
              />
            </div>
            {errors.email && <p className="flex items-center gap-1.5 text-xs text-red-400 mt-0.5"><AlertCircle className="w-3.5 h-3.5" />{errors.email}</p>}
          </div>
        </div>
      </section>

      {/* ── Bagian 2: Profil ── */}
      <section className="space-y-4">
        <div className="border-b border-white/[0.07] pb-3">
          <h2 className="font-display font-bold text-white text-base tracking-tight">
            Profil &amp; Pengalaman
          </h2>
        </div>

        {/* Status */}
        <div className="space-y-2">
          <label className="block text-xs font-mono font-semibold text-gray-300">
            Status saat ini <span className="text-emerald-400">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {PARTICIPANT_TYPES.map((type) => (
              <label key={type} className={radioCard(data.participantType === type)}>
                <input
                  type="radio" name="participantType" value={type}
                  checked={data.participantType === type}
                  onChange={() => set("participantType", type)}
                  className="accent-emerald-500 shrink-0"
                />
                <span className="truncate">{type}</span>
              </label>
            ))}
          </div>
          {errors.participantType && <p className="flex items-center gap-1.5 text-xs text-red-400 mt-0.5"><AlertCircle className="w-3.5 h-3.5" />{errors.participantType}</p>}
        </div>

        {/* Pengalaman */}
        <div className="space-y-2">
          <label className="block text-xs font-mono font-semibold text-gray-300">
            Pengalaman di bidang sales <span className="text-emerald-400">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SALES_EXPERIENCE_LEVELS.map((level) => (
              <label key={level} className={radioCard(data.salesExperience === level)}>
                <input
                  type="radio" name="salesExperience" value={level}
                  checked={data.salesExperience === level}
                  onChange={() => set("salesExperience", level)}
                  className="accent-emerald-500 shrink-0"
                />
                <span>{level}</span>
              </label>
            ))}
          </div>
          {errors.salesExperience && <p className="flex items-center gap-1.5 text-xs text-red-400 mt-0.5"><AlertCircle className="w-3.5 h-3.5" />{errors.salesExperience}</p>}
        </div>
      </section>

      {/* ── Bagian 3: Tujuan & Pertanyaan ── */}
      <section className="space-y-4">
        <div className="border-b border-white/[0.07] pb-3">
          <h2 className="font-display font-bold text-white text-base tracking-tight">
            Tujuan &amp; Pertanyaan
          </h2>
        </div>

        {/* Goals */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono font-semibold text-gray-300">
              Materi yang paling Anda butuhkan <span className="text-emerald-400">*</span>
            </label>
            <span className="text-[10px] font-mono text-gray-600">{data.goals.length} dipilih</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {AVAILABLE_GOALS.map((goal) => (
              <label key={goal} className={radioCard(data.goals.includes(goal))}>
                <input
                  type="checkbox" checked={data.goals.includes(goal)}
                  onChange={() => toggleGoal(goal)}
                  className="accent-emerald-500 rounded shrink-0"
                />
                <span>{goal}</span>
              </label>
            ))}
          </div>
          {errors.goals && <p className="flex items-center gap-1.5 text-xs text-red-400 mt-0.5"><AlertCircle className="w-3.5 h-3.5" />{errors.goals}</p>}
        </div>

        {/* Pertanyaan */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="question" className="block text-xs font-mono font-semibold text-gray-300">
              Pertanyaan untuk Pak Dito
            </label>
            <span className={`text-[10px] font-mono ${q.length > 500 ? "text-red-400 font-bold" : "text-gray-600"}`}>
              {q.length}/500
            </span>
          </div>
          <textarea
            id="question" name="question" rows={3} maxLength={500}
            placeholder="Kendala nyata yang ingin Anda diskusikan..."
            value={q}
            onChange={(e) => set("question", e.target.value)}
            className={`w-full p-3 rounded-lg border text-sm bg-[#0C0D0F] text-white placeholder-gray-600 transition-all focus:outline-none focus:ring-2 resize-none ${
              errors.question
                ? "border-red-500/60 focus:ring-red-500/15"
                : "border-white/10 focus:border-emerald-500 focus:ring-emerald-500/15"
            }`}
          />
          <p className="text-[10px] text-gray-600 font-mono">Opsional · Maks 500 karakter</p>
        </div>
      </section>

      {/* ── Submit ── */}
      <div className="space-y-4 pt-1">
        {submitError && (
          <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <p className="text-xs text-red-400 font-body leading-relaxed">{submitError}</p>
          </div>
        )}

        <label className="flex items-start gap-3 p-4 rounded-lg border border-white/[0.07] bg-white/[0.02] cursor-pointer hover:border-emerald-500/30 transition-colors">
          <input
            type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 rounded accent-emerald-500 shrink-0"
          />
          <span className="text-xs text-gray-400 font-body leading-relaxed">
            Saya memastikan data yang saya isi benar dan berkomitmen untuk hadir tatap muka
            jika pendaftaran dikonfirmasi oleh Admin.
          </span>
        </label>

        {/* Checkbox grup WA */}
        <label className="flex items-start gap-3 p-4 rounded-lg border border-white/[0.07] bg-white/[0.02] cursor-pointer hover:border-emerald-500/30 transition-colors">
          <input
            type="checkbox" checked={agreedGroup} onChange={(e) => setAgreedGroup(e.target.checked)}
            className="mt-0.5 rounded accent-emerald-500 shrink-0"
          />
          <span className="text-xs text-gray-400 font-body leading-relaxed">
            Saya bersedia bergabung ke{" "}
            <span className="text-emerald-400 font-semibold">Grup WhatsApp</span>{" "}
            peserta yang akan dikirimkan setelah pendaftaran berhasil.
          </span>
        </label>

        <button
          type="submit"
          disabled={isSubmitting || !agreed || !agreedGroup}
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-mono font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <><Loader2 className="w-4 h-4 animate-spin" />Memproses...</>
          ) : (
            <><Check className="w-4 h-4 stroke-[3]" />Kirim Pendaftaran</>
          )}
        </button>
      </div>
    </form>
  );
}
