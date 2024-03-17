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
  const image =
    "https://images.unsplash.com/photo-1690885732016-f44e973ed3bf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <main
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          padding: "6rem",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ color: "white", paddingTop: "1rem" }}>Alan Syvannarath</h1>
        <p style={{ color: "white", paddingTop: "1rem" }}>PHOTOGRAPHY</p>
        <button
          type="button"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "18.75rem",
          }}
        >
          <Link
            href="/home"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "0.833rem",
              letterSpacing: "0.125rem",
              outline: "none",
              width: "100px",
              padding: "6px 10px 6px 10px",
              border: "2px solid white",
              borderRadius: "2px",
              textDecoration: "none",
            }}
            className={styles.welcomeLink}
          >
            WELCOME
          </Link>
        </button>
      </section>
    </main>
  );
}

export default Welcome;
