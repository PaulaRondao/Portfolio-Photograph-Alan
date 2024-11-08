"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Title } from "../../components/website/global-styles/global.styles";
import { ButtonContainer } from "../../../ui/buttons/button.styles";
import { SectionWithImageWrapper } from "@/components/layoutWelcome/LayoutWelcome.styles";
import LayoutWelcome from "@/components/layoutWelcome/LayoutWelcome";
import Link from "next/link";

const WelcomePage = () => {
  const image =
    "https://images.unsplash.com/photo-1690885732016-f44e973ed3bf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [isClient, setIsClient] = useState(false);

  // Utilisation de useEffect pour indiquer que le code doit s'exécuter après le montage du composant
  useEffect(() => {
    setIsClient(true); // Cela active le rendu côté client
  }, []);

  // Si isClient est false, cela retourne un rendu vide ou un placeholder
  if (!isClient) {
    return null; // Vous pouvez aussi afficher un chargement ici si vous le souhaitez
  }
  return (
    <LayoutWelcome src={image} height="100vh">
      <Title titleColor={true} fontSize="2.986rem">
        Alan Syvannarath
      </Title>
      <p style={{ color: "white" }}>PHOTOGRAPHY</p>
      <Link href="/home" passHref>
        <ButtonContainer border>WELCOME</ButtonContainer>
      </Link>
    </LayoutWelcome>
  );
};

export default WelcomePage;
