import Link from "next/link";
import profile from "@/data/profile.json";
import social from "@/data/social.json";
import { SocialLink } from "@/types";
import SocialIcon from "@/components/SocialIcon";
import MobileMenu from "@/components/MobileMenu";

const socialLinks = social as SocialLink[];

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <nav className="glass rounded-2xl px-6 h-14 flex items-center justify-between glow-cyan">
        <Link
          href="/"
          className="font-mono text-sm font-bold text-neon-cyan tracking-wider hover:glow-text-cyan transition-all"
        >
          &lt;{profile.name.split(" ")[0].toLowerCase()} /&gt;
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden sm:flex items-center gap-1 text-xs font-mono">
            {["about", "experience", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="px-3 py-1.5 rounded-lg text-text-secondary hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all"
              >
                .{item}()
              </a>
            ))}
          </div>

          <div className="w-px h-5 bg-border-subtle hidden sm:block" />

          <div className="flex items-center gap-2">
            {socialLinks.slice(0, 2).map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="p-1.5 rounded-lg text-text-secondary hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all"
              >
                <SocialIcon icon={link.icon} />
              </a>
            ))}
          </div>

          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
