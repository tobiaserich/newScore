import React from "react";
import styled from "@emotion/styled";
import InputBox from "../components/InputBox";
import { Button, InfoButton } from "../components/Button";
import Modal from "../components/Modal";
import Result from "../components/Result";
import { mqh } from "../assets/mediquery";

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
  const [reset, setReset] = React.useState(false);
  const [infoActive, setInfoActive] = React.useState(false);
  const [focus, setFocus] = React.useState(0);
  const [formFields, setFormFields] = React.useState([
    { name: "AF", points: 0 },
    { name: "SPO2", points: 0 },
    { name: "O2 Gabe?", points: 0 },
    { name: "RR syst", points: 0 },
    { name: "Puls", points: 0 },
    { name: "Vigilanz", points: 0 },
    { name: "Temp", points: 0 },
  ]);
  const infoModal = infoActive ? <Modal onClick={setInfoActive} /> : "";

  function handleInputPress(event, position) {
    if (event === "Mouse") {
      setFocus(position);
    } else {
      if (event.key === "ArrowUp" && focus > 0) {
        setFocus(focus - 1);
        console.log(focus);
      } else if (event.key === "ArrowDown" && focus < 6) {
        setFocus(focus + 1);
      }
    }
  }

  return (
    <>
      <Header />
      <form>
        {formFields.map((field, index) => {
          const description =
            field.name === "O2 Gabe?"
              ? {
                  left: { first: "nein", second: "" },
                  right: { first: "ja", second: "" },
                }
              : field.name === "Vigilanz"
              ? {
                  left: { first: "wach", second: "orientiert" },
                  right: { first: "bewusstlos", second: "verwirrt" },
                }
              : "";

          return (
            <InputBox
              onInput={handleInputPress}
              focus={focus === index ? true : false}
              key={field.name}
              name={field.name}
              descr={description}
              fields={formFields}
              handlePoints={setFormFields}
              position={index}
              reset={reset}
            />
          );
        })}
      </form>
      <Button onClick={() => setReset(!reset)}>reset all</Button>

      <Result points={formFields} />
      {infoModal}
      <Footer>
        <InfoButton onClick={() => setInfoActive(true)}>?</InfoButton>
      </Footer>
    </>
  );
}
