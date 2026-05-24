"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingMap = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function GlassCard({
  children,
  className,
  hover = true,
  padding = "md",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "bg-[var(--glass-bg)] backdrop-blur-xl",
        "border border-[var(--glass-border)]",
        "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
        hover &&
          "hover:bg-[var(--glass-hover)] hover:border-[var(--glass-glow)] hover:shadow-[var(--shadow-glow)]",
        paddingMap[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
