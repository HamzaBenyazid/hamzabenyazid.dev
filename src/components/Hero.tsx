import profile from "@/data/profile.json";
import social from "@/data/social.json";
import { SocialLink } from "@/types";
import SocialIcon from "@/components/SocialIcon";

const socialLinks = social as SocialLink[];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-10 relative"
    >
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        {/* Terminal-style card */}
        <div className="glass rounded-2xl overflow-hidden glow-cyan animate-fade-in-up">
          {/* Terminal top bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-xs font-mono text-text-muted ml-2">
              ~/hamza — portfolio.sh
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-8 sm:p-12 font-mono">
            <div className="mb-2 text-text-muted text-sm">
              <span className="text-neon-cyan">➜</span>{" "}
              <span className="text-neon-purple">~</span> cat intro.md
            </div>

            <div className="mb-8 pl-4 border-l-2 border-neon-cyan/20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/5 border border-neon-cyan/20 text-neon-cyan text-xs font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-neon-cyan" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan" />
                </span>
                Available for opportunities
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight">
                <span className="text-text-primary">Hi, I&apos;m </span>
                <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent glow-text-cyan">
                  {profile.name}
                </span>
                <span className="cursor-blink text-neon-cyan ml-1">_</span>
              </h1>

              <p className="text-xl sm:text-2xl text-neon-purple font-medium mb-4">
                {profile.title}
              </p>

              <p className="text-base text-text-secondary max-w-xl leading-relaxed font-sans">
                {profile.bio}
              </p>
            </div>

            <div className="mb-2 text-text-muted text-sm">
              <span className="text-neon-cyan">➜</span>{" "}
              <span className="text-neon-purple">~</span> ls actions/
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3 pl-4 mb-8">
              <a
                href="#projects"
                className="group relative px-6 py-2.5 rounded-xl font-sans text-sm font-medium bg-gradient-to-r from-neon-cyan to-neon-purple text-surface hover:shadow-[0_0_30px_rgba(103,232,249,0.25)] transition-all"
              >
                View My Work →
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-xl border border-neon-cyan/30 text-neon-cyan font-sans text-sm font-medium hover:bg-neon-cyan/5 hover:border-neon-cyan/50 transition-all"
              >
                Get In Touch
              </a>
            </div>

            <div className="mb-2 text-text-muted text-sm">
              <span className="text-neon-cyan">➜</span>{" "}
              <span className="text-neon-purple">~</span> ls socials/
            </div>

            <div className="flex items-center gap-3 pl-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="p-2.5 rounded-xl glass text-text-secondary hover:text-neon-cyan hover:glow-cyan transition-all"
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
