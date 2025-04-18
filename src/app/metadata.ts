import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BetterStep | Move to Earn Cryptocurrency Platform",
  description:
    "Turn your daily steps into earnings with BetterStep. Our innovative move-to-earn platform rewards you with $BTT and $BFF tokens for staying active. Download now and start earning while walking!",
  metadataBase: new URL("https://nextjs-cryptocurrency-landing.vercel.app"),
  openGraph: {
    title: "BetterStep | Move to Earn Cryptocurrency Platform",
    description:
      "Turn your daily steps into earnings with BetterStep. Our innovative move-to-earn platform rewards you with $BTT and $BFF tokens for staying active.",
    url: "https://nextjs-cryptocurrency-landing.vercel.app",
    siteName: "BetterStep",
    images: [
      {
        url: "/capture-1.png",
        width: 1200,
        height: 630,
        alt: "BetterStep Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BetterStep | Move to Earn Cryptocurrency Platform",
    description:
      "Turn your daily steps into earnings with BetterStep. Our innovative move-to-earn platform rewards you with $BTT and $BFF tokens for staying active.",
    images: ["/capture-1.png"],
    creator: "@betterstep",
    site: "@betterstep",
  },
  keywords: [
    "cryptocurrency",
    "move to earn",
    "fitness rewards",
    "crypto fitness",
    "blockchain fitness",
    "walk to earn",
    "BetterStep",
    "crypto rewards",
    "fitness app",
    "blockchain technology",
    "web3 fitness",
    "crypto walking app",
    "blockchain rewards",
    "fitness cryptocurrency",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://nextjs-cryptocurrency-landing.vercel.app",
    languages: {
      "en-US": "https://nextjs-cryptocurrency-landing.vercel.app",
    },
  },
  authors: [
    {
      name: "Aníbal Alpízar",
      url: "https://www.linkedin.com/in/anibalalpizar/",
    },
  ],
  category: "Technology",
  classification: "Cryptocurrency, Fitness, Blockchain",
}
