import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fadi Moghrabi — Data Analyst · AI Developer · Security Studies",
  description:
    "Portfolio of Fadi Moghrabi — Data Analyst, AI Application Developer, and Government & Security Studies specialist. Expertise in Python, SQL, BigQuery, Machine Learning, and predictive analytics.",
  keywords: [
    "Fadi Moghrabi",
    "Data Analyst",
    "AI Developer",
    "Machine Learning",
    "Python",
    "SQL",
    "BigQuery",
    "Portfolio",
    "Security Studies",
    "Predictive Analytics",
  ],
  authors: [{ name: "Fadi Moghrabi" }],
  creator: "Fadi Moghrabi",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Fadi Moghrabi — Data Analyst · AI Developer",
    description:
      "Data analyst and AI application developer with a track record of turning raw data into measurable business outcomes.",
    siteName: "Fadi Moghrabi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fadi Moghrabi — Data Analyst · AI Developer",
    description:
      "Data analyst and AI application developer with a track record of turning raw data into measurable business outcomes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
