import { Metadata } from "next";
import * as React from "react";
import DrawerAppBar from "../../components/navbar/page";

import styles from "../styles/page.module.css";
import Footer from "../../components/footer/page";

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
    <>
      <DrawerAppBar />
      <main className={styles.innerCenter}>
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              padding: "5rem 0 3.75rem",
              justifyContent: "space-between",
              flexWrap: "wrap",
              margin: "auto",
            }}
          >
            <div style={{ width: "100%", margin: "auto", maxWidth: "585px" }}>
              <picture></picture>
            </div>

            <div>
              <div>
                <h1>Hello! I&apos;m Alan</h1>
                <p>Petite bio sur toi</p>
                <p>Seconde bio sur toi</p>
              </div>
              <div>
                <p>collapsible</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
