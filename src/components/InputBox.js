import React from "react";
import styled from "@emotion/styled";
import calculateForWindowWidth from "../assets/calculateForWindowWidth";

const Container = styled("div")`
  width: 80%;
  height: 9%;
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 1px 1px 4px ${({ theme }) => theme.colors.font};
  border-radius: 2px;
  margin: auto;
  margin-top: 3%;
  padding: 1.5%;
`;

const Description = styled("h2")`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.fontInverted};
`;

const InputField = styled("input")`
  width: ${({ styleProps }) => styleProps.width};
  height: ${({ styleProps }) => styleProps.height};
  position: absolute;
  left: ${({ styleProps }) => styleProps.position};
  box-shadow: inset 1px 1px 4px
    ${({ theme }) => theme.colors.fontWithTransparency};
  border-radius: 2px;
  text-align: center;
  font-size: 180%;
`;

export default function InputBox({ name }) {
  const userWindowWidth = window.innerWidth;
  const fontSize = calculateForWindowWidth(userWindowWidth, "h2");

  const InputStyleProperties = {
    height: calculateForWindowWidth(userWindowWidth, "input-height"),
    width: calculateForWindowWidth(userWindowWidth, "input-width"),
    position: calculateForWindowWidth(userWindowWidth, "input-position"),
  };

  return (
    <Container>
      <Description fontSize={fontSize}>{name}</Description>
      <InputField styleProps={InputStyleProperties} type="text" maxLength="3" />
    </Container>
  );
}
