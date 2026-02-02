import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Disciplock - Lock Your Distractions. Unlock Your Focus.",
  description: "A focus and accountability app that lets you set limits on distracting apps and complete spiritual, meditative, or disciplinary tasks before unlocking early. Only an accountability partner can approve early breaks.",
  keywords: ["focus app", "productivity", "accountability", "app blocker", "discipline", "meditation", "faith"],
  openGraph: {
    title: "Disciplock - Lock Your Distractions. Unlock Your Focus.",
    description: "Transform your focus with accountability and meaningful gates.",
    type: "website",
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
