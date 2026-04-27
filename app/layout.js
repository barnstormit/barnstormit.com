import { Space_Grotesk, DM_Sans, DM_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://barnstormit.com"),
  title: {
    default:
      "Barnstorm Computer Services — Mountain IT Support",
    template: "%s | Barnstorm Computer Services",
  },
  description:
    "Reliable computer repair, IT support, and tech services for Fairplay, Breckenridge, and Colorado mountain communities. Call (719) 838-0435.",
  openGraph: {
    title: "Barnstorm Computer Services — Mountain Tech, Done Right",
    description:
      "On-site computer repair and IT support for Colorado's mountain communities. Based in Fairplay, serving Summit, Park, Lake, and Chaffee counties.",
    url: "https://barnstormit.com",
    siteName: "Barnstorm Computer Services",
    locale: "en_US",
    images: [
      {
        url: "/barnstorm_cover_v2.jpg",
        width: 1200,
        height: 630,
        alt: "Barnstorm Computer Services — Mountain Tech, Done Right",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barnstorm Computer Services — Mountain Tech, Done Right",
    description:
      "On-site computer repair and IT support for Colorado's mountain communities.",
    images: ["/barnstorm_cover_v2.jpg"],
  },
  alternates: {
    canonical: "https://barnstormit.com",
  },
  other: {
    "geo.region": "US-CO",
    "geo.placename": "Fairplay",
    "geo.position": "39.2247;-105.9989",
    "ICBM": "39.2247, -105.9989",
  },
};

export const viewport = {
  themeColor: "#0D1B2A",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://barnstormit.com/#localbusiness",
  name: "Barnstorm Computer Services LLC",
  description:
    "On-site computer repair, IT support, networking, data recovery, and 3D printing for Colorado mountain communities.",
  url: "https://barnstormit.com",
  telephone: "+1-719-838-0435",
  email: "info@barnstormit.com",
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: "371",
    addressLocality: "Fairplay",
    addressRegion: "CO",
    postalCode: "80440",
    addressCountry: "US",
  },
  areaServed: [
    "Fairplay",
    "Alma",
    "Breckenridge",
    "Frisco",
    "Dillon",
    "Silverthorne",
    "Leadville",
    "Buena Vista",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "17:00",
  },
  priceRange: "$$",
  image: "https://barnstormit.com/hero_bg.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{ colorScheme: "dark" }}
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-deep-navy text-snow-white">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-vivid-teal focus:text-deep-navy focus:px-4 focus:py-2 focus:rounded-lg focus:font-heading focus:font-bold focus:text-sm">
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1 pt-[72px] md:pt-[88px]">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-C7QTMH6VK9" />
        )}
      </body>
    </html>
  );
}
