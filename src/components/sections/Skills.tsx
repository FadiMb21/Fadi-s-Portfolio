"use client";

import { motion } from "framer-motion";
import { Brain, Database, BarChart3, Code, Search } from "lucide-react";
import { useMemo, type ReactNode } from "react";

import ScrollReveal from "@/components/effects/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { skillCategories } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";

// ─── Category Icon Mapping ───

const categoryIcons: Record<string, ReactNode> = {
  "AI & Machine Learning": <Brain className="w-3.5 h-3.5" />,
  "Data Analytics": <Database className="w-3.5 h-3.5" />,
  Visualization: <BarChart3 className="w-3.5 h-3.5" />,
  Development: <Code className="w-3.5 h-3.5" />,
  "Research & Strategy": <Search className="w-3.5 h-3.5" />,
};

// ─── Skill Capsule ───

function SkillCapsule({
  skill,
  animationDelay,
}: {
  skill: string;
  animationDelay: number;
}) {
  return (
    <span
      className="px-4 py-2 rounded-full text-sm font-light text-silver/80 bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm cursor-default transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.12] hover:text-platinum hover:scale-[1.03]"
      style={{
        animation: "float 6s ease-in-out infinite",
        animationDelay: `${animationDelay}s`,
      }}
    >
      {skill}
    </span>
  );
}

// ─── Category Block ───

function CategoryBlock({
  name,
  skills,
  index,
  delays,
}: {
  name: string;
  skills: string[];
  index: number;
  delays: number[];
}) {
  const icon = categoryIcons[name] ?? <Code className="w-3.5 h-3.5" />;

  return (
    <ScrollReveal delay={index * 0.1} direction="up">
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-2.5 mb-4 text-titanium/70">
          {icon}
          <h3 className="text-sm font-mono tracking-[0.15em] uppercase">
            {name}
          </h3>
        </div>

        {/* Skill Capsules */}
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill, i) => (
            <SkillCapsule
              key={skill}
              skill={skill}
              animationDelay={delays[i]}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

// ─── Skills Section ───

export default function Skills() {
  // Deterministic delays based on index — avoids hydration mismatch from Math.random()
  const delayMap = useMemo(() => {
    const golden = 1.618033988749;
    return skillCategories.map((cat, ci) =>
      cat.skills.map((_, si) =>
        Math.round(((((ci * 7 + si * 3) * golden) % 1) * 200)) / 100
      )
    );
  }, []);

  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Skills" subtitle="Technical Expertise" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-12"
        >
          {skillCategories.map((category, i) => (
            <CategoryBlock
              key={category.name}
              name={category.name}
              skills={category.skills}
              index={i}
              delays={delayMap[i]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
