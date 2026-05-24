import { personalInfo } from "@/lib/constants";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/BrandIcons";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-sm font-mono tracking-[0.15em] text-titanium/60">
              FM
            </span>
            <p className="text-xs text-titanium/40 font-light">
              &copy; {new Date().getFullYear()} Fadi Moghrabi. Built with
              precision.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.12]"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-3.5 h-3.5 text-titanium" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.12]"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-titanium" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.12]"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5 text-titanium" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
