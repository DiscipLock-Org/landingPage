import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://disciplock.app"),
  title: {
    default: "Disciplock - Lock Your Distractions. Unlock Your Focus.",
    template: "%s | Disciplock",
  },
  description: "A focus and accountability app that lets you set limits on distracting apps and complete spiritual, meditative, or disciplinary tasks before unlocking early. Only an accountability partner can approve early breaks. Join the waitlist for early access.",
  keywords: ["focus app", "productivity app", "accountability app", "app blocker", "discipline app", "meditation app", "faith app", "phone addiction", "distraction blocker", "focus tool", "productivity tool"],
  authors: [{ name: "Disciplock" }],
  creator: "Disciplock",
  publisher: "Disciplock",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://disciplock.app",
    siteName: "Disciplock",
    title: "Disciplock - Lock Your Distractions. Unlock Your Focus.",
    description: "Transform your focus with accountability and meaningful gates. Join thousands on the waitlist for early access to the app that helps you break phone addiction.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Disciplock - Focus and Accountability App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disciplock - Lock Your Distractions. Unlock Your Focus.",
    description: "Transform your focus with accountability and meaningful gates. Join the waitlist for early access.",
    images: ["/logo.png"],
    creator: "@disciplock",
  },
  alternates: {
    canonical: "https://disciplock.app",
  },
  verification: {
    // Add your verification codes here when you set up Google Search Console, Bing, etc.
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
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
