import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SQUARE MEDICAL BILLING | Premium Healthcare RCM Services" },
      {
        name: "description",
        content:
          "SQUARE MEDICAL BILLING provides professional Revenue Cycle Management (RCM), medical coding, and billing services. Trusted by healthcare providers for accuracy and growth.",
      },
      {
        name: "keywords",
        content:
          "SQUARE MEDICAL BILLING, medical billing services, RCM healthcare, medical coding experts, AR follow-up, revenue cycle management Madurai",
      },
      { name: "author", content: "SQUARE MEDICAL BILLING" },
      // GEO Tags
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Madurai" },
      { name: "geo.position", content: "9.9252;78.1198" },
      { name: "ICBM", content: "9.9252, 78.1198" },
      // OpenGraph / SEO
      { property: "og:site_name", content: "SQUARE MEDICAL BILLING" },
      { property: "og:title", content: "SQUARE MEDICAL BILLING | Trusted RCM Partner" },
      {
        property: "og:description",
        content: "Expert medical billing and RCM services designed for healthcare success.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    // AEO/GEO: JSON-LD Structured Data
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "SQUARE MEDICAL BILLING",
          alternateName: "Square Medical Billing Services",
          url: "https://squaremedicalbilling.in",
          logo: "https://squaremedicalbilling.in/logo.png",
          description:
            "SQUARE MEDICAL BILLING is a premier Revenue Cycle Management (RCM) service provider helping US healthcare providers optimize billing and maximize revenue.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Grasiya Road, 83D, MGR Nagar, Sathya Nagar, Chinna Anuppanadi",
            addressLocality: "Madurai",
            addressRegion: "TN",
            postalCode: "625009",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 9.9252,
            longitude: 78.1198,
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-96008-29498",
            contactType: "customer service",
            email: "office@squaremedicalbilling.in",
            availableLanguage: ["en", "ta"],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
