import type { Metadata } from "next";
import * as React from "react";
import DrawerAppBar from "../../components/navbar/page";
import Link from "next/link";
import styles from "../styles/page.module.css";
import Footer from "../../components/footer/page";

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
    <>
      <DrawerAppBar />
      <main className={styles.innerCenter}>
        <div
          style={{
            marginTop: "4rem",
          }}
        >
          <section
            style={{
              display: "flex",
              padding: "5rem 0 3.75rem",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4
              style={{
                marginBottom: "2.5rem",
                textAlign: "center",
                lineHeight: "2",
              }}
            >
              You like it, you want to talk about it ? Feel free to contact me
            </h4>
            <Link
              href="mailto:maud.rondao@gmail.com"
              style={{
                fontSize: "1rem",
                margin: "0 0 1.875rem",
                textAlign: "center",
              }}
              title="mailbox (new window)"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="mailbox"
                aria-hidden="false"
                style={{ margin: "0 0 20px" }}
              >
                <rect
                  x="6"
                  y="9"
                  width="24"
                  height="18"
                  rx="2"
                  stroke="#222222"
                  stroke-width="2"
                />
                <path
                  d="M6 13.5L17.1056 19.0528C17.6686 19.3343 18.3314 19.3343 18.8944 19.0528L30 13.5"
                  stroke="#222222"
                  stroke-width="2"
                />
              </svg>
              <p>maud.rondao@gmail.com</p>
            </Link>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ margin: "0 0 1.25rem" }}
            >
              <path
                d="M6.67963 4.65371L7.62623 3.70711C8.01675 3.31658 8.64992 3.31658 9.04044 3.70711L12.9596 7.62623C13.3501 8.01675 13.3501 8.64992 12.9596 9.04044L11.3623 10.6377C11.1459 10.8541 11.0923 11.1846 11.2292 11.4583C12.8114 14.6227 15.3773 17.1886 18.5417 18.7708C18.8154 18.9077 19.146 18.8541 19.3623 18.6377L20.9596 17.0404C21.3501 16.6499 21.9832 16.6499 22.3738 17.0404L26.2929 20.9596C26.6834 21.3501 26.6834 21.9832 26.2929 22.3738L25.3463 23.3204C23.2349 25.4317 19.8924 25.6693 17.5037 23.8777L13.6286 20.9714C11.885 19.6638 10.3362 18.115 9.02857 16.3714L6.12226 12.4964C4.33072 10.1076 4.56827 6.76506 6.67963 4.65371Z"
                stroke="#222222"
                stroke-width="2"
              />
            </svg>
            <p>+ 0000000000000000</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
