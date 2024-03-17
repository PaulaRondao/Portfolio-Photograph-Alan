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
          }}
        >
          <h3 style={{ color: "white", paddingTop: "1rem" }}>
            Hello, sorry, the page you&apos;re looking for, doesn&apos;t exist.
          </h3>
          <h4 style={{ color: "white", paddingTop: "1rem" }}>
            Don&apos;t worry, you can go back at the homepage
          </h4>
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
              type="button"
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
              Go back home
            </Link>
          </button>
        </section>
      </main>
    </>
  );
}
