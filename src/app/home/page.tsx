import type { Metadata } from "next";
import * as React from "react";
import styles from "./homepage.module.css";
import DrawerAppBar from "../../components/navbar/page";

type Props = {};

export const metadata: Metadata = {
  title: "Homepage - Alan Syvannarath Photographer",
  description:
    "Charmed in the field of images in all their forms, it is as natural as possible that Alan wants to share with people the way he sees what surrounds him. As touched by the subtlety of the light on a face as by a grandiose panorama that is displayed before his eyes.",
  metadataBase: new URL("https://alan-photographer/homepage"),
  alternates: {
    canonical: "https://alan-photographer/homepage",
  },
  openGraph: {
    title: "Homepage - Alan Syvannarath Photographer",
    description:
      "Charmed in the field of images in all their forms, it is as natural as possible that Alan wants to share with people the way he sees what surrounds him. As touched by the subtlety of the light on a face as by a grandiose panorama that is displayed before his eyes.",
    url: "https://alan-photographer/homepage",
  },
};

export default function Homepage({}: Props) {
  return (
    <>
      <main className={styles.mainHomepage}>
        <DrawerAppBar />
        <p>Welcome baby</p>
      </main>
    </>
  );
}
