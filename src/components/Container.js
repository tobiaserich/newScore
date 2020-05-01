import styled from "@emotion/styled";
import { mqh, mqw } from "../assets/mediquery";

const InputContainer = styled("div")`
  width: 80%;
  min-height: 51px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 1px 1px 4px ${({ theme }) => theme.colors.font};
  border-radius: 5px;
  margin: auto;
  margin-top: 12px;
  padding: 5px;

  ${mqw("small")} {
    min-height: 60px;
  }
  ${mqh("tall")} {
    margin-top: 15px;
  }
`;

const PointsContainer = styled("div")`
  width: 30px;
  height: 30px;
  background-color: ${({ result, theme }) =>
    result === 0
      ? theme.colors.fontInverted
      : result === 1
      ? theme.colors.status3
      : result === 2
      ? theme.colors.status2
      : theme.colors.status1};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.font};

  ${mqw("small")} {
    height: 38px;
    width: 38px;
    font-size: 1.5rem;
  }
`;

const SwitchContainer = styled("div")`
  width: 80px;
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  margin-right: ${({ name }) => (name === "Vigilanz" ? "50px" : "30px")};
  margin-left: ${({ name }) => (name === "Vigilanz" ? "-20px" : "")};
  color: black;

  ${mqw("small")} {
    width: 100px;
    font-size: 0.7rem;
    margin-right: ${({ name }) => (name === "Vigilanz" ? "30px" : "5px")};
    margin-left: ${({ name }) => (name === "Vigilanz" ? "-40px" : "-17px")};
  }
  ${mqw("medium")} {
  }
  ${mqw("large")} {
  }
`;
export { InputContainer, PointsContainer, SwitchContainer };
