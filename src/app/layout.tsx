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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
