"use client";

import ScrollReveal from "@/components/effects/ScrollReveal";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import GlassCard from "@/components/shared/GlassCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { aboutText, aboutStats } from "@/lib/constants";

export default function About() {
  // Split the bio at the em dash after "ground up."
  const splitIndex = aboutText.indexOf("ground up.") + "ground up.".length;
  const paragraphs = [
    aboutText.slice(0, splitIndex).trim(),
    aboutText.slice(splitIndex).trim(),
  ].filter(Boolean);

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="About" subtitle="Who I Am" />

        <div className="flex flex-col lg:flex-row gap-16">
          {/* ── Bio Text ── */}
          <div className="lg:w-3/5">
            <div className="max-w-prose space-y-6">
              {paragraphs.map((paragraph, i) => (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <p className="text-base lg:text-lg text-silver/80 font-light leading-relaxed">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ── Vertical Separator ── */}
          <div className="hidden lg:block">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-silver/10 to-transparent" />
          </div>

          {/* ── Stat Cards ── */}
          <div className="lg:w-2/5">
            <div className="grid grid-cols-2 gap-4">
              {aboutStats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={(i + 1) * 0.1}>
                  <GlassCard padding="md" hover className="text-center">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="text-3xl lg:text-4xl font-light gradient-text"
                    />
                    <p className="mt-2 text-xs text-titanium uppercase tracking-wider font-mono">
                      {stat.label}
                    </p>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
