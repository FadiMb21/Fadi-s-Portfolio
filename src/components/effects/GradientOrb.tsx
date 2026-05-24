"use client";

import { motion } from "framer-motion";

interface GradientOrbProps {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}

export default function GradientOrb({
  className,
  size = 400,
  color = "rgba(160, 160, 160, 0.06)",
  delay = 0,
}: GradientOrbProps) {
  return (
    <motion.div
      className={className}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        borderRadius: "50%",
        position: "absolute",
        pointerEvents: "none",
        willChange: "transform",
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -20, 30, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      aria-hidden="true"
    />
  );
}
