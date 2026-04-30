import ServiceLandingLayout from "../../components/ServiceLandingLayout";

export const metadata = {
  title: "Hardware Repair",
  description:
    "Laptop screens, SSD/RAM upgrades, motherboard repair, batteries and more. On-site computer hardware repair across Fairplay, Breckenridge, and Summit County.",
  alternates: { canonical: "https://barnstormit.com/services/hardware-repair" },
  openGraph: {
    title: "Hardware Repair | Barnstorm Computer Services",
    description:
      "Laptop screens, SSD/RAM upgrades, motherboard repair, batteries, hinges, cooling and DC jack work. On-site repair across the Colorado high country.",
    url: "https://barnstormit.com/services/hardware-repair",
    type: "website",
  },
};

const items = [
  {
    title: "Laptop screen repair",
    description:
      "Cracked, dim, or flickering laptop screens replaced with quality OEM-equivalent panels. Most repairs are done in a single visit, including hinge and bezel work. We source for HP, Dell, Lenovo, ASUS, Acer, and most major brands.",
  },
  {
    title: "SSD/HDD upgrades",
    description:
      "Swap an aging spinning drive for a modern SSD and a 10-year-old laptop feels new again. We migrate your existing OS, apps, and files so you don't lose a thing. Boot times typically drop from minutes to under 15 seconds.",
  },
  {
    title: "RAM upgrades",
    description:
      "More memory means more browser tabs, smoother multitasking, and snappier performance under load. We confirm compatibility before ordering parts and install in minutes. Most laptops handle 16–32GB; desktops often go much higher.",
  },
  {
    title: "Motherboard repair",
    description:
      "When a power surge or liquid spill takes out the board, we diagnose what's actually broken before recommending a full replacement. Component-level repair (capacitors, MOSFETs, charging circuits) is often a fraction of the cost of a new board.",
  },
  {
    title: "Battery replacement",
    description:
      "Laptop dying after 30 minutes? We replace OEM-spec batteries on most makes and models. Includes calibration so the new battery reads accurately from the very first charge cycle.",
  },
  {
    title: "Keyboard and hinge repair",
    description:
      "Sticky keys, broken keys, cracked hinges — common wear items we replace daily. Hinge repairs caught early prevent the more expensive screen and case damage that follows when they're ignored.",
  },
  {
    title: "Cooling system repair",
    description:
      "Fans grinding, temps spiking, laptop shutting down under load? We clean fans, replace thermal paste, and swap failed cooling assemblies. Critical for laptops in dusty or pet-heavy environments.",
  },
  {
    title: "DC jack repair",
    description:
      "If your laptop only charges when the cord is held at a certain angle, the charging port is failing. We replace DC jacks with proper soldering and reinforcement so the new port holds up to daily plug-and-unplug use.",
  },
];

const PROVIDER_REF = { "@id": "https://barnstormit.com/#localbusiness" };
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hardware Repair",
  serviceType: "Computer hardware repair",
  description:
    "Laptop screen, SSD/HDD, RAM, motherboard, battery, keyboard, hinge, cooling system, and DC jack repair across the Colorado high country.",
  provider: PROVIDER_REF,
  url: "https://barnstormit.com/services/hardware-repair",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Park County, Colorado" },
    { "@type": "AdministrativeArea", name: "Summit County, Colorado" },
    { "@type": "AdministrativeArea", name: "Lake County, Colorado" },
    { "@type": "AdministrativeArea", name: "Chaffee County, Colorado" },
  ],
};

export default function HardwareRepair() {
  return (
    <ServiceLandingLayout
      slug="hardware-repair"
      eyebrow="HARDWARE REPAIR"
      title="Hardware Repair"
      titleAccent="That Lasts"
      icon="build"
      intro="Laptop screens, SSDs, RAM, batteries, hinges, and motherboard work — fixed on-site or at the bench, with parts that match the original spec. Most issues turn around in one visit."
      items={items}
      serviceJsonLd={serviceJsonLd}
    />
  );
}
