"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import GlassCard from "@/components/shared/GlassCard";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { education, certifications } from "@/lib/constants";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const iconMap = {
  degree: GraduationCap,
  program: BookOpen,
  certificate: Award,
};

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <SectionHeading title="Education" subtitle="Academic Background" />

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-silver/15 to-transparent" />

          <div className="space-y-10">
            {education.map((entry, index) => {
              const Icon = iconMap[entry.type];

              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="flex gap-6 relative">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center z-10">
                      <Icon className="w-4 h-4 text-titanium" />
                    </div>

                    {/* Card */}
                    <GlassCard className="flex-1" padding="lg">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-light text-platinum">
                            {entry.program}
                          </h3>
                          <p className="text-sm text-silver/70 mt-1">
                            {entry.institution}
                          </p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <span className="text-xs font-mono text-titanium/60 tracking-wider">
                            {entry.period}
                          </span>
                          {entry.location && (
                            <span className="text-xs font-mono text-titanium/40">
                              {entry.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {entry.details.length > 0 && (
                        <ul className="space-y-2 mt-4">
                          {entry.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-sm text-silver/60 font-light leading-relaxed"
                            >
                              <span className="w-1 h-1 rounded-full bg-silver/30 mt-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </GlassCard>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <ScrollReveal delay={0.3} className="mt-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-silver/40" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-titanium">
              Certifications & Courses
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-xs font-light text-silver/60 bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:bg-white/[0.05] hover:text-silver/80 hover:border-white/[0.1]"
              >
                {cert}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
