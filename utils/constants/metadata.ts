import type { Metadata } from 'next';

// Site metadata that follows Next.js Metadata type
export const SITE_METADATA: Metadata = {
  metadataBase: new URL('https://imospecialprojects.gov.ng'),
  title: "Ministry of Special Projects - Imo State",
  description: "Official website of the Imo State Ministry of Special Projects. Driving critical infrastructure and development initiatives across Imo State to improve lives and grow communities.",
  authors: [{ name: "Imo State Government" }],
  alternates: {
    canonical: "/",
    languages: {
      'en-NG': '/en-ng',
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ministry of Special Projects - Imo State",
    description: "Driving development initiatives and infrastructure projects across Imo State",
    creator: "@ImoStateGov",
    images: ["/assets/twitter-card.jpg"]
  },
  keywords: [
    "Imo State",
    "Special Projects",
    "Infrastructure Development",
    "Community Development",
    "Government Projects",
    "Imo State Government",
    "Development Initiatives",
    "Nigeria",
    "Public Works",
    "CSDP",
    "World Bank Projects"
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://imospecialprojects.gov.ng",
    siteName: "Imo State Ministry of Special Projects",
    title: "Ministry of Special Projects - Imo State",
    description: "Driving critical infrastructure and development initiatives to improve lives and grow communities in Imo State",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imo State Ministry of Special Projects"
      }
    ]
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/assets/ng-logo.png",
    shortcut: "/assets/ng-logo.png",
    apple: "/assets/ng-logo.png",
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/assets/ng-logo.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/assets/ng-logo.png',
      },
    ],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#15803d' },
    { media: '(prefers-color-scheme: dark)', color: '#15803d' },
  ]
}