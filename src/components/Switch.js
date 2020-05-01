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

export { Switch, SwitchButton };
