"use client";

import ScrollReveal from "@/components/effects/ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={cn("mb-16", className)}>
      <div
        className={cn(
          "flex flex-col gap-4",
          align === "center" && "items-center text-center"
        )}
      >
        <div className="flex items-center gap-4">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-silver/40" />
          {subtitle && (
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-titanium">
              {subtitle}
            </span>
          )}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-platinum">
          {title}
        </h2>
        <div className="h-px w-16 bg-gradient-to-r from-silver/30 to-transparent" />
      </div>
    </ScrollReveal>
  );
}
