"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/shared/BrandIcons";

import ScrollReveal from "@/components/effects/ScrollReveal";
import GlassCard from "@/components/shared/GlassCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { projects, type Project } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

// ─── Project Card ───

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: Project;
  index: number;
  featured: boolean;
}) {
  return (
    <ScrollReveal delay={index * 0.12} direction="up">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn("group h-full", featured && "relative")}
      >
        {/* Gradient glow wrapper for featured cards */}
        {featured && (
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(135deg, rgba(200,200,200,0.12) 0%, rgba(160,160,160,0.06) 50%, rgba(138,138,138,0.10) 100%)",
            }}
          />
        )}

        <GlassCard
          padding="lg"
          hover
          className={cn(
            "relative h-full transition-shadow duration-500",
            "group-hover:shadow-[0_0_48px_rgba(200,200,200,0.06)]"
          )}
        >
          {/* Header */}
          <h3 className="text-xl lg:text-2xl font-light text-platinum">
            {project.title}
          </h3>
          <p className="text-sm text-titanium font-mono tracking-wide mt-1">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm text-silver/70 font-light leading-relaxed mt-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase text-titanium/80 bg-white/5 rounded-full border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Metrics */}
          <div className="flex gap-6 mt-6">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span className="text-2xl font-light gradient-text">
                  {metric.value}
                </span>
                <span className="text-[10px] font-mono uppercase text-titanium/60 tracking-wider mt-1">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/10 text-silver text-xs px-4 py-2 rounded-full hover:border-white/20 transition-colors duration-300"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/10 bg-white/5 text-silver text-xs px-4 py-2 rounded-full hover:border-white/20 hover:bg-white/8 transition-colors duration-300"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            ) : (
              <span className="text-[10px] font-mono text-titanium/40 tracking-wider uppercase">
                Coming Soon
              </span>
            )}
          </div>
        </GlassCard>
      </motion.div>
    </ScrollReveal>
  );
}

// ─── Projects Section ───

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Projects" subtitle="Featured Work" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Featured Projects — 2-column, larger cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                featured
              />
            ))}
          </div>

          {/* Regular Projects — 2-column, smaller cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {regularProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i + featuredProjects.length}
                featured={false}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
