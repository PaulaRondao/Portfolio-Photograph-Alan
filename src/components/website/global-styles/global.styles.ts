import styled, { css }from 'styled-components';
import { BREAK_POINT, DEVICE_QUERY } from '../../../../types/enums/viewport';


interface TitleColorProps {
  titleColor?: boolean,
  fontSize?: string,
}

export const Title = styled.h1<TitleColorProps>`
font-size: ${({ fontSize }:TitleColorProps)=> fontSize || '1.875rem'};
color: ${({ titleColor })=> titleColor ? 'white' : '#222021'};
`