import type { Metadata } from "next";
import * as React from "react";
import Contact from "../components/contact/contact";

type Props = {};

export const metadata: Metadata = {
  title: "Contact - Alan Syvannarath Photographer",
  description: "Tell me about your project",
  metadataBase: new URL("https://alan-photographer/contact"),
  alternates: {
    canonical: "https://alan-photographer/contact",
  },
  openGraph: {
    title: "Contact - Alan Syvannarath Photographer",
    description: "Tell me about your project",
    url: "https://alan-photographer/contact",
  },
};

export default function page({}: Props) {
  return (
    <>
      <Contact />
    </>
  );
}
