import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

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

export const metadata: Metadata = {
  title: "KC3 GmbH — Immobilieninvestitionen. Bestand. Perspektive.",
  description:
    "Die KC3 GmbH ist eine deutschlandweit tätige, eigentümergeführte Investment- und Bestandsgesellschaft für Wohn- und Gewerbeimmobilien.",
  openGraph: {
    title: "KC3 GmbH — Immobilieninvestitionen. Bestand. Perspektive.",
    description:
      "Deutschlandweit tätige Investment- und Bestandsgesellschaft für Wohn- und Gewerbeimmobilien. Erwerb, Vermietung und Projektentwicklung auf eigene Rechnung.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} antialiased`}
    >
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
