import "./globals.css";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: {
    default: "Azibo Kanu & Partners | Barristers & Solicitors",
    template: "%s | Azibo Kanu & Partners",
  },

  description:
    "Premier full-service law firm providing legal, business, taxation, litigation, and advisory services in Sierra Leone.",

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      {
        url: "/icons/logo-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/logo-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/icons/logo-192x192.png",
    apple: "/icons/logo-192x192.png",
  },

  keywords: [
    "Azibo Kanu & Partners",
    "Law Firm Sierra Leone",
    "Barristers and Solicitors",
    "Corporate Law",
    "Taxation Consultants",
    "Business Registration",
    "Property Law",
    "Family Law",
    "Litigation",
    "Legal Services Freetown",
  ],

  authors: [{ name: "Azibo Kanu & Partners" }],
  creator: "Azibo Kanu & Partners",
  publisher: "Azibo Kanu & Partners",

  metadataBase: new URL("https://www.azibokanu.com"),

  openGraph: {
    title: "Azibo Kanu & Partners",
    description:
      "Leading law firm in Sierra Leone offering corporate, litigation, taxation, property, family, and business legal services.",
    url: "https://www.azibokanu.com",
    siteName: "Azibo Kanu & Partners",
    type: "website",
    locale: "en_US",

    images: [
      {
        url: "/icons/logo-512x512.png",
        width: 512,
        height: 512,
        alt: "Azibo Kanu & Partners Logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Azibo Kanu & Partners",
    description:
      "Trusted Barristers & Solicitors providing legal, taxation, business, and advisory services throughout Sierra Leone.",
    images: ["/icons/logo-512x512.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="light" />
      </head>

      <body className="antialiased bg-slate-50 text-slate-900">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}