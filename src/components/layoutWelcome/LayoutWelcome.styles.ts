import styled, { css } from 'styled-components';

type SectionWithImageWrapperProps = {
  src?: string,
}

export const SectionWithImageWrapper = styled.div`
  ${({ src }: SectionWithImageWrapperProps) => src && css`
    min-height: 100vh;
    width: 100%;
    background-image: url(${src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  `}
`;

interface WrapperProps {
  height?: string,
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 6 rem;
  gap: 16px;
  ${({ height }: WrapperProps) => height && css`
  min-height: 100vh`};

`