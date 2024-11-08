import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./styles/globals.css";
import { Providers } from "./providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  authors: [{ name: "Alan Syvannarath" }],
  keywords: ["photos", "videos", "photographer", "travel", "drone", "explore"],
  alternates: {
    languages: {
      "en-US": "/en-US",
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
  },
  openGraph: {
    siteName: "Alan Syvannarath Photographer",
    images: [
      {
        url: "",
        width: 300,
        height: 600,
        alt: "",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="Portfolio Photographer">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
