import type { Metadata } from "next";
import styles from "./welcome/welcome.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome - Alan Syvannarath Photographer",
  description:
    "Photographer and explorer. Travel photographer who tells stories through images…",
  metadataBase: new URL("https://alan-photographer/welcome"),
  alternates: {
    canonical: "https://alan-photographer/welcome",
  },
  openGraph: {
    title: "Welcome - Alan Syvannarath Photographer",
    description:
      "Photographer and explorer. Travel photographer who tells stories through images…",
    url: "https://alan-photographer/welcome",
  },
};

function Welcome() {
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.contentWelcome}>
        <h1>Alan Syvannarath</h1>
        <p>PHOTOGRAPHY</p>
        <button type="button">
          <Link href="/homepage">WELCOME</Link>
        </button>
      </div>
    </div>
  );
}

export default Welcome;
