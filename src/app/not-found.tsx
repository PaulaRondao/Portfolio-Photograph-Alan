import * as React from "react";
import Link from "next/link";
import styles from "./welcome/welcome.module.css";

type Props = {};

export default function NotFound({}: Props) {
  const image =
    "https://images.unsplash.com/photo-1690885732016-f44e973ed3bf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
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
            color: "white",
          }}
        >
          <h1>404</h1>
          <h2>This page got unplugged</h2>
          <h3 style={{ paddingTop: "1rem" }}>
            OOPS ! Looks like you&apos;ve wandered a little too far !
          </h3>
          <h4 style={{ paddingTop: "1rem" }}>
            Please, go back to the homepage
          </h4>
          <button
            type="button"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Link
              href="/home"
              type="button"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "20px",
                letterSpacing: "0.125rem",
                outline: "none",
                // width: "210px",
                padding: "8px 10px 10px 8px",
                textDecoration: "none",
              }}
              className={styles.goBackLink}
            >
              BACK TO HOMEPAGE
            </Link>
          </button>
        </section>
      </main>
    </>
  );
}
