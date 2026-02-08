import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talat Faheem - Cloud Eng",
  description: "A high-performance portfolio for Cloud/DevOps Engineer Talat Faheem",
  icons: {
    icon: "/icon.png",
  },
};

import { SmoothScroll } from "@/components/providers/SmoothScroll";

// ... (imports remain)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased selection:bg-emerald-500/30 selection:text-emerald-500`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
