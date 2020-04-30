import React from "react";
import styled from "@emotion/styled";
import InputCheckboxSwitch from "./InputCheckboxSwitch";
import calculatePoints from "../assets/calculatePoints";
import { mqw, mqh } from "../assets/mediquery";

const Container = styled("div")`
  width: 80%;
  min-height: 51px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 1px 1px 4px ${({ theme }) => theme.colors.font};
  border-radius: 5px;
  margin: auto;
  margin-top: 12px;
  padding: 5px;

  ${mqw("small")} {
    min-height: 60px;
  }
  ${mqw("medium")} {
  }
  ${mqw("large")} {
  }
  ${mqh("tall")} {
    margin-top: 15px;
  }
`;

const Description = styled("h2")`
  margin: 0;
  width: 90px;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};

  ${mqw("small")} {
    font-size: 1.38rem;
    width: 100px;
  }
  ${mqw("medium")} {
  }
  ${mqw("large")} {
  }
`;

const InputField = styled("input")`
  width: 75px;
  height: 28px;
  margin-right: 30px;
  box-shadow: inset 1px 1px 4px
    ${({ theme }) => theme.colors.fontWithTransparency};
  border-radius: 2px;
  text-align: center;
  font-size: 1.3rem;

  ${mqw("small")} {
    width: 80px;
    height: 32px;
    margin-left: -20px;
  }
  ${mqw("medium")} {
  }
  ${mqw("large")} {
  }
`;

const PointsContainer = styled("div")`
  width: 30px;
  height: 30px;
  background-color: ${({ result, theme }) =>
    result === 0
      ? theme.colors.fontInverted
      : result === 1
      ? theme.colors.status3
      : result === 2
      ? theme.colors.status2
      : theme.colors.status1};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.font};

  ${mqw("small")} {
    height: 38px;
    width: 38px;
    font-size: 1.5rem;
  }
  ${mqw("medium")} {
  }
  ${mqw("large")} {
  }
`;

export default function InputBox({
  name,
  descr,
  points,
  handlePoints,
  position,
  reset,
  focus,
  onKeyUp,
}) {
  const [value, setValue] = React.useState("");
  const formFocus = React.useRef(null);
  function pickInputType(name) {
    switch (name) {
      case "Vigilanz":
      case "O2 Gabe?":
        return (
          <InputCheckboxSwitch
            onKeyup={onKeyUp}
            onClick={() => onKeyUp("Mouse", position)}
            focus={focus}
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
            onKeyUp={(event) => onKeyUp(event)}
            onClick={() => onKeyUp("Mouse", position)}
            ref={formFocus}
            type="text"
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
            onKeyUp={(event) => onKeyUp(event)}
            onClick={() => onKeyUp("Mouse", position)}
            ref={formFocus}
            type="text"
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
    setValue("");
  }, [reset]);

  React.useEffect(() => {
    if (focus && formFocus.current) {
      formFocus.current.focus();
    }
  }, [focus]);

  const inputField = pickInputType(name);
  return (
    <label>
      <Container>
        <Description>{name}</Description>
        {inputField}
        <PointsContainer result={points[position].points}>
          {points[position].points}
        </PointsContainer>
      </Container>
    </label>
  );
}
