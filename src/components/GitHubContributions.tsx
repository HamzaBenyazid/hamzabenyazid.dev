interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionData {
  total: Record<string, number>;
  contributions: Contribution[];
}

async function getContributions(username: string): Promise<ContributionData> {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch contributions");
  return res.json();
}

/** Groups a flat list of contributions into weeks (columns), padding the first
 *  week so it starts on Sunday (index 0). */
function groupIntoWeeks(contributions: Contribution[]): (Contribution | null)[][] {
  if (contributions.length === 0) return [];

  const weeks: (Contribution | null)[][] = [];
  const firstDayOfWeek = new Date(contributions[0].date + "T00:00:00").getDay();
  let currentWeek: (Contribution | null)[] = Array(firstDayOfWeek).fill(null);

  for (const contrib of contributions) {
    currentWeek.push(contrib);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) currentWeek.push(null);
    weeks.push(currentWeek);
  }

  return weeks;
}

const LEVEL_CLASSES: Record<number, string> = {
  0: "bg-surface-raised border border-white/5",
  1: "bg-neon-cyan/15 border border-neon-cyan/25",
  2: "bg-neon-cyan/35 border border-neon-cyan/45",
  3: "bg-neon-cyan/65 border border-neon-cyan/70 shadow-[0_0_5px_rgba(103,232,249,0.45)]",
  4: "bg-neon-cyan border border-neon-cyan shadow-[0_0_8px_rgba(103,232,249,0.9),0_0_20px_rgba(103,232,249,0.4)]",
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default async function GitHubContributions({
  username,
}: {
  username: string;
}) {
  let data: ContributionData;

  try {
    data = await getContributions(username);
  } catch {
    return null;
  }

  const weeks = groupIntoWeeks(data.contributions);

  const totalContributions = Object.values(data.total).reduce(
    (sum, n) => sum + n,
    0
  );

  // Build month label positions: for each week index, record the month label
  // to show if the month changed from the previous visible week.
  const monthLabels: (string | null)[] = [];
  let lastMonth = -1;

  for (const week of weeks) {
    const firstReal = week.find((d) => d !== null);
    if (firstReal) {
      const month = new Date(firstReal.date + "T00:00:00").getMonth();
      if (month !== lastMonth) {
        monthLabels.push(MONTHS[month]);
        lastMonth = month;
      } else {
        monthLabels.push(null);
      }
    } else {
      monthLabels.push(null);
    }
  }

  return (
    <section id="contributions" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="font-mono text-xs text-neon-cyan mb-2">
            // 05. contributions
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            GitHub Activity
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded" />
        </div>

        <div className="glass rounded-2xl p-6 md:p-8 gradient-border">
          {/* Header row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <p className="font-mono text-sm text-text-muted">
              <span className="text-neon-cyan font-semibold glow-text-cyan">
                {totalContributions.toLocaleString()}
              </span>{" "}
              contributions in the last year
            </p>

            {/* Legend */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-text-muted">Less</span>
              {([0, 1, 2, 3, 4] as const).map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${LEVEL_CLASSES[level]}`}
                />
              ))}
              <span className="text-[11px] font-mono text-text-muted">More</span>
            </div>
          </div>

          {/* Grid */}
          <div className="overflow-x-auto pb-1">
            <div className="inline-flex gap-[3px]">
              {/* Day-of-week labels column */}
              <div className="flex flex-col gap-[3px] mr-1 shrink-0">
                {/* Spacer for month label row */}
                <div className="h-4" />
                {DAY_LABELS.map((label, i) => (
                  <div
                    key={label}
                    className="h-[11px] flex items-center"
                    aria-hidden={i % 2 === 0}
                  >
                    <span
                      className={`text-[9px] font-mono text-text-muted w-6 leading-none ${
                        i % 2 === 0 ? "invisible" : ""
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contribution week columns */}
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px] shrink-0">
                  {/* Month label */}
                  <div className="h-4 flex items-end">
                    {monthLabels[wi] && (
                      <span className="text-[9px] font-mono text-neon-purple/70 leading-none whitespace-nowrap">
                        {monthLabels[wi]}
                      </span>
                    )}
                  </div>

                  {/* Day cells */}
                  {week.map((day, di) => (
                    <div
                      key={di}
                      title={
                        day
                          ? `${day.date} — ${day.count} contribution${day.count !== 1 ? "s" : ""}`
                          : undefined
                      }
                      className={`w-[11px] h-[11px] rounded-[2px] transition-transform duration-100 hover:scale-[1.4] ${
                        day === null
                          ? "invisible"
                          : LEVEL_CLASSES[day.level]
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Footer link */}
          <div className="mt-5 flex justify-end">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted hover:text-neon-cyan transition-colors duration-200 link-underline"
            >
              github.com/{username} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
