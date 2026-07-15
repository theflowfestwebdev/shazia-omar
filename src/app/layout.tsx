import type {Metadata} from "next";
import {Cormorant_Garamond, DM_Sans} from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shazia.zilsoft.net"),
  title: "Shazia Omar — Novelist, Yogini & Founder of The Flow Fest",
  description:
    "Portfolio of Shazia Omar — Bangladeshi novelist, social psychologist, yoga instructor, and founder of The Flow Fest.",
  openGraph: {
    title: "Shazia Omar",
    description:
      "Novelist · Social Psychologist · Yogini · Founder of The Flow Fest",
    images: ["/images/hero/cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-black font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
