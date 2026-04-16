import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hala Cookies | Custom Cookies, Cupcakes & Bakes in Doha",
  description: "Handcrafted custom cookies, cupcakes, petit fours & traditional Ghorayeba in Doha, Qatar. Personalized bakes for weddings, Eid, baby showers & corporate events. Order on WhatsApp."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${plex.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}