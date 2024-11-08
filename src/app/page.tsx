// import type { Metadata } from "next";

import WelcomePage from "@/app/welcome/page";

// export const metadata: Metadata = {
//   title: "Welcome - Alan Syvannarath Photographer",
//   description:
//     "Photographer and explorer. Travel photographer who tells stories through images…",
//   metadataBase: new URL("https://alan-photographer/welcome"),
//   alternates: {
//     canonical: "https://alan-photographer/welcome",
//   },
//   openGraph: {
//     title: "Welcome - Alan Syvannarath Photographer",
//     description:
//       "Photographer and explorer. Travel photographer who tells stories through images…",
//     url: "https://alan-photographer/welcome",
//   },
// };

export default function Welcome(): JSX.Element {
  return <WelcomePage />;
}
