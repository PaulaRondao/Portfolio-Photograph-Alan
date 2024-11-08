import React, { Children, DetailedHTMLProps, HTMLAttributes } from "react";
import { SectionWithImageWrapper, Wrapper } from "./LayoutWelcome.styles";

interface LayoutWelcomeProps {
  src?: string;
  height?: string;
  children: React.ReactNode;
}

const LayoutWelcome = ({ src, height, children }: LayoutWelcomeProps) => (
  <SectionWithImageWrapper src={src}>
    <Wrapper height={height}>{children}</Wrapper>
  </SectionWithImageWrapper>
);

LayoutWelcome.defaultProps = {
  src: null,
  height: null,
};

export default LayoutWelcome;
