import profile from "@/data/profile.json";
import { HiEnvelope, HiInboxArrowDown, HiMapPin } from "react-icons/hi2";
import social from "@/data/social.json";
import { SocialLink } from "@/types";
import SocialIcon from "@/components/SocialIcon";

const socialLinks = social as SocialLink[];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-xs text-neon-cyan mb-2">
            // 04. contact
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            Get In Touch
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded" />
        </div>

        {/* Big CTA card */}
        <div className="glass rounded-2xl p-8 sm:p-12 gradient-border glow-purple text-center mb-8">
          <div className="mb-6 flex justify-center text-neon-purple"><HiInboxArrowDown className="w-14 h-14" /></div>
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              awesome
            </span>{" "}
            together
          </h3>
          <p className="text-text-secondary text-lg max-w-lg mx-auto mb-8 leading-relaxed">
            I&apos;m always open to new opportunities, interesting projects, or
            just a good conversation about technology.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-surface font-semibold text-lg hover:shadow-[0_0_40px_rgba(103,232,249,0.25)] transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Say Hello
          </a>
        </div>

        {/* Info + socials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Email card */}
          <a
            href={`mailto:${profile.email}`}
            className="glass rounded-2xl p-6 gradient-border group hover:glow-cyan transition-all"
          >
            <div className="mb-3 text-neon-cyan"><HiEnvelope className="w-7 h-7" /></div>
            <div className="font-mono text-xs text-text-muted mb-1 uppercase tracking-wider">
              Email
            </div>
            <div className="text-text-primary group-hover:text-neon-cyan transition-colors text-sm font-medium truncate">
              {profile.email}
            </div>
          </a>

          {/* Secondary email card */}
          {profile.secondaryEmail && (
            <a
              href={`mailto:${profile.secondaryEmail}`}
              className="glass rounded-2xl p-6 gradient-border group hover:glow-cyan transition-all"
            >
              <div className="mb-3 text-neon-cyan"><HiEnvelope className="w-7 h-7" /></div>
              <div className="font-mono text-xs text-text-muted mb-1 uppercase tracking-wider">
                Alt Email
              </div>
              <div className="text-text-primary group-hover:text-neon-cyan transition-colors text-sm font-medium truncate">
                {profile.secondaryEmail}
              </div>
            </a>
          )}

          {/* Location card */}
          <div className="glass rounded-2xl p-6 gradient-border">
            <div className="mb-3 text-neon-purple"><HiMapPin className="w-7 h-7" /></div>
            <div className="font-mono text-xs text-text-muted mb-1 uppercase tracking-wider">
              Location
            </div>
            <div className="text-text-primary text-sm font-medium">
              {profile.location}
            </div>
          </div>

          {/* Social links */}
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 gradient-border group hover:glow-cyan transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-raised border border-border-subtle flex items-center justify-center text-text-muted group-hover:text-neon-cyan group-hover:border-neon-cyan/20 transition-all mb-3">
                <SocialIcon icon={link.icon} />
              </div>
              <div className="font-mono text-xs text-text-muted mb-1 uppercase tracking-wider">
                {link.platform}
              </div>
              <div className="text-text-primary group-hover:text-neon-cyan transition-colors text-sm font-medium">
                {link.username}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
