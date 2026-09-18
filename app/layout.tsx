import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KC3 GmbH — Immobilien. Entwicklung. Perspektiven.",
  description:
    "Die KC3 GmbH mit Sitz in Kenn steht für nachhaltige Immobilieninvestitionen, professionelle Projektentwicklung und die Wertsteigerung bestehender Immobilien.",
  openGraph: {
    title: "KC3 GmbH — Immobilien. Entwicklung. Perspektiven.",
    description:
      "Nachhaltige Immobilieninvestitionen, professionelle Projektentwicklung und Wertsteigerung bestehender Immobilien.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
