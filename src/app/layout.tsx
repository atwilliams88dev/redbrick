import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.redbrick618.com"),
  title: {
    default: "Redbrick Coffee & Deli | Salem, Illinois",
    template: "%s | Redbrick Coffee & Deli",
  },
  description: "Handcrafted coffee, fresh deli sandwiches, calzones, and pizza in downtown Salem, IL. Order pickup online, call ahead, or get DoorDash delivery.",
  applicationName: "Redbrick Coffee & Deli",
  creator: "Redbrick Coffee & Deli",
  publisher: "Redbrick Coffee & Deli",
  authors: [{ name: "Redbrick Coffee & Deli", url: "https://www.redbrick618.com" }],
  keywords: [
    "coffee shop Salem IL",
    "deli Salem Illinois",
    "pizza Salem IL",
    "sandwiches Salem IL",
    "coffee near me",
    "food delivery Salem IL",
    "Redbrick Coffee and Deli",
  ],
  alternates: { canonical: "/" },
  category: "restaurant",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Redbrick Coffee & Deli",
    title: "Redbrick Coffee & Deli | Good Food. Good People. Salem, IL.",
    description: "Coffee, fresh deli favorites, and pizza in downtown Salem. Order online for pickup or call (618) 740-9060.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Redbrick Coffee & Deli sandwich and online ordering information" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Redbrick Coffee & Deli in Salem, IL",
    description: "Coffee, deli favorites, and pizza—order online or call for pickup.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#7f1d1d",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
