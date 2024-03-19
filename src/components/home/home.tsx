"use client";

import * as React from "react";
import styles from "../../app/styles/page.module.css";
import DrawerAppBar from "../navbar/page";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import Link from "next/link";
import Footer from "../footer/page";

type Props = {};

const image1 =
  "https://images.unsplash.com/photo-1504357121897-47698286288d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29c6dcd6a6f6c6a76c101e4336ae7c2d&auto=format&fit=crop&w=2851&q=80";
const image2 =
  "https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2f0390d79969aaf31e155bd1f7138b0&auto=format&fit=crop&w=1275&q=80";
const image3 =
  "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-0.3.5&s=2950e56dc2bba8a65b82f130aa4e47ea&auto=format&fit=crop&w=900&q=60";
const image4 =
  "https://images.unsplash.com/photo-1538982198821-0714ff3d74ba?ixlib=rb-0.3.5&s=0550cf3351896481de327a10971739f1&auto=format&fit=crop&w=1251&q=80";

export default function Home({}: Props) {
  const parallaxStyle = {
    minHeight: "100vh",
    background: `url(${image1})`,
    backgroundSize: "cover",
    filter: "blur(0px)",
    // strength: 800,
  };

  const parallaxStyleTwo = {
    minHeight: "100vh",
    background: `url(${image2})`,
    backgroundSize: "cover",
    filter: "blur(0px)",
    marginTop: "70px",
  };

  const parallaxStyleThree = {
    minHeight: "100vh",
    background: `url(${image3})`,
    backgroundSize: "cover",
    filter: "blur(0px)",
    marginTop: "70px",
  };

  return (
    <>
      <DrawerAppBar />
      <main className={styles.innerCenter}>
        <ParallaxBanner
          layers={[{ image: image1, speed: -15 }]}
          style={parallaxStyle}
          className="aspect-[2/1]"
        />
        <div
          style={{
            position: "absolute",
            inset: "0",
            textAlign: "center",
            left: "0",
            right: "0",
            top: "10%",
          }}
        >
          <h1
            style={{
              fontSize: "30px",
              color: "black",
            }}
          >
            Hello World!
          </h1>
        </div>
        <Parallax speed={-5}>
          <div
            className={styles.parallaxContent}
            style={{
              backgroundColor: "white",
              height: "200px",
              textAlign: "center",
              padding: "2rem 1rem",
            }}
          >
            <h4>PHOTOGRAPH</h4>
            <p>
              &quot;I&apos;m touched by the real thing. For as long as I can
              remember, I&apos;ve wanted to preserve life&apos;s moments. I was
              afraid of forgetting. It&apos;s through photography that I hold my
              precious treasures from the past.&quot;
            </p>
          </div>
        </Parallax>
        <ParallaxBanner
          layers={[{ image: image2, speed: -15 }]}
          style={parallaxStyleTwo}
          className="aspect-[2/1]"
        />
        <Parallax speed={-5}>
          <div
            className={styles.parallaxContent}
            style={{
              backgroundColor: "white",
              height: "200px",
              textAlign: "center",
              padding: "2rem 1rem",
            }}
          >
            <h4>EXPLORE</h4>
            <p>
              &quot;Charmed by the field of images in all its forms, it is as
              naturally as possible that I want to share with people the way I
              see what surrounds me.&quot;
            </p>
          </div>
        </Parallax>
        <ParallaxBanner
          layers={[{ image: image3, speed: -15 }]}
          style={parallaxStyleThree}
          className="aspect-[2/1]"
        />
        <div
          className={styles.parallaxContent}
          style={{
            backgroundColor: "white",
            height: "200px",
            textAlign: "center",
            padding: "1rem 1rem",
            borderBottom: "2px solid #D6D7DD",
            margin: "30px 0 60px 0",
          }}
        >
          <h4>VIDEOS</h4>
          <p>
            &quot;Charmed by the field of images in all its forms, it is as
            naturally as possible that I want to share with people the way I see
            what surrounds me.&quot;
          </p>
        </div>
        <section>
          <h3 style={{ marginBottom: "2rem" }}>TRAVEL INSPIRATION</h3>
          <p style={{ marginBottom: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur. Rhoncus vestibulum duis
            nulla lacus. Turpis id amet egestas aliquam elementum gravida
            phasellus nibh feugiat.
          </p>
          <aside
            style={{ marginBottom: "2rem", borderLeft: "2px solid black" }}
          >
            <p style={{ padding: "1rem" }}>
              “Lorem ipsum dolor sit amet consectetur. Rhoncus vestibulum duis
              nulla lacus. Turpis id amet egestas aliquam elementum gravida
              phasellus nibh feugiat.”
            </p>
          </aside>
          <p>
            Lorem ipsum dolor sit amet consectetur. Rhoncus vestibulum duis
            nulla lacus. Turpis id amet egestas aliquam elementum gravida
            phasellus nibh feugiat. Lorem ipsum dolor sit amet consectetur.
            Rhoncus vestibulum duis nulla lacus. Turpis id amet egestas aliquam
            elementum gravida phasellus nibh feugiat.
          </p>
        </section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "3rem 0 5rem 0",
          }}
        >
          <button
            type="button"
            style={{
              textAlign: "center",
            }}
          >
            <Link
              href="/home"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "1rem",
                letterSpacing: "0.100rem",
                outline: "none",
                width: "130px",
                padding: "15px 10px 15px 10px",
                border: "2px solid #222021",
                borderRadius: "2px",
                textDecoration: "none",
                color: "#222021",
                fontWeight: "bold",
              }}
            >
              See more
            </Link>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
