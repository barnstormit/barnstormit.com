export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Barnstorm Computer Services. We keep data collection minimal — no tracking cookies, no analytics, no ad networks.",
};

export default function PrivacyPolicy() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            Legal
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-snow-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-frost-gray text-sm font-mono">
            Last updated: April 2, 2026
          </p>
          <p className="text-frost-gray text-sm mt-1">
            Barnstorm Computer Services LLC, PO Box 371, Fairplay, CO 80440
          </p>
        </div>

        <div className="space-y-12">
          {/* 1. Overview */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              1. Overview
            </h2>
            <p className="text-frost-gray leading-relaxed">
              Barnstorm Computer Services is a local IT services company serving
              Colorado&apos;s mountain communities. We believe in keeping data
              collection minimal. This policy explains what we collect, why, and
              how we handle it.
            </p>
          </div>

          {/* 2. What We Collect */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              2. What We Collect
            </h2>
            <ul className="space-y-4 text-frost-gray leading-relaxed">
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined text-vivid-teal mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span>
                  <strong className="text-snow-white">
                    Contact form submissions
                  </strong>{" "}
                  — name, email, phone number, and your message.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined text-vivid-teal mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span>
                  <strong className="text-snow-white">Service records</strong>{" "}
                  — contact info and job history, used for invoicing and
                  follow-up.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined text-vivid-teal mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span>
                  <strong className="text-snow-white">
                    Standard server logs
                  </strong>{" "}
                  — via Vercel (IP address, browser type, pages visited). These
                  are not used to identify individual visitors.
                </span>
              </li>
            </ul>
            <p className="text-frost-gray leading-relaxed mt-6 pl-9">
              We do not use tracking cookies, analytics platforms, or ad
              networks.
            </p>
          </div>

          {/* 3. How We Use It */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="space-y-2 text-frost-gray leading-relaxed list-disc list-inside">
              <li>Respond to service requests</li>
              <li>Schedule and perform work</li>
              <li>Send invoices</li>
              <li>Follow up after service</li>
            </ul>
            <p className="text-frost-gray leading-relaxed mt-4">
              We do not send unsolicited marketing. You can opt out of any
              communications at any time by replying to any email.
            </p>
          </div>

          {/* 4. Data Sharing */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              4. Data Sharing
            </h2>
            <p className="text-frost-gray leading-relaxed">
              We do not sell or share your personal information. Payment
              processing is handled directly by our payment provider — we do not
              store credit card numbers.
            </p>
          </div>

          {/* 5. Data Retention */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              5. Data Retention
            </h2>
            <p className="text-frost-gray leading-relaxed">
              We retain service records for 3&ndash;5 years for tax, warranty,
              and follow-up purposes. If you&apos;d like your data deleted,
              email us at{" "}
              <a
                href="mailto:info@barnstormit.com"
                className="text-vivid-teal hover:text-alpine-gold transition-colors"
              >
                info@barnstormit.com
              </a>
              .
            </p>
          </div>

          {/* 6. Security */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              6. Security
            </h2>
            <p className="text-frost-gray leading-relaxed">
              We use HTTPS and encrypted email to protect your information. No
              method of transmission over the internet is 100% secure, but we
              take reasonable precautions to safeguard your data.
            </p>
          </div>

          {/* 7. Your Rights */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              7. Your Rights
            </h2>
            <p className="text-frost-gray leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-frost-gray leading-relaxed list-disc list-inside">
              <li>Request a copy of the data we hold about you</li>
              <li>Correct any inaccuracies</li>
              <li>Request deletion of your data</li>
              <li>Opt out of communications</li>
            </ul>
            <p className="text-frost-gray leading-relaxed mt-4">
              Contact us at{" "}
              <a
                href="mailto:info@barnstormit.com"
                className="text-vivid-teal hover:text-alpine-gold transition-colors"
              >
                info@barnstormit.com
              </a>{" "}
              to exercise any of these rights.
            </p>
          </div>

          {/* 8. Children */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              8. Children
            </h2>
            <p className="text-frost-gray leading-relaxed">
              Our services are not directed at children under the age of 13. We
              do not knowingly collect personal information from children.
            </p>
          </div>

          {/* 9. Changes */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              9. Changes to This Policy
            </h2>
            <p className="text-frost-gray leading-relaxed">
              We may update this policy from time to time. The &ldquo;Last
              updated&rdquo; date at the top reflects the most recent revision.
            </p>
          </div>

          {/* 10. Contact */}
          <div className="glass-card rounded-xl p-8 border-vivid-teal/30">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              10. Contact
            </h2>
            <div className="space-y-3 text-frost-gray">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-vivid-teal">
                  mail
                </span>
                <a
                  href="mailto:info@barnstormit.com"
                  className="text-vivid-teal hover:text-alpine-gold transition-colors"
                >
                  info@barnstormit.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-vivid-teal">
                  call
                </span>
                <a
                  href="tel:+17198380435"
                  className="text-vivid-teal hover:text-alpine-gold transition-colors"
                >
                  (719) 838-0435
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-vivid-teal">
                  location_on
                </span>
                <span>PO Box 371, Fairplay, CO 80440</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
