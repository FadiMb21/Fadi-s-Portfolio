"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export default function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="fixed pointer-events-none z-[1] hidden lg:block"
      style={{
        left: x - 200,
        top: y - 200,
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(200, 200, 200, 0.04) 0%, transparent 70%)",
        borderRadius: "50%",
        transition: "left 0.3s ease-out, top 0.3s ease-out",
        willChange: "left, top",
      }}
      aria-hidden="true"
    />
  );
}
