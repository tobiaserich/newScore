import React from "react";
import styled from "@emotion/styled";
import InputCheckboxSwitch from "./InputCheckboxSwitch";
import calculateForWindowWidth from "../assets/calculateForWindowWidth";
import calculatePoints from "../assets/calculatePoints";

const Container = styled("div")`
  width: 80%;
  min-height: 51px;
  height: ${(height) => height + "px"};

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
  width: ${({ containerRadius }) => (containerRadius / 100) * 55 + "px"};
  height: ${({ containerRadius }) => (containerRadius / 100) * 55 + "px"};
  background-color: ${({ result, theme }) =>
    result === 0
      ? theme.colors.fontInverted
      : result === 1
      ? theme.colors.status3
      : result === 2
      ? theme.colors.status2
      : theme.colors.status1};
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
  reset,
}) {
  const [elementHeight, setElementHeight] = React.useState();
  const [windowHeight, setWindowHeight] = React.useState();
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
            reset={reset}
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
            pattern="[0-9]*"
            inputMode="numeric"
          />
        );
      default:
        return (
          <InputField
            type="text"
            styleProps={InputStyleProperties}
            maxLength="3"
            value={value}
            inputMode="numeric"
            onChange={(event) => setValue(event.target.value)}
          />
        );
    }
  }

  React.useEffect(() => {
    const newPoints = calculatePoints(name, value);
    let oldPoints = [...points];
    oldPoints[position].points = newPoints;
    handlePoints(oldPoints);
  }, [value]);

  React.useEffect(() => {
    setElementHeight((window.screen.height / 100) * 9);
  }, []);

  React.useEffect(() => {
    setValue("");
  }, [reset]);

  const inputField = pickInputType(name);
  return (
    <label>
      <Container height={elementHeight}>
        <Description fontSize={fontSize}>{name}</Description>
        {inputField}
        <PointsContainer
          containerRadius={elementHeight}
          result={points[position].points}
          fontSize={fontSize}
        >
          {points[position].points}
        </PointsContainer>
      </Container>
    </label>
  );
}
