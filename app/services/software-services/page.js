import ServiceLandingLayout from "../../components/ServiceLandingLayout";

export const metadata = {
  title: "Software Services",
  description:
    "OS installs, virus removal, optimization and updates. On-site and remote software services across Fairplay, Breckenridge, and the Colorado high country.",
  alternates: { canonical: "https://barnstormit.com/services/software-services" },
  openGraph: {
    title: "Software Services | Barnstorm Computer Services",
    description:
      "OS installation, virus and malware removal, optimization, software/driver updates, and full system cleanup for slow or compromised computers.",
    url: "https://barnstormit.com/services/software-services",
    type: "website",
  },
};

const items = [
  {
    title: "OS installation",
    description:
      "Fresh installs of Windows, macOS, or Linux when your system is too far gone to fix in place. We back up your data first, install the OS, restore your files, and reconfigure your apps and settings so the machine is genuinely ready to use.",
  },
  {
    title: "Virus and malware removal",
    description:
      "Pop-ups, browser hijacking, encrypted files, mysterious slowdowns — we remove the malware and patch the entry point so it doesn't come back. Every cleanup includes a full system scan and a review of your security setup.",
  },
  {
    title: "System optimization",
    description:
      "Slow boot, sluggish apps, full-disk warnings? We trim startup programs, clean junk, and reconfigure background services. Most systems gain back real speed without any new hardware.",
  },
  {
    title: "Software updates",
    description:
      "Out-of-date software is the #1 ransomware entry point. We patch your OS, browsers, and key apps, then set up automatic updates where it's safe so you stay current without thinking about it.",
  },
  {
    title: "Driver updates",
    description:
      "Failing drivers cause printer issues, audio glitches, screen flicker, and worse. We pull the right drivers straight from the manufacturer — not the generic versions Windows Update offers — and install them clean.",
  },
  {
    title: "System cleanup",
    description:
      "Years of accumulated cruft slow everything down. We remove unused apps, clear caches, fix registry issues where appropriate, and tidy your file system. Often paired with a software audit so you know what's actually running.",
  },
];

const PROVIDER_REF = { "@id": "https://barnstormit.com/#localbusiness" };
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software Services",
  serviceType: "Computer software services",
  description:
    "OS installation, virus and malware removal, system optimization, software and driver updates, and full system cleanup.",
  provider: PROVIDER_REF,
  url: "https://barnstormit.com/services/software-services",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Park County, Colorado" },
    { "@type": "AdministrativeArea", name: "Summit County, Colorado" },
    { "@type": "AdministrativeArea", name: "Lake County, Colorado" },
    { "@type": "AdministrativeArea", name: "Chaffee County, Colorado" },
  ],
};

export default function SoftwareServices() {
  return (
    <ServiceLandingLayout
      slug="software-services"
      eyebrow="SOFTWARE SERVICES"
      title="Software Services"
      titleAccent="Made Right"
      icon="terminal"
      intro="OS installs, malware cleanup, optimization, and update management. We rescue slow or compromised systems and leave them running like they should."
      items={items}
      serviceJsonLd={serviceJsonLd}
    />
  );
}
