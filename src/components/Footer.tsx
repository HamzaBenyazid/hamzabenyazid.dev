import profile from "@/data/profile.json";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border-subtle">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-text-muted">
          &copy; {year}{" "}
          <span className="text-neon-cyan">{profile.name}</span>. Built with
          Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          <p className="text-xs font-mono text-text-muted">{profile.email}</p>
        </div>
      </div>
    </footer>
  );
}
