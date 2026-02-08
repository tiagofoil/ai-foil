import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Foil | Professional Cyberpunk Developer Tools",
  description: "Next-gen AI tools for the modern developer landscape.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          plusJakarta.variable,
          inter.variable,
          jetbrains.variable,
          "antialiased bg-slate-950 text-slate-50 font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
