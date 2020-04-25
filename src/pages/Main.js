import React from "react";
import styled from "@emotion/styled";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Result from "../components/Result";

const Header = styled("div")`
  height: 10px;
`;
export default function Main() {
  const [resetValue, setResetValue] = React.useState(false);
  const [points, setPoints] = React.useState([
    { name: "AF", points: 0 },
    { name: "SPO2", points: 0 },
    { name: "O2 Gabe?", points: 0 },
    { name: "RR syst", points: 0 },
    { name: "Puls", points: 0 },
    { name: "Vigilanz", points: 0 },
    { name: "Temp", points: 0 },
  ]);

  return (
    <>
      <Header />
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
    </>
  );
}
