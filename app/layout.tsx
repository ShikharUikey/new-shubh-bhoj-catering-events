import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Shubh Bhoj Catering & Events | Premium Catering Services in Delhi NCR",
    template: "%s | Shubh Bhoj Catering",
  },
  description:
    "Shubh Bhoj Catering & Events offers premium wedding catering, corporate event management, and outdoor catering services in Delhi NCR. Unforgettable taste and royal hospitality.",
  keywords: [
    "Premium Catering Delhi NCR",
    "Catering Services in Delhi NCR",
    "Wedding Caterers in Delhi NCR",
    "Best Caterers in Delhi",
    "Event Management Delhi",
    "Corporate Catering Delhi",
    "Outdoor Catering",
    "Wedding Food Catering",
  ],
  authors: [{ name: "Shubh Bhoj Catering & Events" }],
  creator: "Shubh Bhoj",
  publisher: "Shubh Bhoj Catering & Events",
  alternates: {
    canonical: "https://www.shubhbhoj.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.shubhbhoj.com",
    title: "Shubh Bhoj Catering & Events | Premium Catering Services in Delhi NCR",
    description:
      "Premium wedding catering and corporate event management services in Delhi NCR. Unforgettable taste and royal hospitality.",
    siteName: "Shubh Bhoj Catering",
    images: [
      {
        url: "https://www.shubhbhoj.com/gallery-5.jpg",
        width: 1200,
        height: 630,
        alt: "Shubh Bhoj Catering Premium Setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubh Bhoj Catering & Events | Delhi NCR",
    description:
      "Premium wedding catering and corporate event management services in Delhi NCR.",
    images: ["https://www.shubhbhoj.com/gallery-5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shubh Bhoj Catering & Events",
  image: "https://www.shubhbhoj.com/gallery-5.jpg",
  "@id": "https://www.shubhbhoj.com",
  url: "https://www.shubhbhoj.com",
  telephone: "+916263126954",
  email: "info@shubhbhoj.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Delhi NCR",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.2599,
    longitude: 77.4126,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  sameAs: [
    "https://www.facebook.com/shubhbhojcatering",
    "https://www.instagram.com/shubhbhojcatering",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 Placeholder */}
        {/* <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" /> */}
        {/* <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script> */}
        {/* Google Search Console & Meta Pixel placeholders can go here */}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}