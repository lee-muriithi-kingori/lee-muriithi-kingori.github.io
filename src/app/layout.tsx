import type { Metadata } from "next";
import { Unbounded, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
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
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23060a08'/%3E%3Ctext x='16' y='23' text-anchor='middle' font-family='Arial,sans-serif' font-weight='900' font-size='17' fill='%233df5a6'%3EL%3C/text%3E%3Ccircle cx='25' cy='7' r='3' fill='%23ff3e86'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#060a08",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${unbounded.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
