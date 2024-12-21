import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import localFont from 'next/font/local'
import "./globals.css";

import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Euclid = localFont({ src: '../fonts/EuclidCircularB-Semibold-WebTrial.woff', variable: '--font-euclid' })

export const metadata: Metadata = {
  title: "Full Service Website Agentur",
  description: "Wir sind eine Full Service Website Agentur und bieten Ihnen alles rund um Ihre Website. Von der Konzeption bis zur Umsetzung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${GeistSans.variable} ${Euclid.variable}`}>
      <body className="bg-jordy-950 text-base text-jordy-50 antialiased">
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
