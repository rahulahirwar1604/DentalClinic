import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteTitle = "AuraDental Clinic & Implant Centre | Gentle, World-Class Dentistry";
const siteDescription =
  "NABH Accredited & ISO Certified dental care across Bengaluru & Mumbai. 100% painless water-laser dentistry, Swiss implants, clear aligners, and transparent pricing.";
const productionDomain = "https://dental-clinic-five-beta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(productionDomain),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "AuraDental Clinic & Implant Centre",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "AuraDental Clinic & Implant Centre - Gentle, World-Class Dentistry in Bengaluru & Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/opengraph-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#00685f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
