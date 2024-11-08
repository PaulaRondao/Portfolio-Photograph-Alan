import * as React from "react";
import styles from "../../app/styles/page.module.css";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import {
  ButtonContainer,
  LinkContainer,
} from "../../../ui/buttons/button.styles";
import { Wrapper } from "../layoutWelcome/LayoutWelcome.styles";
import {
  Container,
  ParallaxWrapper,
  ParallaxWrapperHeader,
} from "./parallax.styles";
import { Title } from "../website/global-styles/global.styles";
import Link from "next/link";

type Props = {};

const image1 =
  "https://images.unsplash.com/photo-1504357121897-47698286288d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29c6dcd6a6f6c6a76c101e4336ae7c2d&auto=format&fit=crop&w=2851&q=80";
const image2 =
  "https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2f0390d79969aaf31e155bd1f7138b0&auto=format&fit=crop&w=1275&q=80";
const image3 =
  "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-0.3.5&s=2950e56dc2bba8a65b82f130aa4e47ea&auto=format&fit=crop&w=900&q=60";
const image4 =
  "https://images.unsplash.com/photo-1538982198821-0714ff3d74ba?ixlib=rb-0.3.5&s=0550cf3351896481de327a10971739f1&auto=format&fit=crop&w=1251&q=80";

function ParallaxEffect({}: Props): React.JSX.Element {
  const parallaxStyle = {
    minHeight: "100vh",
    background: `url(${image1})`,
    backgroundSize: "cover",
    filter: "blur(0px)",
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
      <Container>
        <ParallaxBanner
          layers={[{ image: image1, speed: -15 }]}
          style={parallaxStyle}
          className="aspect-[2/1]"
        />
        <ParallaxWrapperHeader>
          <Title>Hello World!</Title>
        </ParallaxWrapperHeader>
        <Parallax speed={-5}>
          <ParallaxWrapper>
            <h4>PHOTOGRAPH</h4>
            <p>
              &quot;I&apos;m touched by the real thing. For as long as I can
              remember, I&apos;ve wanted to preserve life&apos;s moments. I was
              afraid of forgetting. It&apos;s through photography that I hold my
              precious treasures from the past.&quot;
            </p>
          </ParallaxWrapper>
        </Parallax>
        <ParallaxBanner
          layers={[{ image: image2, speed: -15 }]}
          style={parallaxStyleTwo}
          className="aspect-[2/1]"
        />
        <Parallax speed={-5}>
          <ParallaxWrapper>
            <h4>EXPLORE</h4>
            <p>
              &quot;Charmed by the field of images in all its forms, it is as
              naturally as possible that I want to share with people the way I
              see what surrounds me.&quot;
            </p>
          </ParallaxWrapper>
        </Parallax>
        <ParallaxBanner
          layers={[{ image: image3, speed: -15 }]}
          style={parallaxStyleThree}
          className="aspect-[2/1]"
        />
        <ParallaxWrapper
          margin="30px 0 60px 0"
          borderBottom="2px solid #D6D7DD"
        >
          <h4>VIDEOS</h4>
          <p>
            &quot;Charmed by the field of images in all its forms, it is as
            naturally as possible that I want to share with people the way I see
            what surrounds me.&quot;
          </p>
        </ParallaxWrapper>
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
      </Container>
      <ParallaxWrapper margin="3rem 0 5rem 0">
        <Wrapper>
          <Link href="">
            <ButtonContainer>See More</ButtonContainer>
          </Link>
        </Wrapper>
      </ParallaxWrapper>
    </>
  );
}

export default ParallaxEffect;
