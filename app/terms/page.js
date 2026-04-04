export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Barnstorm Computer Services. Rates, scheduling, warranties, and liability for IT services in Colorado mountain communities.",
  alternates: { canonical: "https://barnstormit.com/terms" },
  openGraph: {
    title: "Terms of Service | Barnstorm Computer Services",
    description: "Service terms, rates, warranties, and liability information.",
    url: "https://barnstormit.com/terms",
    type: "website",
  },
};

export default function TermsOfService() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            Legal
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-snow-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-frost-gray text-sm font-mono">
            Last updated: April 2, 2026
          </p>
          <p className="text-frost-gray text-sm mt-1">
            Barnstorm Computer Services LLC
          </p>
        </div>

        <div className="space-y-12">
          {/* 1. Services */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              1. Services
            </h2>
            <p className="text-frost-gray leading-relaxed">
              Barnstorm Computer Services provides on-site and remote computer
              repair, IT support, and consulting to Colorado&apos;s mountain
              communities. The scope and pricing for any work are agreed upon
              before service begins.
            </p>
          </div>

          {/* 2. Rates & Payment */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              2. Rates &amp; Payment
            </h2>
            <ul className="space-y-3 text-frost-gray leading-relaxed">
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined text-vivid-teal mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  payments
                </span>
                <span>
                  <strong className="text-snow-white">Labor rate:</strong>{" "}
                  $100/hour with a 1.5-hour minimum for on-site visits.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined text-vivid-teal mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  local_shipping
                </span>
                <span>
                  <strong className="text-snow-white">Service call fee:</strong>{" "}
                  Varies by zone (see Pricing page).
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined text-vivid-teal mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  schedule
                </span>
                <span>
                  <strong className="text-snow-white">Payment due</strong> on
                  completion of service. We accept cash, check, Zelle, and ACH.
                  Credit cards accepted with a processing fee.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined text-vivid-teal mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  inventory_2
                </span>
                <span>
                  <strong className="text-snow-white">Parts</strong> are billed
                  separately at cost plus markup. Estimates are provided before
                  ordering.
                </span>
              </li>
            </ul>
          </div>

          {/* 3. Scheduling & Cancellation */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              3. Scheduling &amp; Cancellation
            </h2>
            <p className="text-frost-gray leading-relaxed">
              Cancellations with less than 2 hours&apos; notice may incur a
              minimum charge to cover travel. If we need to reschedule,
              we&apos;ll notify you as soon as possible.
            </p>
          </div>

          {/* 4. Data & Backup Responsibility */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              4. Data &amp; Backup Responsibility
            </h2>
            <p className="text-frost-gray leading-relaxed">
              The client is responsible for backing up data before service.
              Barnstorm Computer Services is not liable for data loss during
              repair, especially in cases involving pre-existing hardware
              failure. We will flag any data loss risk and obtain your consent
              before proceeding.
            </p>
          </div>

          {/* 5. Limitation of Liability */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              5. Limitation of Liability
            </h2>
            <ul className="space-y-2 text-frost-gray leading-relaxed list-disc list-inside">
              <li>
                Liability is limited to the amount paid for the specific service
                in question.
              </li>
              <li>
                We are not liable for indirect, incidental, or consequential
                damages.
              </li>
              <li>
                We cannot guarantee that all problems will be resolved on the
                first visit or that hardware will not fail again in the future.
              </li>
            </ul>
          </div>

          {/* 6. Labor Warranty */}
          <div className="glass-card rounded-xl p-8 border-alpine-gold/30">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4 flex items-center gap-3">
              <span
                className="material-symbols-outlined text-alpine-gold"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              6. Labor Warranty
            </h2>
            <p className="text-frost-gray leading-relaxed mb-4">
              If an issue we repaired recurs within{" "}
              <strong className="text-snow-white">30 days</strong> due to our
              workmanship, we&apos;ll return at no additional labor charge.
            </p>
            <p className="text-frost-gray/70 text-sm leading-relaxed">
              This warranty does not cover new problems, unrelated hardware
              failure, or issues caused by post-service user actions.
            </p>
          </div>

          {/* 7. Remote Support */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              7. Remote Support
            </h2>
            <ul className="space-y-2 text-frost-gray leading-relaxed list-disc list-inside">
              <li>
                Remote sessions use temporary device access via remote support
                software.
              </li>
              <li>You can terminate the session at any time.</li>
              <li>
                We will not access files or systems outside the agreed scope of
                work.
              </li>
              <li>Sessions are not recorded without your consent.</li>
            </ul>
          </div>

          {/* 8. Website Use */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              8. Website Use
            </h2>
            <p className="text-frost-gray leading-relaxed">
              Content on barnstormit.com is provided for informational purposes.
              We make no warranty regarding the completeness or accuracy of
              information on this site. Do not reproduce content without written
              permission.
            </p>
          </div>

          {/* 9. Governing Law */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              9. Governing Law
            </h2>
            <p className="text-frost-gray leading-relaxed">
              These terms are governed by the laws of the State of Colorado.
              Any disputes shall be resolved in Park County jurisdiction.
            </p>
          </div>

          {/* 10. Changes */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              10. Changes to These Terms
            </h2>
            <p className="text-frost-gray leading-relaxed">
              We may update these terms from time to time. The &ldquo;Last
              updated&rdquo; date at the top reflects the most recent revision.
            </p>
          </div>

          {/* 11. Contact */}
          <div className="glass-card rounded-xl p-8 border-vivid-teal/30">
            <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
              11. Contact
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
