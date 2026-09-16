"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0C0D0F]/90 backdrop-blur-md border-b border-white/[0.07] py-1.5"
          : "bg-transparent py-2.5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="group flex items-center">
          <Image
            src="/images/logo.webp"
            alt="Sales Ready! — Ngobrol Bareng Praktisi"
            width={160}
            height={48}
            className="h-16 w-auto object-contain brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-body font-medium text-gray-400">
          <a href="#tentang" className="hover:text-white transition-colors duration-150">
            Untuk Siapa
          </a>
          <a href="#agenda" className="hover:text-white transition-colors duration-150">
            Materi
          </a>
          <a href="#praktisi" className="hover:text-white transition-colors duration-150">
            Tentang Pak Dito
          </a>
          <a href="#lokasi" className="hover:text-white transition-colors duration-150">
            Jadwal &amp; Lokasi
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/daftar"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-mono font-semibold tracking-wider uppercase transition-colors"
          >
            Daftar Sesi
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#131519] border-b border-white/[0.07] px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-body font-medium">
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white py-1 transition-colors"
            >
              Untuk Siapa
            </a>
            <a
              href="#agenda"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white py-1 transition-colors"
            >
              Materi
            </a>
            <a
              href="#praktisi"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white py-1 transition-colors"
            >
              Tentang Pak Dito
            </a>
            <a
              href="#lokasi"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white py-1 transition-colors"
            >
              Jadwal &amp; Lokasi
            </a>
          </nav>
          <div className="pt-3 border-t border-white/[0.07]">
            <Link
              href="/daftar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-mono font-semibold tracking-wider uppercase transition-all"
            >
              Daftar Sekarang
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
