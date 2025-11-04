import { LayoutWrapper } from "@/components/layout-wrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://isa-ashesi.com"),
  title: {
    default: "ISA - International Students Association | Ashesi University",
    template: "%s | ISA Ashesi",
  },
  description:
    "Join the International Students Association at Ashesi University. Connect with 500+ students from 30+ countries, attend 6+ events yearly, and experience world-class education in Ghana.",
  keywords: [
    "ISA",
    "International Students Association",
    "Ashesi University",
    "Ghana",
    "International Education",
    "Student Community",
    "Study in Africa",
    "Study in Ghana",
    "African Universities",
    "Student Events",
    "Cultural Exchange",
    "Global Community",
  ],
  authors: [{ name: "ISA Ashesi", url: "https://isa-ashesi.com" }],
  creator: "ISA Ashesi",
  publisher: "ISA Ashesi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isa-ashesi.com",
    title: "ISA - International Students Association | Ashesi University",
    description:
      "Join our global community of 500+ international students from 30+ countries at Ashesi University in Ghana.",
    siteName: "ISA Ashesi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ISA - International Students Association at Ashesi University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISA - International Students Association",
    description: "Join our global community at Ashesi University",
    images: ["/twitter-image.jpg"],
    creator: "@ISAAshesi",
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
  icons: {
    icon: [
      { url: "/icons/logo.png" },
    ],
    apple: [
      { url: "/icons/logo.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col bg-background text-foreground">
            <LayoutWrapper>{children}</LayoutWrapper>
          </div>
        </ThemeProvider>

        {/* Analytics */}
        <Analytics />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/ashesi-university-campus-with-diverse-internationa.jpg"
          as="image"
        />
      </body>
    </html>
  );
}
