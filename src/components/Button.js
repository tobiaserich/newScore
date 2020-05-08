import styled from "@emotion/styled";
import { mqw } from "../assets/mediquery";

const Button = styled("button")`
  display: flex;
  justify-content: center;
  width: 39%;
  height: 4%;
  font-size: 1.7rem;
  margin: auto;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.colors.secondaryAction};
  border: none;
  border-radius: 20px;
  padding: 3px;
  :focus {
    box-shadow: 0 0 5px 1px #4ca48e;
    outline: none;
    ::-moz-focus-inner {
      border: 0;
    }
  }
`;

const InfoButton = styled("button")`
  width: 35px;
  height: 35px;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondaryAction};
  border: none;
  padding-left: 0px;
  border-radius: 0px 25px 0px 0px;
  font-weight: 600;
  font-size: 1.1rem;
  ${mqw("small")} {
    width: 45px;
    height: 45px;
    border-radius: 0px 35px 0px 0px;
    font-size: 1.3rem;
    padding-top: 3px;
  }
`;

const ExitButton = styled("button")`
  height: 30px;
  width: 30px;
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  border: none;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.secondaryAction};
`;
export { Button, InfoButton, ExitButton };
