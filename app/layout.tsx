import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

// Optimize font loading by specifying only the subsets and display type needed
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap", // Use swap to prevent layout shifts
  preload: true,
  weight: ["400", "500", "600"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhuluimendestiny.com"),
  title: {
    default:
      "Abhuluimen Destiny | Full Stack Web & Mobile Developer | AI Integration",
    template: "%s | Abhuluimen Destiny",
  },
  description:
    "Full Stack Web & Mobile Developer specializing in Next.js, React, React Native, and AI integration. Expert in building high-performance websites & mobile apps with modern technologies.",
  keywords: [
    "Next.js Developer",
    "React Developer",
    "React Native Developer",
    "AI Integration",
    "Full Stack Developer",
    "Web Development",
    "Mobile App Development",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Software Engineer",
    "Performance Optimization",
    "Abhuluimen Destiny",
  ],
  authors: [{ name: "Abhuluimen Destiny" }],
  creator: "Abhuluimen Destiny",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhuluimendestiny.com",
    siteName: "Abhuluimen Destiny Portfolio",
    title: "Abhuluimen Destiny | Full Stack Web & Mobile Developer",
    description:
      "Full Stack Web & Mobile Developer specializing in Next.js, React, React Native, and AI Integration. Building scalable, high-performance apps.",
    images: [
      {
        url: "/imgs/website.webp",
        width: 1200,
        height: 630,
        alt: "Abhuluimen Destiny - Full Stack Web & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhuluimen Destiny | Full Stack Web & Mobile Developer",
    description:
      "Full Stack Web & Mobile Developer specializing in Next.js, React, React Native, and AI Integration.",
    images: ["/imgs/website.webp"],
    creator: "@abhuluimendestiny", // update if you have Twitter/X handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://abhuluimendestiny.com",
  },
  icons: {
    icon: "/imgs/logo.webp",
    apple: "/imgs/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <head />
      <body className={`${firaCode.className} ${firaCode.variable}`}>
        {children}
      </body>
    </html>
  );
}
