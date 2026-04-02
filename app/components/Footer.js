import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/service-area", label: "Service Area" },
  { href: "/remote-support", label: "Remote Support" },
  { href: "/contact", label: "Contact" },
  { href: "/vacation-tech-help", label: "Vacation Tech Help" },
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
              <span className="material-symbols-outlined text-vivid-teal mt-0.5">
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
              <span className="material-symbols-outlined text-vivid-teal">
                call
              </span>
              <a
                href="tel:+17198380435"
                className="text-vivid-teal font-medium hover:text-alpine-gold transition-colors duration-300"
              >
                (719) 838-0435
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-vivid-teal">
                mail
              </span>
              <a
                href="mailto:jeff@barnstormit.com"
                className="text-vivid-teal font-medium hover:text-alpine-gold transition-colors duration-300"
              >
                jeff@barnstormit.com
              </a>
            </div>
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
                className="text-frost-gray hover:text-alpine-gold transition-colors duration-300 text-base flex items-center gap-2 group"
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
              <span className="material-symbols-outlined text-6xl">map</span>
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
              className="mt-4 flex items-center gap-2 text-vivid-teal text-sm font-mono font-medium group-hover:translate-x-1 transition-transform duration-300"
            >
              <span>View Coverage Map</span>
              <span className="material-symbols-outlined text-sm">
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
              href="/privacy"
              className="hover:text-vivid-teal transition-colors"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/terms"
              className="hover:text-vivid-teal transition-colors"
            >
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
