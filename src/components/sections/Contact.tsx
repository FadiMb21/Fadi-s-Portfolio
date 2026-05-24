"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import GlassCard from "@/components/shared/GlassCard";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { personalInfo } from "@/lib/constants";
import { Mail, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/BrandIcons";

const contactLinks = [
  {
    icon: Mail,
    brandIcon: null,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: null,
    brandIcon: LinkedInIcon,
    label: "LinkedIn",
    value: "fadi-moghrabi",
    href: personalInfo.linkedin,
  },
  {
    icon: null,
    brandIcon: GitHubIcon,
    label: "GitHub",
    value: "FadiMb21",
    href: personalInfo.github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <SectionHeading
          title="Contact"
          subtitle="Get in Touch"
          align="center"
        />

        <ScrollReveal>
          <GlassCard className="relative overflow-hidden" padding="lg">
            {/* Ambient glow behind card */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-silver/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center">
              <h3 className="text-2xl lg:text-3xl font-light text-platinum mb-3">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-silver/60 font-light max-w-md mx-auto mb-10 leading-relaxed">
                Open to opportunities in data analytics, AI development, and
                intelligence-driven roles. Let&apos;s explore how we can create
                impact together.
              </p>

              <div className="space-y-4">
                {contactLinks.map((link) => {
                  const IconComponent = link.icon;
                  const BrandIconComponent = link.brandIcon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.label !== "Email" ? "_blank" : undefined}
                      rel={
                        link.label !== "Email"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.1]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center">
                          {IconComponent && (
                            <IconComponent className="w-4 h-4 text-titanium group-hover:text-silver transition-colors" />
                          )}
                          {BrandIconComponent && (
                            <BrandIconComponent className="w-4 h-4 text-titanium group-hover:text-silver transition-colors" />
                          )}
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-mono text-titanium/60 tracking-wider uppercase">
                            {link.label}
                          </p>
                          <p className="text-sm text-silver/80 font-light mt-0.5">
                            {link.value}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-titanium/40 group-hover:text-silver/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
