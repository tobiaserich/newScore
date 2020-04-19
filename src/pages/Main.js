import React from "react";
import styled from "@emotion/styled";
import InputBox from "../components/InputBox";

const Header = styled("div")`
  height: 5%;
`;
export default function Main() {
  const [points, setPoints] = React.useState([
    { name: "AF", points: "0" },
    { name: "SPO2", points: "0" },
    { name: "O2 Gabe?", points: "0" },
    { name: "RR syst", points: "0" },
    { name: "Puls", points: "0" },
    { name: "Vigilanz", points: "0" },
    { name: "Temp", points: "0" },
  ]);
  return (
    <>
      <Header />
      {points.map((field, index) => {
        const description =
          field.name === "O2 Gabe?"
            ? {
                left: { first: "ja", second: "" },
                right: { first: "nein", second: "" },
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
          />
        );
      })}
    </>
  );
}
