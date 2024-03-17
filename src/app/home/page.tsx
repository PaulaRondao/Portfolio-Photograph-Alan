"use client";
import type { Metadata } from "next";
import * as React from "react";
import styles from "./essai.module.css";
import DrawerAppBar from "../../components/navbar/page";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner,
} from "react-scroll-parallax";

import Footer from "../../components/footer/page";

type Props = {};

// export const metadata: Metadata = {
//   title: "Homepage - Alan Syvannarath Photographer",
//   description:
//     "Charmed in the field of images in all their forms, it is as natural as possible that Alan wants to share with people the way he sees what surrounds him. As touched by the subtlety of the light on a face as by a grandiose panorama that is displayed before his eyes.",
//   metadataBase: new URL("https://alan-photographer/homepage"),
//   alternates: {
//     canonical: "https://alan-photographer/homepage",
//   },
//   openGraph: {
//     title: "Homepage - Alan Syvannarath Photographer",
//     description:
//       "Charmed in the field of images in all their forms, it is as natural as possible that Alan wants to share with people the way he sees what surrounds him. As touched by the subtlety of the light on a face as by a grandiose panorama that is displayed before his eyes.",
//     url: "https://alan-photographer/homepage",
//   },
// };

const image1 =
  "https://images.unsplash.com/photo-1504357121897-47698286288d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29c6dcd6a6f6c6a76c101e4336ae7c2d&auto=format&fit=crop&w=2851&q=80";
const image2 =
  "https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2f0390d79969aaf31e155bd1f7138b0&auto=format&fit=crop&w=1275&q=80";
const image3 =
  "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-0.3.5&s=2950e56dc2bba8a65b82f130aa4e47ea&auto=format&fit=crop&w=900&q=60";
const image4 =
  "https://images.unsplash.com/photo-1538982198821-0714ff3d74ba?ixlib=rb-0.3.5&s=0550cf3351896481de327a10971739f1&auto=format&fit=crop&w=1251&q=80";

export default function Homepage({}: Props) {
  const parallaxStyle = {
    minHeight: "100vh",
    background: `url(${image1})`,
    backgroundSize: "cover",
    filter: "blur(0px)",
    strength: 800,
    speed: -10,
  };

  const parallaxStyleTwo = {
    minHeight: "100vh",
    background: `url(${image2})`,
    backgroundSize: "cover",
    filter: "blur(0px)",
    strength: -100,
    speed: -10,
  };

  return (
    <>
      <ParallaxProvider>
        <DrawerAppBar />
        <ParallaxBanner style={parallaxStyle} className={styles.image}>
          <div className={styles.content}>
            <span className={styles.imgTxt}>a trip to Space</span>
          </div>
        </ParallaxBanner>
        <div className={styles.textBox}>
          <h3>First Class Ticket</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            doloribus accusantium, quam odio repudiandae mollitia eos sapiente
            quo labore magnam, dignissimos praesentium blanditiis ratione error
            expedita, incidunt rerum corrupti modi enim commodi maxime veniam!
            Eius repellendus voluptates ducimus perspiciatis officiis adipisci
            quibusdam amet, officia omnis quas id minus ipsam, aliquam qui
            voluptas quo veritatis dolores vero magnam inventore sed numquam
            dignissimos a nisi. Tempore dolorem provident illo natus velit
            temporibus fugiat odio aperiam a sunt et harum autem sequi officiis
            quos distinctio quis nihil, modi eveniet commodi animi non
            accusantium! Nesciunt ut voluptatibus cumque et doloribus nihil
            impedit odio sed.
          </p>
        </div>
        <ParallaxBanner style={parallaxStyleTwo} className={styles.image}>
          <div className={styles.content}>
            <span className={styles.imgTxt}>a trip to Space</span>
          </div>
        </ParallaxBanner>
        <div className={styles.textBox}>
          <h3>First Class Ticket</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            doloribus accusantium, quam odio repudiandae mollitia eos sapiente
            quo labore magnam, dignissimos praesentium blanditiis ratione error
            expedita, incidunt rerum corrupti modi enim commodi maxime veniam!
            Eius repellendus voluptates ducimus perspiciatis officiis adipisci
            quibusdam amet, officia omnis quas id minus ipsam, aliquam qui
            voluptas quo veritatis dolores vero magnam inventore sed numquam
            dignissimos a nisi. Tempore dolorem provident illo natus velit
            temporibus fugiat odio aperiam a sunt et harum autem sequi officiis
            quos distinctio quis nihil, modi eveniet commodi animi non
            accusantium! Nesciunt ut voluptatibus cumque et doloribus nihil
            impedit odio sed.
          </p>
        </div>
        <Footer />
      </ParallaxProvider>
    </>
  );
}
