import React from "react";
import { loginAdmin } from "@/app/actions/admin";

export const metadata = {
  title: "Login Admin — Sales Ready!",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const isError = params?.error === "1";

  return (
    <div className="min-h-screen bg-[#0C0D0F] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-3">
            Admin Access
          </span>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">
            Sales Ready!
          </h1>
          <p className="text-xs text-gray-500 font-mono mt-1">
            Dashboard Peserta
          </p>
        </div>

        {/* Error Alert */}
        {isError && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono text-center">
            Password salah. Silakan coba lagi.
          </div>
        )}

        {/* Form */}
        <form
          action={loginAdmin}
          className="bg-[#131519] border border-white/[0.07] rounded-2xl p-8 space-y-5"
        >
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="block text-xs font-mono font-semibold text-gray-300"
            >
              Password Admin
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-[#0C0D0F] text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:border-emerald-500 focus:ring-emerald-500/15 transition-all font-mono"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors"
          >
            Masuk
          </button>
        </form>

        <p className="text-center text-[10px] font-mono text-gray-700 mt-6">
          Halaman ini tidak dipublikasikan.
        </p>
      </div>
    </div>
  );
}
