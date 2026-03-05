import profile from "@/data/profile.json";

const skills = [
  { name: "TypeScript", color: "text-neon-cyan" },
  { name: "React", color: "text-neon-cyan" },
  { name: "Next.js", color: "text-neon-purple" },
  { name: "Node.js", color: "text-neon-cyan" },
  { name: "Python", color: "text-neon-pink" },
  { name: "Docker", color: "text-neon-purple" },
  { name: "AWS", color: "text-neon-pink" },
  { name: "PostgreSQL", color: "text-neon-cyan" },
];

const stats = [
  { label: "Years of Experience", value: "3+", icon: "⚡" },
  { label: "Projects Completed", value: "20+", icon: "🚀" },
  { label: "Open Source Contributions", value: "50+", icon: "💎" },
  { label: "Technologies", value: "15+", icon: "🔧" },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="font-mono text-xs text-neon-cyan mb-2">
            // 01. about
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded" />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Bio - takes 2 columns */}
          <div className="md:col-span-2 glass rounded-2xl p-8 gradient-border">
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              {profile.bio}
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              I&apos;m based in{" "}
              <span className="text-neon-cyan font-medium">
                📍 {profile.location}
              </span>
              . When I&apos;m not coding, I enjoy exploring new technologies,
              contributing to open source, and continuously learning.
            </p>
          </div>

          {/* Status card */}
          <div className="glass rounded-2xl p-8 gradient-border flex flex-col justify-center items-center text-center">
            <div className="relative mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center border border-neon-cyan/20">
                <span className="text-3xl">👨‍💻</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-surface-raised border-2 border-neon-cyan flex items-center justify-center">
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-neon-cyan" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan" />
                </span>
              </div>
            </div>
            <div className="text-text-primary font-semibold">{profile.name}</div>
            <div className="text-neon-purple text-sm font-mono">{profile.title}</div>
          </div>

          {/* Stats row */}
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 gradient-border group hover:glow-cyan transition-all"
            >
              <div className="text-2xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}

          {/* Skills card - custom layout */}
          <div className="md:col-span-3 glass rounded-2xl p-8 gradient-border">
            <div className="font-mono text-xs text-text-muted mb-4">
              tech_stack.map()
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-4 py-2 rounded-xl bg-surface-raised border border-border-subtle ${skill.color} text-sm font-mono font-medium hover:border-neon-cyan/30 hover:glow-cyan transition-all cursor-default`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
