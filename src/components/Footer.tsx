import profile from "@/data/profile.json";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {year} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {profile.email}
        </p>
      </div>
    </footer>
  );
}
