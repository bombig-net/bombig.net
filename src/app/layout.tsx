import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import localFont from 'next/font/local'
import "./globals.css";

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
    <html lang="de" className={`${GeistSans.variable} ${Euclid.variable}`} suppressHydrationWarning>
      <body className="text-base antialiased">
        <header>
          {/* headers goes here */}
        </header>
        {children}
        <footer>
          {/* footer goes here */}
        </footer>
      </body>
    </html>
  );
}
