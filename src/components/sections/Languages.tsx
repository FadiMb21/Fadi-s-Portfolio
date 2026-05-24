"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import GlassCard from "@/components/shared/GlassCard";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { languages } from "@/lib/constants";

export default function Languages() {
  return (
    <section className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <SectionHeading title="Languages" subtitle="Communication" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {languages.map((lang, index) => (
            <ScrollReveal key={lang.name} delay={index * 0.1}>
              <GlassCard className="text-center" padding="lg">
                {/* Proficiency Ring */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg
                    viewBox="0 0 80 80"
                    className="w-full h-full -rotate-90"
                  >
                    {/* Background ring */}
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      fill="none"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="2"
                    />
                    {/* Progress ring */}
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      fill="none"
                      stroke="rgba(200,200,200,0.25)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={`${(lang.proficiency / 100) * 213.6} 213.6`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-mono text-titanium">
                      {lang.proficiency}%
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-light text-platinum mb-1">
                  {lang.name}
                </h3>
                <p className="text-[11px] font-mono text-titanium/60 tracking-wider uppercase">
                  {lang.level}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
