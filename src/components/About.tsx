import profile from "@/data/profile.json";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {profile.bio}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I&apos;m based in{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                {profile.location}
              </span>
              . When I&apos;m not coding, I enjoy exploring new technologies,
              contributing to open source, and continuously learning.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "Docker",
                "AWS",
                "PostgreSQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Years of Experience", value: "3+" },
              { label: "Projects Completed", value: "20+" },
              { label: "Open Source Contributions", value: "50+" },
              { label: "Technologies", value: "15+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-center shadow-sm"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
