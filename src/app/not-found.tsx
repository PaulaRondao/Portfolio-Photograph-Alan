import * as React from "react";
import Link from "next/link";

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
          <h4 style={{ color: "white", paddingTop: "1rem" }}>
            Hello, sorry, the page you&apos;re looking for, doesn&apos;t exist
            but don&apos;t worry, you can go back at the homepage
          </h4>
          <button
            type="button"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10rem",
            }}
          >
            <Link href="/home">Par ici</Link>
          </button>
        </section>
      </main>
    </>
  );
}
