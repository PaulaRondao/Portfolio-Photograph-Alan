import type { Metadata } from "next";
import * as React from "react";
import styles from "./homepage.module.css";
import ResponsiveAppBar from "../../components/navbar/autre";

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

export default function Contact({}: Props) {
  return (
    <div>
      <header>
        <ResponsiveAppBar />
      </header>
      <p>Contact me</p>
    </div>
  );
}
