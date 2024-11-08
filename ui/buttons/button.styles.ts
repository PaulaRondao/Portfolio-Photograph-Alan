import styled, { css } from 'styled-components';

interface ButtonContainerProps {
  border?: boolean,
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  cursor: pointer;
  border-radius: 2px;
  color: #222021;
  border: ${({ border }:ButtonContainerProps) => border ? 'none' : '2px solid #222021'};
  padding: 10px;
  background-color: white;
  letter-spacing: 0.125rem;
  width: 130px;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, border 0.3s ease-in-out;
  
  text-decoration: none;
  font-weight: bold;

    &:hover {
      color: white;
      background-color: #222021;
    }

    &:focus {
      color: white;
      background-color: #222021;
      border: solid 2px white;
    }

    &:disabled {
      color: white;
      background-color: #222021;
      border: solid 2px white;
      cursor: not-allowed;
    }
`;

export const LinkContainer = styled(ButtonContainer).attrs({ as: 'a' })`
  text-decoration: none;
  font-size: 0.833rem;
  outline: none;
`;

// <button
//             type="button"
//             style={{
//               textAlign: "center",
//             }}
//           >
//             <Link
//               href="/about"
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 fontSize: "1rem",
//                 letterSpacing: "0.100rem",
//                 outline: "none",
//                 width: "130px",
//                 padding: "15px 10px 15px 10px",
//                 border: "2px solid #222021",
//                 borderRadius: "2px",
//                 textDecoration: "none",
//                 color: "#222021",
//                 fontWeight: "bold",
//               }}
            