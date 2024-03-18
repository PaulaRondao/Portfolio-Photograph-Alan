"use client";

import * as React from "react";
import DrawerAppBar from "../navbar/page";
import Image from "next/image";
import photo from "../../../public/photo.png";
import styles from "../../app/styles/page.module.css";
import Footer from "../footer/page";
import Link from "next/link";

type Props = {};

export default function About({}: Props) {
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
              alignItems: "baseline",
            }}
          >
            <div style={{ margin: "auto" }}>
              <Image
                src={photo}
                alt="photo de profil"
                width={400}
                height={579}
              />
            </div>

            <div>
              <div
                style={{
                  maxWidth: "470px",
                  width: "100%",
                  margin: "auto",
                  marginBottom: "30px",
                }}
              >
                <h1 style={{ marginBottom: "1rem" }}>Hello! I&apos;m Alan</h1>
                <p style={{ marginBottom: "1rem" }}>
                  Lorem ipsum dolor sit amet consectetur. Rhoncus vestibulum
                  duis nulla lacus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rhoncus vestibulum
                  duis nulla lacus. Turpis id amet egestas aliquam
                </p>
              </div>
              <div>
                <p>collapsible</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "3rem 0 3rem 0",
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
              Let&apos;s talk
            </Link>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
