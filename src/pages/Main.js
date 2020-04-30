import React from "react";
import styled from "@emotion/styled";
import InputBox from "../components/InputBox";
import { Button, InfoButton } from "../components/Button";
import Modal from "../components/Modal";
import Result from "../components/Result";
import { mqh, mqw } from "../assets/mediquery";
const Header = styled("div")`
  height: 10px;

  ${mqh("tall")} {
    height: 30px;
  }
`;

const Footer = styled("footer")`
  height: 35px;
  position: absolute;
  bottom: 0;
  ${mqw("small")} {
    height: 45px;
  }
`;

export default function Main() {
  const [resetValue, setResetValue] = React.useState(false);
  const [infoActive, setInfoActive] = React.useState(false);
  const [focus, setFocus] = React.useState(0);

  const [points, setPoints] = React.useState([
    { name: "AF", points: 0 },
    { name: "SPO2", points: 0 },
    { name: "O2 Gabe?", points: 0 },
    { name: "RR syst", points: 0 },
    { name: "Puls", points: 0 },
    { name: "Vigilanz", points: 0 },
    { name: "Temp", points: 0 },
  ]);

  const infoModal = infoActive ? <Modal onClick={setInfoActive} /> : "";
  function handleKeyPress(event, position) {
    if (event === "Mouse") {
      setFocus(position);
    } else {
      if (event.key === "ArrowUp" && focus >= 0) {
        setFocus(focus - 1);
        console.log(focus);
      } else if (event.key === "ArrowDown" && focus <= 7) {
        setFocus(focus + 1);
      }
    }
  }
  return (
    <>
      <Header></Header>
      <form>
        {points.map((field, index) => {
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
              onKeyUp={handleKeyPress}
              focus={focus === index ? true : false}
              key={field.name}
              name={field.name}
              descr={description}
              points={points}
              handlePoints={setPoints}
              position={index}
              reset={resetValue}
            />
          );
        })}
      </form>
      <Button onClick={() => setResetValue(!resetValue)}>reset all</Button>

      <Result points={points} />
      <Footer>
        <InfoButton onClick={() => setInfoActive(true)}>?</InfoButton>
      </Footer>
      {infoModal}
    </>
  );
}
