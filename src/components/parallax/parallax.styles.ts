import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flow-root;
  max-width: 1280px;
  min-height: calc(-149px + 100vh);
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  box-sizing: border-box;
`

interface ParallaxWrapperProps {
  margin?: string,
  borderBottom?: string,
}

export const ParallaxWrapper = styled.div<ParallaxWrapperProps>`
  background-color: white;
  height: 200px;
  text-align: center;
  padding: 2rem 1rem;
  ${({ margin }: ParallaxWrapperProps) => margin && css`
  margin: ${margin};
  `}
  ${({ borderBottom }: ParallaxWrapperProps) => borderBottom && css`
  margin: ${borderBottom};
  `}
`

export const ParallaxWrapperHeader = styled.div`
  position: absolute;
  inset: 0;
  textAlign: center;
  left: 0;
  right: 0;
  top: 10%;
`