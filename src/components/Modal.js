import styled from "@emotion/styled";
import React from "react";
import { mqw } from "../assets/mediquery";
import Content from "./Content";

const FadeOutBackground = styled("div")`
  height: 100%;
  width: 100%;
  max-width: 500px;
  position: absolute;
  bottom: 0;
  z-index: 10;
  animation: popUp 0.2s both;
  @keyframes popUp {
    0% {
    }
    100% {
      background-color: RGBA(255, 255, 255, 90%);
    }
  }
`;

const ContentContainer = styled("div")`
  z-index: 10;
  width: 35px;
  height: 35px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.secondaryAction};
  border-radius: 0px 25px 0px 0px;
  animation: floatToCenter 1s both;
  @keyframes floatToCenter {
    0% {
      bottom: 0;
      height: 35px;
      width: 35px;
      margin-bottom: 0%;
      margin-left: 0%;
    }
    2% {
      bottom: 0;
      border-radius: 50%;
    }
    60% {
      bottom: 0;
      height: 35px;
      width: 35px;
      border-radius: 50%;
      margin-left: 45%;
      margin-bottom: 90%;
    }
    80% {
      border-radius: 0%;
      margin-bottom: 10%;
      height: 500px;
      width: 35px;
    }
    100% {
      border-radius: 10px;
      height: 500px;
      width: 300px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10%;
      left: 0;
      right: 0;
    }
  }
  ${mqw("small")} {
    width: 45px;
    height: 45px;
    border-radius: 0px 35px 0px 0px;
    @keyframes floatToCenter {
      0% {
        bottom: 0;
        height: 45px;
        width: 45px;
        margin-bottom: 0%;
        margin-left: 0%;
      }
      2% {
        bottom: 0;
        border-radius: 50%;
      }
      60% {
        bottom: 0;
        height: 45px;
        width: 45px;
        border-radius: 50%;
        margin-left: 45%;
        margin-bottom: 100%;
      }
      80% {
        border-radius: 0%;
        margin-bottom: 15%;
        height: 80%;
        width: 45px;
      }
      100% {
        border-radius: 10px;
        height: 80%;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        margin-bottom: 15%;
      }
    }
  }
`;

export default function Modal({ onClick }) {
  const [showContent, setShowContent] = React.useState(false);
  const content = showContent ? <Content /> : "";

  function handleClick(event) {
    if (event.target === event.currentTarget) {
      onClick(false);
    }
  }
  return (
    <FadeOutBackground onClick={(event) => handleClick(event)}>
      <ContentContainer onAnimationEnd={() => setShowContent(true)}>
        {content}
      </ContentContainer>
    </FadeOutBackground>
  );
}
