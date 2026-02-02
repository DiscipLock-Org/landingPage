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
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '64x64', type: 'image/png' },
      { url: '/logo.png', sizes: '96x96', type: 'image/png' },
      { url: '/logo.png', sizes: '128x128', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/logo.png',
        sizes: '180x180',
      },
    ],
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
