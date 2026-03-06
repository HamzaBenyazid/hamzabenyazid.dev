import Image from "next/image";
import projects from "@/data/projects.json";
import { Project } from "@/types";
import { HiFolderOpen, HiStar, HiClock } from "react-icons/hi2";

const projectList = projects as Project[];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-xs text-neon-cyan mb-2">
            // 03. projects
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projectList.map((project, index) => (
            <div
              key={project.id}
              className={`group glass rounded-2xl overflow-hidden gradient-border hover:glow-purple transition-all animate-fade-in-up ${
                project.featured ? "md:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card header accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center text-neon-purple overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={40}
                          height={40}
                          className="object-contain w-full h-full"
                        />
                      ) : (
                        <HiFolderOpen className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-neon-cyan transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-neon-pink">
                          <HiStar className="w-3 h-3" /> featured
                        </span>
                      )}
                      {project.comingSoon && (
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-neon-cyan whitespace-normal">
                          <HiClock className="w-3 h-3 shrink-0" /> coming soon to open-source
                        </span>
                      )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-text-muted hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all"
                        aria-label="View source code"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-text-muted hover:text-neon-pink hover:bg-neon-pink/5 transition-all"
                        aria-label="View live demo"
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.badges && project.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.badges.map((badge) => (
                      <a
                        key={badge.label}
                        href={badge.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={badge.label}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={badge.imageUrl} alt={badge.label} height={20} />
                      </a>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-surface-raised border border-border-subtle text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/HamzaBenyazid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neon-cyan/30 text-neon-cyan font-mono text-sm hover:bg-neon-cyan/5 hover:border-neon-cyan/50 hover:glow-cyan transition-all"
          >
            explore more on GitHub
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
