import React from "react";
import InputCheckboxSwitch from "./InputCheckboxSwitch";
import calculatePoints from "../assets/calculatePoints";
import { InputContainer, PointsContainer } from "./Container";
import Description from "./Description";
import { InputField } from "./Inputs";
import PointsContext from "../context/PointsContext";

export default function InputBox({ name, descr, position, focus }) {
  const [value, setValue] = React.useState("");
  const formFocus = React.useRef(null);
  const context = React.useContext(PointsContext);

  /// toggle focus
  React.useEffect(() => {
    if (focus && formFocus.current) {
      formFocus.current.focus();
      formFocus.current.select();
    }
  }, [focus]);

  /// choose right jsx for each input type
  const inputField =
    name === "Vigilanz" || name === "O2 Gabe?" ? (
      <InputCheckboxSwitch
        changeFocus={(event) => context.handleFocus(event, position)}
        focus={focus}
        descr={descr}
        name={name}
      />
    ) : (
      <InputField
        onKeyUp={(event) => context.handleFocus(event)}
        onClick={() => context.handleFocus("Mouse", position)}
        onChange={(event) => context.changeFieldValue(name, event.target.value)}
        ref={formFocus}
        maxLength={name === "Temp" ? "4" : "3"}
        value={context[name][0]}
        type="text"
        inputMode="numeric"
      />
    );

  return (
    <label>
      <InputContainer>
        <Description>{name}</Description>
        {inputField}
        <PointsContainer result={context[name][1]}>
          {context[name][1]}
        </PointsContainer>
      </InputContainer>
    </label>
  );
}
