import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions - Disciplock',
  description: 'Disciplock Terms and Conditions - Read our terms of service for using the Disciplock waitlist and services.',
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-slate-400 bg-clip-text text-transparent">
                Disciplock
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-slate-400 bg-clip-text text-transparent mb-4">
          Terms and Conditions
        </h1>
        <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing or using the Disciplock website and joining our waitlist, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">2. Description of Service</h2>
            <p className="text-gray-300 mb-4">
              Disciplock is a focus and accountability application currently in development. Our website provides information about Disciplock and allows you to join a waitlist to be notified when the application becomes available.
            </p>
            <p className="text-gray-300">
              By joining the waitlist, you are expressing interest in using Disciplock when it becomes available. Joining the waitlist does not guarantee access to the application, and we reserve the right to determine who receives early access.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">3. Waitlist Registration</h2>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">3.1 Eligibility</h3>
            <p className="text-gray-300 mb-4">
              To join our waitlist, you must:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li>Be at least 13 years of age (or the age of majority in your jurisdiction)</li>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Not have previously been removed from our waitlist for violation of these Terms</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-200 mb-3">3.2 Account Information</h3>
            <p className="text-gray-300 mb-4">
              You are responsible for maintaining the confidentiality of any information you provide. You agree to notify us immediately of any unauthorized use of your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">4. User Conduct</h2>
            <p className="text-gray-300 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li>Provide false, misleading, or inaccurate information</li>
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems or data</li>
              <li>Interfere with or disrupt the operation of our website or services</li>
              <li>Use automated systems to submit multiple waitlist entries</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All content on the Disciplock website, including but not limited to text, graphics, logos, images, and software, is the property of Disciplock or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-300">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use our content without our prior written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-gray-300 mb-4">
              Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li>Warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy, reliability, or completeness of information</li>
            </ul>
            <p className="text-gray-300">
              We do not guarantee that our services will be uninterrupted, secure, or error-free, or that any defects will be corrected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              To the fullest extent permitted by law, Disciplock and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers or data</li>
              <li>Any errors or omissions in our content</li>
              <li>Any delays or failures in the delivery of services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">8. Indemnification</h2>
            <p className="text-gray-300">
              You agree to indemnify, defend, and hold harmless Disciplock and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of our services or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">9. Third-Party Services</h2>
            <p className="text-gray-300 mb-4">
              Our services may integrate with or use third-party services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li><strong>Neon:</strong> For data storage and management (serverless Postgres database)</li>
              <li><strong>Resend:</strong> For email delivery</li>
            </ul>
            <p className="text-gray-300">
              Your use of these third-party services is subject to their respective terms and conditions and privacy policies. We are not responsible for the practices of these third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">10. Availability and Modifications</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li>Modify, suspend, or discontinue any aspect of our services at any time</li>
              <li>Remove users from the waitlist at our discretion</li>
              <li>Change the features and functionality of Disciplock before or after launch</li>
              <li>Limit access to our services without prior notice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">11. Termination</h2>
            <p className="text-gray-300 mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p className="text-gray-300">
              Upon termination, your right to use our services will cease immediately. You may request removal from our waitlist at any time by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">12. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].
            </p>
            <p className="text-gray-400 mt-4 text-sm italic">
              Note: Please replace [Your Jurisdiction] with your actual jurisdiction (e.g., "the State of California, United States" or "England and Wales").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">13. Severability</h2>
            <p className="text-gray-300">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">14. Entire Agreement</h2>
            <p className="text-gray-300">
              These Terms constitute the entire agreement between you and Disciplock regarding the use of our services and supersede all prior agreements and understandings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">15. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> <a href="mailto:support@disciplock.app" className="text-blue-400 hover:text-blue-300 underline">support@disciplock.app</a>
              </p>
              <p className="text-gray-300">
                <strong>Website:</strong> <a href="/" className="text-blue-400 hover:text-blue-300 underline">disciplock.app</a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <Link href="/" className="text-blue-400 hover:text-blue-300 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
