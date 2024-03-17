"use client";
import type { Metadata } from "next";
import { pageData } from "../../data/pageData";
import * as React from "react";
import styles from "../styles/page.module.css";
import DrawerAppBar from "../../components/navbar/page";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Footer from "../../components/footer/page";

type Props = {};

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// export const metadata: Metadata = {
//   title: "Photos - Alan Syvannarath Photographer",
//   description: "Explore the world, one photo at a time. Travel and Adventure",
//   metadataBase: new URL("https://alan-photographer/photos"),
//   alternates: {
//     canonical: "https://alan-photographer/photos",
//   },
//   openGraph: {
//     title: "Photos - Alan Syvannarath Photographer",
//     description: "Explore the world, one photo at a time. Travel and Adventure",
//     url: "https://alan-photographer/photos",
//   },
// };

export default function ResponsiveColumns() {
  const metadata: Metadata = pageData.portfolio.metadata;
  return (
    <>
      <DrawerAppBar />
      <main className={styles.innerCenter}>
        <div>
          <div>
            <h1> Explication</h1>
            <p>quelques explication</p>
          </div>
        </div>
        <div>choix des pays</div>
        <div className={styles.galeriePhotos}>
          <div>1</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
