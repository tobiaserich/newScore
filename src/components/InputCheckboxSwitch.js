import React from "react";
import { SwitchContainer } from "./Container";
import { HiddenCheckbox } from "./Inputs";
import { Switch, SwitchButton } from "./Switch";
import Details from "./Details";

export default function InputCheckboxSwitch({
  name,
  descr,
  handleChange,
  checked,
  reset,
  focus,
  onInput,
  onClick,
}) {
  const [switchStatus, setSwitchStatus] = React.useState("none");
  const formFocus = React.useRef(null);

  /// handle pressed resetButton
  React.useEffect(() => {
    setSwitchStatus(true);
  }, [reset]);

  /// toggle focus
  React.useEffect(() => {
    if (focus === true) {
      formFocus.current.focus();
    }
  }, [focus]);

  const leftSideText = (
    <section>
      <Details>{descr.left.first}</Details>
      <Details>{descr.left.second}</Details>
    </section>
  );

  const rightSideText = (
    <section>
      <Details>{descr.right.first}</Details>
      <Details>{descr.right.second}</Details>
    </section>
  );

  function handleKeyPress(event) {
    switch (event.key) {
      case "":
        break;
      case "ArrowRight":
        setSwitchStatus(false);
        handleChange(true);
        break;
      case "ArrowLeft":
        setSwitchStatus(true);
        handleChange(false);
        break;
      default:
        onInput(event);
    }
  }

  return (
    <SwitchContainer name={name} onClick={() => onClick()}>
      <HiddenCheckbox
        ref={formFocus}
        type="checkbox"
        onKeyUp={(event) => {
          handleKeyPress(event);
        }}
        checked={checked}
        onChange={(event) => {
          handleChange(event.target.checked);
          setSwitchStatus(!switchStatus);
        }}
      />
      {leftSideText}
      <Switch>
        <SwitchButton animation={switchStatus} />
      </Switch>
      {rightSideText}
    </SwitchContainer>
  );
}
