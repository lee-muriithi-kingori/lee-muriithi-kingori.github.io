import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lee Muriithi Kingori — Lestramk",
  description:
    "Founder of Lestramk. Self-taught engineer building operating systems, cyber-tech AI, and Android root-hiding modules. BSc Nursing, pursuing anaesthesia. Nairobi, Kenya.",
  keywords: [
    "Lee Muriithi Kingori",
    "Lestramk",
    "lestramk.org",
    "LestraOS",
    "Rox",
    "aamt",
    "browser automation",
    "cyber security",
    "Android root",
    "Zygisk",
    "Magisk",
    "operating systems",
    "Nairobi",
    "Kenya",
  ],
  authors: [{ name: "Lee Muriithi Kingori", url: "https://lestramk.org" }],
  creator: "Lee Muriithi Kingori",
  metadataBase: new URL("https://lestramk.org"),
  alternates: { canonical: "https://lestramk.org" },
  openGraph: {
    title: "Lee Muriithi Kingori — Lestramk",
    description:
      "Founder of Lestramk. Operating systems, cyber-tech AI, Android root-hiding. BSc Nursing, pursuing anaesthesia. Nairobi.",
    url: "https://lestramk.org",
    siteName: "Lestramk",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lee Muriithi Kingori — Lestramk",
    description:
      "Founder of Lestramk. Operating systems, cyber-tech AI, Android root-hiding. Nairobi.",
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='4' fill='%230a0908'/%3E%3Ctext x='16' y='22' text-anchor='middle' font-family='Georgia,serif' font-style='italic' font-size='18' fill='%23f2ede2'%3EL%3C/text%3E%3Crect x='6' y='6' width='3' height='3' fill='%23c5302b'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0a0908",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
