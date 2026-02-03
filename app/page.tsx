import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Citations } from '@/components/Citations';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://disciplock.app/#organization",
        name: "Disciplock",
        url: "https://disciplock.app",
        logo: "https://disciplock.app/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          email: "support@disciplock.app",
          contactType: "Customer Support",
        },
        sameAs: [],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://disciplock.app/#software",
        name: "Disciplock",
        applicationCategory: "ProductivityApplication",
        operatingSystem: ["iOS", "Android"],
        description: "A focus and accountability app that lets you set limits on distracting apps and complete spiritual, meditative, or disciplinary tasks before unlocking early. Only an accountability partner can approve early breaks.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "1",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://disciplock.app/#website",
        url: "https://disciplock.app",
        name: "Disciplock",
        description: "Lock Your Distractions. Unlock Your Focus. Join the waitlist for early access to the app that helps you break phone addiction.",
        publisher: {
          "@id": "https://disciplock.app/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://disciplock.app/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-slate-400 bg-clip-text text-transparent" aria-label="Disciplock Home">
              Disciplock
            </Link>
            <a href="#waitlist-form" aria-label="Jump to waitlist form">
              <Button variant="primary" size="sm">
                Join Waitlist
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Waitlist Form */}
      <WaitlistForm />

      {/* Research Citations */}
      <Citations />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-center sm:justify-between gap-4 sm:gap-8 mb-6 sm:mb-8 flex-wrap">
            <div className="flex items-center gap-4 sm:gap-6">
              <ul className="flex flex-row gap-4 sm:gap-6 text-sm">
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">Contact:</span>
              <a href="mailto:support@disciplock.app" className="text-blue-400 hover:text-blue-300 whitespace-nowrap">
                support@disciplock.app
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Disciplock. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
