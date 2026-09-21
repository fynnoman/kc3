import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F1113",
};

const baseTitle =
  "KC3 GmbH · Immobilie, Mehrfamilienhaus, Gewerbe und Grundstück direkt verkaufen";
const baseDescription =
  "Die KC3 GmbH kauft Wohn- und Gewerbeimmobilien sowie Mehrfamilienhäuser, Gewerbeobjekte und Grundstücke deutschlandweit auf eigene Rechnung für den langfristigen eigenen Bestand. Direktankauf, kein Makler, kein Bieterverfahren, ein Ansprechpartner.";
const keywords = [
  "Immobilie verkaufen",
  "Mehrfamilienhaus verkaufen",
  "Gewerbeimmobilie verkaufen",
  "Grundstück verkaufen",
  "Direktankauf Immobilien",
  "Immobilie ohne Makler verkaufen",
  "Zinshaus verkaufen",
  "Wohn- und Geschäftshaus verkaufen",
  "Immobilienbestandshalter",
  "KC3 GmbH",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: baseTitle,
    template: "%s | KC3 GmbH",
  },
  description: baseDescription,
  keywords,
  applicationName: "KC3 GmbH",
  authors: [{ name: "KC3 GmbH" }],
  creator: "KC3 GmbH",
  publisher: "KC3 GmbH",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    title: baseTitle,
    description: baseDescription,
    url: SITE_URL,
    siteName: "KC3 GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "KC3 GmbH — Immobilieninvestitionen deutschlandweit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: baseTitle,
    description: baseDescription,
    images: ["/hero/hero-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Real Estate",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} antialiased`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/hero/hero-1.webp"
          fetchPriority="high"
        />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
