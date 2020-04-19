import React from "react";
import styled from "@emotion/styled";
import InputCheckboxSwitch from "./InputCheckboxSwitch";
import calculateForWindowWidth from "../assets/calculateForWindowWidth";
import calculatePoints from "../assets/calculatePoints";

const Container = styled("div")`
  width: 80%;
  height: 9%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: left;
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
  left: ${({ styleProps }) => styleProps.position + "%"};
  box-shadow: inset 1px 1px 4px
    ${({ theme }) => theme.colors.fontWithTransparency};
  border-radius: 2px;
  text-align: center;
  font-size: 180%;
`;

const PointsContainer = styled("div")`
  width: ${({ radius }) => (radius / 100) * 55 + "px"};
  height: ${({ radius }) => (radius / 100) * 55 + "px"};
  background-color: yellow;
  position: absolute;
  right: 1.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: ${(fontSize) => fontSize};
`;

export default function InputBox({
  name,
  descr,
  points,
  handlePoints,
  position,
}) {
  const [elementHeight, setElementHeight] = React.useState();
  const [value, setValue] = React.useState("");

  const userWindowWidth = window.innerWidth;
  const fontSize = calculateForWindowWidth(userWindowWidth, "text");
  const InputStyleProperties = {
    height: calculateForWindowWidth(userWindowWidth, "input-height"),
    width: calculateForWindowWidth(userWindowWidth, "input-width"),
    position: calculateForWindowWidth(userWindowWidth, "input-position"),
    buttonRadius: calculateForWindowWidth(userWindowWidth, "button-radius"),
    switchWidth: calculateForWindowWidth(userWindowWidth, "switch-width"),
    fontSize: calculateForWindowWidth(userWindowWidth, "fontSize"),
  };

  function pickInputType(name) {
    switch (name) {
      case "Vigilanz":
      case "O2 Gabe?":
        return (
          <InputCheckboxSwitch
            styleProps={InputStyleProperties}
            descr={descr}
            name={name}
            checked={value}
            handleChange={setValue}
          />
        );
      case "Temp":
        return (
          <InputField
            type="text"
            styleProps={InputStyleProperties}
            maxLength="4"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        );
      default:
        return (
          <InputField
            type="text"
            styleProps={InputStyleProperties}
            maxLength="3"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        );
    }
  }
  function handleRefElementHeight(event) {
    if (event) {
      setElementHeight(parseInt(event.offsetHeight));
    }
  }

  React.useEffect(() => {
    const newPoints = calculatePoints(name, value);
    let oldPoints = [...points];
    oldPoints[position].points = newPoints;
    handlePoints(oldPoints);
  }, [value]);
  const inputField = pickInputType(name);
  return (
    <label>
      <Container ref={(event) => handleRefElementHeight(event)}>
        <Description fontSize={fontSize}>{name}</Description>
        {inputField}
        <PointsContainer radius={elementHeight} fontSize={fontSize}>
          {points[position].points}
        </PointsContainer>
      </Container>
    </label>
  );
}
