import type { Metadata } from "next";
import * as React from "react";
import styles from "./homepage.module.css";
import DrawerAppBar from "../../components/navbar/page";

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

export default function Videos({}: Props) {
  return (
    <>
      <main>
        <DrawerAppBar />
        <p>Welcome baby</p>
      </main>
    </>
  );
}
