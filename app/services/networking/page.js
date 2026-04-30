import ServiceLandingLayout from "../../components/ServiceLandingLayout";

export const metadata = {
  title: "WiFi & Networking",
  description:
    "Home and business WiFi, router configuration, mesh networks, network security, and Starlink installation for Colorado mountain homes and short-term rentals.",
  alternates: { canonical: "https://barnstormit.com/services/networking" },
  openGraph: {
    title: "WiFi & Networking | Barnstorm Computer Services",
    description:
      "Home and business WiFi, mesh setups, router configuration, network security audits, and Starlink installation across the Colorado high country.",
    url: "https://barnstormit.com/services/networking",
    type: "website",
  },
};

const items = [
  {
    title: "Home and business WiFi setup",
    description:
      "Dead spots, slow speeds, dropped connections — we map your space, place access points where they actually help, and configure the network for your real usage. Mountain homes with thick walls and distant outbuildings are our specialty.",
  },
  {
    title: "Router and modem configuration",
    description:
      "Out-of-the-box routers are tuned for the average household, not yours. We set Wi-Fi channels properly, configure guest networks, set up port forwarding for cameras or remote access, and lock down admin settings.",
  },
  {
    title: "WiFi troubleshooting",
    description:
      "Streaming buffers? Video calls drop? We diagnose interference, signal strength, channel congestion, and hardware faults — and tell you whether it's the router, the layout, or your ISP.",
  },
  {
    title: "Network security",
    description:
      "Default passwords, open ports, weak encryption — we audit your network and lock it down. WPA3 where supported, strong unique credentials, firmware updates, and segmented IoT/guest networks so a compromised smart bulb can't reach your laptop.",
  },
  {
    title: "Starlink installation",
    description:
      "Starlink is a great fit for mountain Colorado, but only if it's installed and configured right. We mount the dish for sky clearance, run cable through walls cleanly, configure the router (or replace it with a real one), and verify performance.",
  },
];

const PROVIDER_REF = { "@id": "https://barnstormit.com/#localbusiness" };
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Networking",
  serviceType: "Network and WiFi setup",
  description:
    "Home and business WiFi, mesh setups, router configuration, network security, and Starlink installation across mountain Colorado.",
  provider: PROVIDER_REF,
  url: "https://barnstormit.com/services/networking",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Park County, Colorado" },
    { "@type": "AdministrativeArea", name: "Summit County, Colorado" },
    { "@type": "AdministrativeArea", name: "Lake County, Colorado" },
    { "@type": "AdministrativeArea", name: "Chaffee County, Colorado" },
  ],
};

export default function Networking() {
  return (
    <ServiceLandingLayout
      slug="networking"
      eyebrow="NETWORKING"
      title="WiFi That"
      titleAccent="Actually Works"
      icon="wifi"
      intro="Mesh networks, Starlink installs, business WiFi, and the kind of router config that turns a frustrating internet experience into a working one."
      items={items}
      serviceJsonLd={serviceJsonLd}
    />
  );
}
