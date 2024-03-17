"use client";
import type { Metadata } from "next";
import { pageData } from "../../data/pageData";
import * as React from "react";
import styles from "../styles/page.module.css";
import DrawerAppBar from "../../components/navbar/page";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

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
        <Box sx={{ width: 500, minHeight: 253 }}>
          <Masonry columns={{ xs: 3, sm: 4 }} spacing={2}>
            {heights.map((height, index) => (
              <Item key={index} sx={{ height }}>
                {index + 1}
              </Item>
            ))}
          </Masonry>
        </Box>
      </main>
      <Footer />
    </>
  );
}
