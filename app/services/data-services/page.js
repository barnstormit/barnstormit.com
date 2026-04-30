import ServiceLandingLayout from "../../components/ServiceLandingLayout";

export const metadata = {
  title: "Data Recovery & Backup",
  description:
    "Data recovery, automated backup setup, and cloud storage configuration in Fairplay, Breckenridge, and the Colorado high country.",
  alternates: { canonical: "https://barnstormit.com/services/data-services" },
  openGraph: {
    title: "Data Recovery & Backup | Barnstorm Computer Services",
    description:
      "Data recovery from failed drives, automated backup design, full data transfer between computers, and cloud storage setup tailored to your workflow.",
    url: "https://barnstormit.com/services/data-services",
    type: "website",
  },
};

const items = [
  {
    title: "Data recovery",
    description:
      "Drive failed, file deleted, partition corrupted? We recover what's recoverable with both software tools and hardware-level techniques. Free assessment first — we tell you the realistic odds before you pay a thing.",
  },
  {
    title: "Backup solutions",
    description:
      "A backup that doesn't run isn't a backup. We design automated setups using local drives, cloud, or both — with verification so you actually know recovery works. Tested across the most common failure scenarios.",
  },
  {
    title: "Data transfer",
    description:
      "Moving from old computer to new? Switching from Windows to Mac, or back? We transfer files, email, contacts, browser bookmarks, and app settings so your new machine feels like home from minute one.",
  },
  {
    title: "Cloud storage setup",
    description:
      "Google Drive, OneDrive, Dropbox, iCloud, or self-hosted options like Nextcloud — we set up the right cloud for your workflow. Includes folder structure, sharing permissions, and sync settings tuned to keep your important files always available.",
  },
];

const PROVIDER_REF = { "@id": "https://barnstormit.com/#localbusiness" };
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data Services",
  serviceType: "Data recovery and backup",
  description:
    "Data recovery, automated backup solutions, computer-to-computer data transfer, and cloud storage setup.",
  provider: PROVIDER_REF,
  url: "https://barnstormit.com/services/data-services",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Park County, Colorado" },
    { "@type": "AdministrativeArea", name: "Summit County, Colorado" },
    { "@type": "AdministrativeArea", name: "Lake County, Colorado" },
    { "@type": "AdministrativeArea", name: "Chaffee County, Colorado" },
  ],
};

export default function DataServices() {
  return (
    <ServiceLandingLayout
      slug="data-services"
      eyebrow="DATA SERVICES"
      title="Data Recovery"
      titleAccent="& Backup"
      icon="database"
      intro="When a drive fails or files vanish, we recover what we can. When everything is fine, we make sure it stays that way with backup setups that actually work."
      items={items}
      serviceJsonLd={serviceJsonLd}
    />
  );
}
