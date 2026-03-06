import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://hamzabenyazid.dev";
const title = "Hamza Benyazid | Software Engineer";
const description =
  "Personal website of Hamza Benyazid — Software Engineer on the JDK team at Oracle. Creator of Live Variables (Obsidian plugin). Explore my work, experience, and projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Hamza Benyazid",
    "Software Engineer",
    "JDK",
    "Oracle",
    "Java",
    "Obsidian plugin",
    "Live Variables",
    "CrystalFlow",
    "portfolio",
    "Morocco",
  ],
  authors: [{ name: "Hamza Benyazid", url: siteUrl }],
  creator: "Hamza Benyazid",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "hamzabenyazid.dev",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/me.jpg",
        width: 800,
        height: 800,
        alt: "Hamza Benyazid — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/me.jpg"],
    creator: "@hamzabenyazid",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hamza Benyazid",
  url: siteUrl,
  image: `${siteUrl}/me.jpg`,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "Oracle" },
  description:
    "Software Engineer on the JDK team at Oracle. Creator of Live Variables — a popular Obsidian plugin. Currently building CrystalFlow.",
  address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
  email: "contact@hamzabenyazid.dev",
  sameAs: [
    "https://github.com/HamzaBenyazid",
    "https://www.linkedin.com/in/hamza-benyazid/",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#0d1117] text-[#e6edf3] selection:bg-neon-cyan/20 selection:text-neon-cyan">
        {children}
      </body>
    </html>
  );
}
