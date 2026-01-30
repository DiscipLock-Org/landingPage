import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <a href="#waitlist-form">
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

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-slate-700 bg-clip-text text-transparent mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your focus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Set Limits
              </h3>
              <p className="text-gray-600">
                Choose which apps you want to limit and set your daily or session limits.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Complete Your Gate
              </h3>
              <p className="text-gray-600">
                Read a verse, meditate, reflect, or complete your chosen task before unlocking.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 via-slate-600 to-blue-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Partner Keeps You Accountable
              </h3>
              <p className="text-gray-600">
                Your accountability partner approves or denies early break requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <WaitlistForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Logo className="mb-4" dark />
              <p className="text-sm text-gray-400">
                Transform your focus with accountability and meaningful gates.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <p className="text-sm text-gray-400">
                Questions? Reach out to us at{' '}
                <a href="mailto:support@disciplock.com" className="text-blue-400 hover:text-blue-300">
                  support@disciplock.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Disciplock. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
