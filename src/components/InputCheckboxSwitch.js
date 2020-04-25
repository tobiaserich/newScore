import React from "react";
import styled from "@emotion/styled";

const SwitchContainer = styled("div")`
  width: 80%;
  position: absolute;
  display: flex;
  align-items: center;
  left: ${({ styleProps, name }) =>
    name === "Vigilanz"
      ? styleProps.position - 6 + "%"
      : parseInt(styleProps.position) + 2 + "%"};
  font-size: ${({ styleProps }) => styleProps.fontSize};
  color: white;
`;

const HiddenCheckbox = styled("input")`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

const Switch = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  height: 10px;
  width: 30px;
  margin-left: 4px;
  margin-right: 4px;
  background-color: white;
  border-radius: 10px;
  box-shadow: inset 0px 2px 4px ${({ theme }) => theme.colors.font};
`;

const SwitchButton = styled("div")`
  width: ${({ styleProps }) => styleProps.buttonRadius};
  height: ${({ styleProps }) => styleProps.buttonRadius};
  padding: 0;
  margin: 0;
  position: relative;
  left: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.4),
    inset -2px -2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  border: none;
  animation: ${({ animation }) =>
    animation === "none"
      ? ""
      : animation
      ? "switch-back 0.1s linear normal forwards"
      : "switch 0.1s linear normal forwards"};

  @keyframes switch {
    0% {
      left: 0;
    }
    100% {
      left: calc(100% - ${({ styleProps }) => styleProps.buttonRadius});
    }
  }
  @keyframes switch-back {
    0% {
      left: calc(100% - ${({ styleProps }) => styleProps.buttonRadius});
    }
    100% {
      left: 0;
    }
  }
`;

const Details = styled("p")`
  margin-top: 2px;
  margin-bottom: 2px;
`;

export default function InputCheckboxSwitch({
  styleProps,
  name,
  descr,
  handleChange,
  checked,
  reset,
}) {
  const [switchStatus, setSwitchStatus] = React.useState("none");
  React.useEffect(() => {
    setSwitchStatus(true);
  }, [reset]);

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
        console.error(`${event.key} is not defined`);
    }
  }

  return (
    <SwitchContainer styleProps={styleProps} name={name}>
      <HiddenCheckbox
        type="checkbox"
        onKeyUp={(event) => handleKeyPress(event)}
        checked={checked}
        onChange={(event) => {
          handleChange(event.target.checked);
          setSwitchStatus(!switchStatus);
        }}
      />
      {leftSideText}
      <Switch styleProps={styleProps}>
        <SwitchButton styleProps={styleProps} animation={switchStatus} />
      </Switch>
      {rightSideText}
    </SwitchContainer>
  );
}
