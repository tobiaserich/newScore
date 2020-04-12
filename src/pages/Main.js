import React from "react";
import styled from "@emotion/styled";
import InputBox from "../components/InputBox";

const Header = styled("div")`
  height: 5%;
`;
export default function Main() {
  return (
    <>
      <Header />
      <InputBox name="AF"></InputBox>
      <InputBox name="SpO2"></InputBox>
      <InputBox name="O2 Gabe?"></InputBox>
      <InputBox name="RR"></InputBox>
      <InputBox name="Puls"></InputBox>
      <InputBox name="Vigilanz"></InputBox>
      <InputBox name="Temp"></InputBox>
    </>
  );
}
