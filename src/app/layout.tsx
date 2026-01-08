import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NextEra Technolabs - Expert Web Development & Digital Solutions",
  description: "NextEra Technolabs provides cutting-edge web development services including SEO, MERN stack, .NET, Angular, and Webflow development. Transform your business with our expert digital solutions.",
  keywords: [
    "web development",
    "SEO services",
    "MERN stack development",
    "Webflow development",
    ".NET development",
    ".NET MVC",
    "Angular development",
    "web design",
    "digital solutions",
    "NextEra Technolabs"
  ],
  authors: [{ name: "NextEra Technolabs" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexteratechnolabs.com",
    siteName: "NextEra Technolabs",
    title: "NextEra Technolabs - Expert Web Development & Digital Solutions",
    description: "Transform your business with our expert web development services including SEO, MERN, .NET, Angular, and Webflow development.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NextEra Technolabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextEra Technolabs - Expert Web Development & Digital Solutions",
    description: "Transform your business with our expert web development services.",
    images: ["/logo.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
