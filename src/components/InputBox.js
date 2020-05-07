import React from "react";
import styled from "@emotion/styled";
import InputCheckboxSwitch from "./InputCheckboxSwitch";
import calculatePoints from "../assets/calculatePoints";
import { InputContainer, PointsContainer } from "./Container";
import Description from "./Description";
import { InputField } from "./Inputs";

const Label = styled("label")`
  :focus {
  }
`;
export default function InputBox({
  name,
  descr,
  fields,
  handlePoints,
  position,
  reset,
  focus,
  onInput,
}) {
  const [value, setValue] = React.useState("");
  const formFocus = React.useRef(null);

  ///calculate points for this inputBox
  React.useEffect(() => {
    const newPoints = calculatePoints(name, value);
    let oldPoints = [...fields];
    oldPoints[position].points = newPoints;
    handlePoints(oldPoints);
  }, [value]);

  /// handle pressed reset button
  React.useEffect(() => {
    setValue("");
  }, [reset]);

  /// toggle focus
  React.useEffect(() => {
    if (focus && formFocus.current) {
      formFocus.current.focus();
      formFocus.current.select();
    }
  }, [focus]);

  const maxLength = name === "Temp" ? "4" : "3";

  /// choose right jsx for each input type
  const inputField =
    name === "Vigilanz" || name === "O2 Gabe?" ? (
      <InputCheckboxSwitch
        onInput={onInput}
        onClick={() => onInput("Mouse", position)}
        focus={focus}
        descr={descr}
        name={name}
        checked={value}
        reset={reset}
        handleChange={setValue}
      />
    ) : (
      <InputField
        onKeyUp={(event) => onInput(event)}
        onClick={() => onInput("Mouse", position)}
        ref={formFocus}
        type="text"
        maxLength={maxLength}
        value={value}
        inputMode="numeric"
        onChange={(event) => setValue(event.target.value)}
      />
    );

  return (
    <Label>
      <InputContainer>
        <Description>{name}</Description>
        {inputField}
        <PointsContainer result={fields[position].points}>
          {fields[position].points}
        </PointsContainer>
      </InputContainer>
    </Label>
  );
}
