import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hamza Benyazid | Software Engineer",
  description:
    "Personal website of Hamza Benyazid — Software Engineer. Explore my work, experience, and projects.",
  openGraph: {
    title: "Hamza Benyazid | Software Engineer",
    description:
      "Personal website of Hamza Benyazid — Software Engineer. Explore my work, experience, and projects.",
    url: "https://hamzabenyazid.dev",
    siteName: "hamzabenyazid.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0d1117] text-[#e6edf3] selection:bg-neon-cyan/20 selection:text-neon-cyan">
        {children}
      </body>
    </html>
  );
}
