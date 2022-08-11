import React from "react";
import { SwitchContainer } from "./Container";
import { HiddenCheckbox } from "./Inputs";
import { Switch, SwitchButton } from "./Switch";
import Details from "./Details";
import PointsContext from "../context/PointsContext";

export default function InputCheckboxSwitch({
  name,
  descr,
  focus,
  changeFocus,
}) {
  const formFocus = React.useRef(null);
  const context = React.useContext(PointsContext);

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
        context.changeFieldValue(name, false);
        break;
      case "ArrowLeft":
        context.changeFieldValue(name, true);
        break;
      default:
        changeFocus(event);
    }
  }

  return (
    <SwitchContainer name={name} onClick={() => changeFocus("Mouse")}>
      <HiddenCheckbox
        ref={formFocus}
        type="checkbox"
        onKeyUp={(event) => handleKeyPress(event)}
        checked={context[name][0]}
        onChange={(event) => {
          context.changeFieldValue(name, event.target.checked);
        }}
      />
      {leftSideText}
      <Switch>
        <SwitchButton animation={context[name][0]} />
      </Switch>
      {rightSideText}
    </SwitchContainer>
  );
}
