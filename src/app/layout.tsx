
import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactConfig, siteConfig } from "@/config/site";
import { homeSeo } from "@/content/home";
import { ogImage } from "@/lib/metadata";
import { DEFAULT_THEME, themeInitScript } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.url}/`),
  title: {
    default: homeSeo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.legalName,
  keywords: [
    "software development company",
    "web development",
    "mobile app development",
    "CRM development",
    "SaaS development",
    "AI automation",
    "blockchain development",
    "Kerala",
    "India",
    "UAE",
    "Saudi Arabia",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.legalName,
    locale: siteConfig.locale,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f8fc",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.png`,
  description: siteConfig.description,
  areaServed: siteConfig.markets,
  email: contactConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contactConfig.address.street,
    addressLocality: contactConfig.address.locality,
    addressRegion: contactConfig.address.region,
    postalCode: contactConfig.address.postalCode,
    addressCountry: contactConfig.address.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${contactConfig.whatsappNumber}`,
    email: contactConfig.email,
    contactType: "sales",
    availableLanguage: ["English"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.legalName,
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_THEME}
      className={`${inter.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>

      <body className="min-h-dvh">
        <SmoothScroll>
          {children}
        </SmoothScroll>

        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </body>
    </html>
  );
}
