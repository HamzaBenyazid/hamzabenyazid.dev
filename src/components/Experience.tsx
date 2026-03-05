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
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Experience
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded" />
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />

          <div className="space-y-8">
            {experienceList.map((exp) => (
              <div key={exp.id} className="flex gap-8">
                <div className="hidden sm:flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      exp.current
                        ? "border-blue-600 bg-blue-600"
                        : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
                    }`}
                  >
                    {exp.current && (
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    )}
                  </div>
                </div>

                <div className="flex-1 pb-8">
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            <span>{exp.company}</span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {formatDate(exp.startDate)} —{" "}
                          {formatDate(exp.endDate)}
                        </div>
                        <div className="text-sm text-gray-400 dark:text-gray-500">
                          {exp.location}
                        </div>
                        {exp.current && (
                          <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
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
