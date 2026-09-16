import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getParticipants, logoutAdmin } from "@/app/actions/admin";
import type { Participant } from "@/db/schema";

export const metadata = {
  title: "Admin Dashboard — Sales Ready!",
  robots: { index: false, follow: false },
};

// ── Stat card ──────────────────────────────────────────────────────────────
function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-[#131519] border border-white/[0.07] rounded-xl p-5">
      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-3xl font-display font-bold text-white">{value}</p>
      {sub && <p className="text-xs text-gray-600 font-mono mt-0.5">{sub}</p>}
    </div>
  );
}

// ── Bar chart row ──────────────────────────────────────────────────────────
function BarRow({ label, count, total }: { label: string; count: number; total: number }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-gray-300">{label}</span>
        <span className="text-emerald-400 font-semibold">{count} <span className="text-gray-600">({pct}%)</span></span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// ── Count helper ───────────────────────────────────────────────────────────
function countBy(data: Participant[], key: keyof Participant): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const row of data) {
    const val = String(row[key] ?? "—");
    counts[val] = (counts[val] || 0) + 1;
  }
  return counts;
}

function countGoals(data: Participant[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const row of data) {
    if (Array.isArray(row.goals)) {
      for (const g of row.goals) {
        counts[g] = (counts[g] || 0) + 1;
      }
    }
  }
  return counts;
}

// ── Status badge ───────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    confirmed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    attended: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${map[status] || "bg-white/5 text-gray-400 border-white/10"}`}>
      {status}
    </span>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;
  if (session !== "authenticated") redirect("/admin/login");

  const data = await getParticipants();
  const total = data.length;

  const byType = countBy(data, "participantType");
  const byExp = countBy(data, "salesExperience");
  const byGoal = countGoals(data);

  const TYPES = ["Mahasiswa", "Fresh Graduate", "Pencari Kerja", "Karyawan", "Wirausaha / UMKM", "Lainnya"];
  const EXPS = ["Belum pernah", "Pernah belajar", "Pernah praktik", "Sedang bekerja di bidang sales", "Memiliki usaha"];
  const GOALS = ["Memahami dasar sales", "Persiapan masuk dunia kerja", "Meningkatkan kemampuan penjualan", "Belajar dari pengalaman praktisi", "Mengembangkan usaha", "Lainnya"];

  return (
    <div className="min-h-screen bg-[#0C0D0F] text-white">
      {/* Top Bar */}
      <header className="border-b border-white/[0.07] bg-[#0C0D0F]/95 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Admin</span>
            <span className="text-white/20">·</span>
            <span className="font-display font-bold text-sm text-white">Sales Ready!</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/admin/export"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 font-mono text-xs font-semibold transition-colors"
            >
              ↓ Download CSV
            </a>
            <form action={logoutAdmin}>
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/20 font-mono text-xs transition-colors"
              >
                Keluar
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">Daftar Peserta</h1>
          <p className="text-xs text-gray-500 font-mono mt-0.5">Data real-time dari database Neon PostgreSQL</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatCard label="Total Pendaftar" value={total} sub="orang terdaftar" />
          <StatCard label="Menunggu Konfirmasi" value={data.filter(d => d.registrationStatus === "pending").length} />
          <StatCard label="Dikonfirmasi" value={data.filter(d => d.registrationStatus === "confirmed").length} />
          <StatCard label="Hadir" value={data.filter(d => d.registrationStatus === "attended").length} />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Status */}
          <div className="bg-[#131519] border border-white/[0.07] rounded-xl p-6 space-y-4">
            <h2 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">Status Peserta</h2>
            <div className="space-y-3">
              {TYPES.map(t => (
                <BarRow key={t} label={t} count={byType[t] || 0} total={total} />
              ))}
            </div>
          </div>

          {/* Pengalaman */}
          <div className="bg-[#131519] border border-white/[0.07] rounded-xl p-6 space-y-4">
            <h2 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">Pengalaman Sales</h2>
            <div className="space-y-3">
              {EXPS.map(e => (
                <BarRow key={e} label={e} count={byExp[e] || 0} total={total} />
              ))}
            </div>
          </div>

          {/* Tujuan */}
          <div className="bg-[#131519] border border-white/[0.07] rounded-xl p-6 space-y-4">
            <h2 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">Materi Dibutuhkan</h2>
            <div className="space-y-3">
              {GOALS.map(g => (
                <BarRow key={g} label={g} count={byGoal[g] || 0} total={total} />
              ))}
            </div>
          </div>
        </div>

        {/* Participants Table */}
        <div className="bg-[#131519] border border-white/[0.07] rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/[0.07] flex items-center justify-between">
            <h2 className="text-sm font-display font-bold text-white">Tabel Peserta</h2>
            <span className="text-xs font-mono text-gray-500">{total} entri</span>
          </div>

          {total === 0 ? (
            <div className="py-16 text-center">
              <p className="text-gray-600 font-mono text-sm">Belum ada peserta yang mendaftar.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/[0.07]">
                    {["#", "Nama", "WhatsApp", "Domisili", "Status", "Pengalaman", "Tujuan", "Pertanyaan", "Daftar", "Status Reg"].map(h => (
                      <th key={h} className="px-4 py-3 text-left font-mono text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((p, i) => (
                    <tr key={p.id} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                      <td className="px-4 py-3 font-mono text-gray-600">{i + 1}</td>
                      <td className="px-4 py-3 text-white font-medium whitespace-nowrap">{p.name}</td>
                      <td className="px-4 py-3 font-mono text-emerald-400 whitespace-nowrap">{p.whatsapp}</td>
                      <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{p.domicile}</td>
                      <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{p.participantType}</td>
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap max-w-[140px] truncate">{p.salesExperience}</td>
                      <td className="px-4 py-3 text-gray-400 max-w-[160px]">
                        <span className="line-clamp-2">{Array.isArray(p.goals) ? p.goals.join(", ") : ""}</span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 max-w-[200px]">
                        <span className="line-clamp-2">{p.question || "—"}</span>
                      </td>
                      <td className="px-4 py-3 font-mono text-gray-600 whitespace-nowrap">
                        {new Date(p.createdAt).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={p.registrationStatus} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
