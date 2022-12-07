import styled from "styled-components";
import catBackground from "../../Assets/Images/catBackground.jpeg";

export const Container = styled.div`
  ${({ row }) =>
    row &&
    `
display:flex;
flex-direction: row;
`}

  ${({ pointer }) =>
    pointer &&
    `
  cursor: pointer;
`}

  ${({ column }) =>
    column &&
    `
display:flex;
flex-direction: column;
`}
${({ justifyCenter }) =>
    justifyCenter &&
    `
justify-content: center;
`}
${({ alignCenter }) =>
    alignCenter &&
    `
    
align-items: center;
`}
${({ justifyEnd }) =>
    justifyEnd &&
    `

justify-content: flex-end;
`}
${({ alignEnd }) =>
    alignEnd &&
    `
align-items: flex-end;
`}
${({ justifyStart }) =>
    justifyStart &&
    `
justify-content: flex-start;
`}
${({ alignStart }) =>
    alignStart &&
    `
align-items: flex-Start;
`}
${({ centered }) =>
    centered &&
    `
display:flex;
justify-content:center;
align-content: center;
align-items:center;
`}
`;

export const Screen = styled(Container)`
  border: 1px solid black;
  background-image: url(${catBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: gilroy;
  color: white;
  font-weight: bold;
  height: 92.8vh;
  padding-top: 9vh;
  padding-left: 4vh;
  padding-right: 4vh;
`;

export const Text = styled(Container)`
  ${({ LandingPageSub }) =>
    LandingPageSub &&
    `
    color: #6d6d6d;
    margin-top: 8vh;
    margin-bottom: 2vh;
    `}
  ${({ LoginPageSub }) =>
    LoginPageSub &&
    `
    color: #6d6d6d;
    margin-bottom: 8vh;
    `}
  ${({ LoginCardText }) =>
    LoginCardText &&
    `
    font-size: 20px;
    `}
    
    ${({ color }) =>
    color &&
    `
    color : ${color} !important;
    `}

    ${({ Subheading }) =>
    Subheading &&
    `
    font-size : 1em;
    color:#8d8d8d;
    `}
`;

export const Spacer = styled(Container)`
  ${({ vertical, size }) =>
    vertical &&
    size &&
    `
      height: ${size}px;
  `}
  ${({ horizontal, size }) =>
    horizontal &&
    size &&
    `
  width: ${size}px;
  `}
`;

export const Hover = styled(Container)`
  ${({ pointer }) =>
    pointer &&
    `
      cursor: pointer;
  `}
`;
