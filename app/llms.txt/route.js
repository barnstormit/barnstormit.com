export function GET() {
  const content = `# Barnstorm Computer Services
> On-site computer repair, IT support, and tech services for Colorado's mountain communities. Based in Fairplay, CO.

## Pages

- [Home](https://barnstormit.com/)
- [Services](https://barnstormit.com/services)
- [Pricing](https://barnstormit.com/pricing)
- [Service Area](https://barnstormit.com/service-area)
- [About](https://barnstormit.com/about)
- [Contact](https://barnstormit.com/contact)
- [Remote Support](https://barnstormit.com/remote-support)
- [Vacation Tech Help](https://barnstormit.com/vacation-help)
- [STR Partner Program](https://barnstormit.com/str-partners)
- [3D Printing](https://barnstormit.com/3d-printing)
- [Book a Discovery Call](https://barnstormit.com/book)
- [Blog](https://barnstormit.com/blog)

## Contact

- Phone: (719) 838-0435
- Email: info@barnstormit.com
- Address: PO Box 371, Fairplay, CO 80440

## Service Area

Fairplay, Alma, Como, Breckenridge, Blue River, Buena Vista, Jefferson, Grant, Frisco, Bailey, Dillon, Silverthorne, Leadville, Salida
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
