import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { UntukSiapa } from "@/components/untuk-siapa";
import { Agenda } from "@/components/agenda";
import { Speaker } from "@/components/speaker";
import { LocationSection } from "@/components/location-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0C0D0F] text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <UntukSiapa />
        <Agenda />
        <Speaker />
        <LocationSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
