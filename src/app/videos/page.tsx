import type { Metadata } from "next";
import * as React from "react";
import Videos from "../../components/videos/videos";

type Props = {};

export const metadata: Metadata = {
  title: "Videos - Alan Syvannarath Photographer",
  description: "Explore the world, like birds. Travel and Adventure",
  metadataBase: new URL("https://alan-photographer/videos"),
  alternates: {
    canonical: "https://alan-photographer/videos",
  },
  openGraph: {
    title: "Videos - Alan Syvannarath Photographer",
    description: "Explore the world, like birds. Travel and Adventure",
    url: "https://alan-photographer/videos",
  },
};

export default function page({}: Props) {
  return (
    <>
      <Videos />
    </>
  );
}
