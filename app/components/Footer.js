import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/service-area", label: "Service Area" },
  { href: "/remote-support", label: "Remote Support" },
  { href: "/3d-printing", label: "3D Printing" },
  { href: "/contact", label: "Contact" },
  { href: "/vacation-help", label: "Vacation Tech Help" },
  { href: "/str-partners", label: "STR Partners" },
  { href: "/blog", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F1C2C] mt-auto">
      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-8 py-16 max-w-[1200px] mx-auto">
        {/* Column 1: Business Info */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tight text-snow-white font-heading">
              BARNSTORM COMPUTER SERVICES
            </h3>
            <div className="h-1 w-12 bg-vivid-teal" />
          </div>
          <div className="space-y-4 text-frost-gray">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-vivid-teal mt-0.5" aria-hidden="true">
                location_on
              </span>
              <address className="not-italic leading-relaxed">
                Barnstorm Computer Services LLC
                <br />
                PO Box 371
                <br />
                Fairplay, CO 80440
              </address>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-vivid-teal" aria-hidden="true">
                call
              </span>
              <a
                href="tel:+17198380435"
                className="text-vivid-teal font-medium hover:text-alpine-gold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
              >
                (719) 838-0435
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-vivid-teal" aria-hidden="true">
                mail
              </span>
              <a
                href="mailto:info@barnstormit.com"
                className="text-vivid-teal font-medium hover:text-alpine-gold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
              >
                info@barnstormit.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-vivid-teal mt-0.5" aria-hidden="true">
                schedule
              </span>
              <div className="leading-relaxed">
                <p>Mon&ndash;Fri, 9 AM &ndash; 5 PM MT</p>
                <p className="text-xs text-frost-gray/70 mt-1">Emergency &amp; after-hours support available &mdash; call for priority rates.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61573305336720"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-frost-gray hover:text-vivid-teal transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jbarnstorf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-frost-gray hover:text-vivid-teal transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-2 text-frost-gray">
              <span
                className="material-symbols-outlined text-vivid-teal text-lg"
                aria-hidden="true"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <span className="font-mono text-[10px] uppercase tracking-tight">
                Licensed &amp; Insured
              </span>
            </div>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-alpine-gold text-deep-navy px-5 py-2.5 rounded-lg font-heading font-bold text-sm hover:brightness-110 transition-[filter] focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                event
              </span>
              Book a Discovery Call
            </Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-snow-white font-heading">
            Quick Links
          </h3>
          <nav className="grid grid-cols-2 gap-y-3 gap-x-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-frost-gray hover:text-alpine-gold transition-colors duration-300 text-base flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-vivid-teal/30 group-hover:bg-alpine-gold transition-colors" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Service Area */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-snow-white font-heading">
            Service Area
          </h3>
          <div className="glass-card p-6 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl" aria-hidden="true">map</span>
            </div>
            <p className="text-frost-gray leading-relaxed relative z-10">
              Serving{" "}
              <span className="text-snow-white font-medium">
                Fairplay, Breckenridge, Frisco, Dillon, Leadville, Buena Vista
              </span>{" "}
              &amp; surrounding mountain communities.
            </p>
            <Link
              href="/service-area"
              className="mt-4 flex items-center gap-2 text-vivid-teal text-sm font-mono font-medium group-hover:translate-x-1 transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span>View Coverage Map</span>
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#020F1E] border-t border-steel-blue/15">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono tracking-wider text-frost-gray">
            &copy; {new Date().getFullYear()} Barnstorm Computer Services. All
            rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-mono tracking-wider text-frost-gray/60">
            <Link
              href="/privacy-policy"
              className="hover:text-vivid-teal transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/terms"
              className="hover:text-vivid-teal transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
