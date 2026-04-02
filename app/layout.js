import { Space_Grotesk, DM_Sans, DM_Mono } from "next/font/google";
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
  title: {
    default: "Barnstorm Computer Services — IT Support for Colorado Mountain Communities",
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
    images: [
      {
        url: "/hero_bg.jpg",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-deep-navy text-snow-white">
        <Navbar />
        <main className="flex-1 pt-[72px] md:pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
