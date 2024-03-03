import { Metadata } from "next";
import * as React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "About - Alan Syvannarath Photographer",
  description: "Let me tell you your story...",
  metadataBase: new URL("https://alan-photographer/about"),
  alternates: {
    canonical: "https://alan-photographer/about",
  },
  openGraph: {
    title: "About - Alan Syvannarath Photographer",
    description: "Let me tell you a story...",
    url: "https://alan-photographer/about",
  },
};

export default function page({}: Props) {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}
