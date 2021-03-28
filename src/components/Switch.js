import styled from "@emotion/styled";
import { mqw } from "../assets/mediquery";

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
  background-color: ${({ theme }) => theme.colors.action};
  box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.4),
    inset -2px -2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  border: none;
  animation: ${({ animation }) =>
    animation
      ? "switch-back 0.1s linear normal forwards"
      : "switch 0.1s linear normal forwards"};

  ${mqw("small")} {
    height: 17px;
    width: 17px;
    font-size: 1.5rem;
  }

  @keyframes switch {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(90%);
    }
  }
  @keyframes switch-back {
    0% {
      transform: translateX(calc(90%));
    }
    100% {
      transform: translateX(calc(0%));
    }
  }
`;

export { Switch, SwitchButton };
