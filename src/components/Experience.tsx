import experiences from "@/data/experiences.json";
import { Experience } from "@/types";

const experienceList = experiences as Experience[];

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "Present";
  const parts = dateStr.split("-");
  if (parts.length < 2) return dateStr;
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  if (isNaN(year) || isNaN(month) || month < 1 || month > 12) return dateStr;
  const date = new Date(year, month - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-xs text-neon-cyan mb-2">
            // 02. experience
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            Experience
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/50 via-neon-purple/30 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experienceList.map((exp, index) => (
              <div
                key={exp.id}
                className="flex gap-6 sm:gap-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div
                    className={`relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      exp.current
                        ? "bg-neon-cyan/10 border border-neon-cyan/50 glow-cyan"
                        : "bg-surface-raised border border-border-subtle"
                    }`}
                  >
                    {exp.current ? (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-neon-cyan" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-cyan" />
                      </span>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-text-muted" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <div className="glass rounded-2xl p-6 gradient-border hover:glow-cyan transition-all group">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary group-hover:text-neon-cyan transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-neon-purple font-medium text-sm font-mono">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-underline"
                            >
                              @{exp.company}
                            </a>
                          ) : (
                            <span>@{exp.company}</span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono text-text-muted">
                          {formatDate(exp.startDate)} →{" "}
                          {formatDate(exp.endDate)}
                        </div>
                        <div className="text-xs text-text-muted">
                          📍 {exp.location}
                        </div>
                        {exp.current && (
                          <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-mono">
                            current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-surface-raised border border-border-subtle text-text-muted hover:text-neon-cyan hover:border-neon-cyan/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
