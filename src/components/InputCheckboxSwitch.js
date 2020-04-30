import React from "react";
import styled from "@emotion/styled";
import { mqw } from "../assets/mediquery";

const SwitchContainer = styled("div")`
  width: 80px;
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  margin-right: ${({ name }) => (name === "Vigilanz" ? "50px" : "30px")};
  margin-left: ${({ name }) => (name === "Vigilanz" ? "-20px" : "")};
  color: black;

  ${mqw("small")} {
    width: 100px;
    font-size: 0.7rem;
    margin-right: ${({ name }) => (name === "Vigilanz" ? "30px" : "5px")};
    margin-left: ${({ name }) => (name === "Vigilanz" ? "-40px" : "-17px")};
  }
  ${mqw("medium")} {
  }
  ${mqw("large")} {
  }
`;

const HiddenCheckbox = styled("input")`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

const Switch = styled("div")`
  display: flex;
  align-items: center;
  height: 10px;
  min-width: 30px;
  margin-left: 4px;
  margin-right: 4px;
  background-color: white;
  border-radius: 10px;
  box-shadow: inset 0px 2px 4px ${({ theme }) => theme.colors.font};
`;

const SwitchButton = styled("div")`
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.action};
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

  ${mqw("small")} {
    height: 17px;
    width: 17px;
    font-size: 1.5rem;
  }
  ${mqw("medium")} {
  }
  ${mqw("large")} {
  }

  @keyframes switch {
    0% {
      left: 0;
    }
    100% {
      left: calc(100% - 15px);
    }
  }
  @keyframes switch-back {
    0% {
      left: calc(100% - 15px);
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
  name,
  descr,
  handleChange,
  checked,
  reset,
  focus,
  onKeyup,
}) {
  const [switchStatus, setSwitchStatus] = React.useState("none");
  const formFocus = React.useRef(null);

  React.useEffect(() => {
    setSwitchStatus(true);
  }, [reset]);

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
    }
  }

  return (
    <SwitchContainer name={name}>
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
