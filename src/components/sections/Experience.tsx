"use client";

import ScrollReveal from "@/components/effects/ScrollReveal";
import GlassCard from "@/components/shared/GlassCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { experiences } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MapPin, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Experience" subtitle="Career Journey" />

        {/* Timeline wrapper */}
        <div className="relative">
          {/* ── Central timeline line ── */}
          <div
            className={cn(
              "absolute top-0 bottom-0 w-px",
              "left-4 lg:left-1/2 lg:-translate-x-px",
              "bg-gradient-to-b from-transparent via-silver/15 to-transparent"
            )}
          />

          {/* ── Entries ── */}
          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;

              return (
                <div key={`${exp.company}-${i}`} className="relative">
                  {/* ── Timeline dot ── */}
                  <div
                    className={cn(
                      "absolute top-8 z-10",
                      "left-4 lg:left-1/2",
                      "-translate-x-1/2",
                      "w-3 h-3 rounded-full",
                      "bg-silver/30 border border-silver/20",
                      "transition-all duration-500",
                      "hover:bg-silver/60 hover:border-silver/40 hover:shadow-[0_0_12px_rgba(160,160,160,0.3)]"
                    )}
                  />

                  {/* ── Card row ── */}
                  <div
                    className={cn(
                      "flex",
                      "pl-12 lg:pl-0",
                      // Desktop alternation
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    )}
                  >
                    {/* Card side */}
                    <div className="w-full lg:w-[calc(50%-2rem)]">
                      <ScrollReveal
                        direction={isEven ? "left" : "right"}
                        delay={0.1}
                      >
                        <GlassCard padding="lg" hover>
                          {/* Header */}
                          <h3 className="text-lg font-light text-platinum">
                            {exp.company}
                          </h3>
                          <p className="mt-1 text-sm text-silver">
                            {exp.role}
                          </p>

                          {/* Period & Location */}
                          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-mono text-titanium/60">
                            <span className="inline-flex items-center gap-1.5">
                              <Calendar className="h-3 w-3" />
                              {exp.period}
                            </span>
                            {exp.location && (
                              <span className="inline-flex items-center gap-1.5">
                                <MapPin className="h-3 w-3" />
                                {exp.location}
                              </span>
                            )}
                          </div>

                          {/* Tags */}
                          <div className="mt-4 flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono tracking-wider uppercase text-titanium/70 bg-white/5 rounded-full border border-white/5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Description bullets */}
                          <ul className="mt-5 space-y-2.5">
                            {exp.description.map((bullet, j) => (
                              <li key={j} className="flex gap-3">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-silver/40" />
                                <span className="text-sm text-silver/60 font-light leading-relaxed">
                                  {bullet}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </GlassCard>
                      </ScrollReveal>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />

                    {/* Gap between card and center line */}
                    <div className="hidden lg:block lg:w-16" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
