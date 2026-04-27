export default function manifest() {
  return {
    name: "Barnstorm Computer Services",
    short_name: "Barnstorm",
    description:
      "Mountain IT support, computer repair, networking, and 3D printing for Colorado high country.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D1B2A",
    theme_color: "#0D1B2A",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
