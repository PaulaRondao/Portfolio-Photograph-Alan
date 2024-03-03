import type { Metadata } from "next";
import * as React from "react";
import styles from "./homepage.module.css";
import ResponsiveAppBar from "../../components/navbar/autre";

type Props = {};

export const metadata: Metadata = {
  title: "Photos - Alan Syvannarath Photographer",
  description: "Explore the world, one photo at a time. Travel and Adventure",
  metadataBase: new URL("https://alan-photographer/photos"),
  alternates: {
    canonical: "https://alan-photographer/photos",
  },
  openGraph: {
    title: "Photos - Alan Syvannarath Photographer",
    description: "Explore the world, one photo at a time. Travel and Adventure",
    url: "https://alan-photographer/photos",
  },
};

export default function Photos({}: Props) {
  return (
    <div>
      <header>
        <ResponsiveAppBar />
      </header>
      <p>See my photos</p>
    </div>
  );
}
