import type { Metadata, Viewport } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://christoforos-ioannidis.com"),
  title: {
    default: "Dr. Christoforos Ioannidis - Law. Philosophy. Civilization.",
    template: "%s - Dr. Christoforos Ioannidis",
  },
  description:
    "Dr. Christoforos Ioannidis is a legal philosopher, academic, and public intellectual specializing in jurisprudence, international law, political philosophy, and human rights.",
  keywords: [
    "Christoforos Ioannidis",
    "legal philosophy",
    "jurisprudence",
    "international law",
    "human rights",
    "political philosophy",
    "sovereignty",
    "legitimacy",
    "King's College London",
  ],
  authors: [{ name: "Dr. Christoforos Ioannidis" }],
  creator: "Dr. Christoforos Ioannidis",
  openGraph: {
    type: "website",
    title: "Dr. Christoforos Ioannidis - Law. Philosophy. Civilization.",
    description:
      "Legal philosopher and academic working at the intersection of jurisprudence, international law, and political philosophy.",
    siteName: "Dr. Christoforos Ioannidis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Christoforos Ioannidis - Law. Philosophy. Civilization.",
    description:
      "Legal philosopher and academic working at the intersection of jurisprudence, international law, and political philosophy.",
  },
}

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
