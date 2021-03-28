import React from "react";
import styled from "@emotion/styled";
import InputBox from "../components/InputBox";
import { Button, InfoButton } from "../components/Button";
import Modal from "../components/Modal";
import Result from "../components/Result";
import { mqh } from "../assets/mediquery";
import PointsContext from "../context/PointsContext";
import calculatePoints from "../assets/calculatePoints";
const Header = styled("div")`
  height: 10px;

  ${mqh("tall")} {
    height: 30px;
  }
`;

const Footer = styled("footer")`
  position: absolute;
  bottom: 0;
`;

export default function Main() {
  const initialValues = {
    AF: ["", 0],
    SPO2: ["", 0],
    "O2 Gabe?": [true, 0],
    "RR syst": ["", 0],
    Puls: ["", 0],
    Vigilanz: [true, 0],
    Temp: ["", 0],
  };

  const [infoActive, setInfoActive] = React.useState(false);
  const [focus, setFocus] = React.useState(0);
  const [formFieldValues, setFormFieldValues] = React.useState(initialValues);

  let resetFocus;
  const infoModal = infoActive ? <Modal onClick={setInfoActive} /> : "";

  function handleFocus(event, position) {
    const incrementKeys = ["ArrowDown", "Tab", "Enter"];
    if (event === "Mouse") {
      setFocus(position);
    } else {
      if (event.key === "ArrowUp" && focus > 0) {
        setFocus(focus - 1);
      } else if (incrementKeys.includes(event.key) && focus < 6) {
        setFocus(focus + 1);
      }
    }
  }

  const resetAll = () => {
    setFormFieldValues(initialValues);
  };

  const changeFieldValue = (name, value) => {
    console.log(value);
    const copyState = { ...formFieldValues };
    copyState[name][0] = value;
    copyState[name][1] = calculatePoints(name, value);
    setFormFieldValues(copyState);
  };
  return (
    <>
      <PointsContext.Provider
        value={{ ...formFieldValues, changeFieldValue, focus, handleFocus }}
      >
        <Header />
        <form>
          {Object.keys(formFieldValues).map((field, index) => {
            const description =
              field === "O2 Gabe?"
                ? {
                    left: { first: "nein", second: "" },
                    right: { first: "ja", second: "" },
                  }
                : field === "Vigilanz"
                ? {
                    left: { first: "wach", second: "orientiert" },
                    right: { first: "bewusstlos", second: "verwirrt" },
                  }
                : "";

            return (
              <InputBox
                name={field}
                focus={focus === index ? true : false}
                key={field}
                descr={description}
                position={index}
              />
            );
          })}
        </form>
        <Button onClick={() => resetAll()}>reset all</Button>
        <Result />
      </PointsContext.Provider>
      {infoModal}
      <Footer>
        <InfoButton onClick={() => setInfoActive(true)}>?</InfoButton>
      </Footer>
    </>
  );
}
