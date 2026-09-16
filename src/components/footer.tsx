"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0C0D0F] border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center">
            <Image
              src="/images/logo.webp"
              alt="Sales Ready! — Ngobrol Bareng Praktisi"
              width={140}
              height={42}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-xs font-body text-gray-500">
            <a href="#tentang" className="hover:text-gray-300 transition-colors">Untuk Siapa</a>
            <a href="#agenda" className="hover:text-gray-300 transition-colors">Materi</a>
            <a href="#praktisi" className="hover:text-gray-300 transition-colors">Tentang Pak Dito</a>
          </nav>

          {/* CTA */}
          <Link
            href="/daftar"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/15 hover:border-emerald-500/40 font-mono font-medium text-xs tracking-wider uppercase transition-all"
          >
            Daftar Sesi
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] font-mono text-gray-700">
            © {new Date().getFullYear()} Sales Ready! — Dadan Satria. Hak Cipta Dilindungi.
          </p>
          <p className="text-[11px] font-mono text-gray-700">
            Dibangun dengan semangat belajar &amp; berbagi.
          </p>
        </div>
      </div>
    </footer>
  );
}
