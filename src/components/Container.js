import styled from "@emotion/styled";
import { mqh, mqw } from "../assets/mediquery";

const InputContainer = styled("div")`
  display: flex;
  width: 80%;
  min-height: 51px;
  align-items: center;
  justify-content: space-around;
  box-shadow: 1px 1px 4px ${({ theme }) => theme.colors.font};
  border-radius: 5px;
  margin: auto;
  margin-top: 12px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.primary};

  ${mqw("small")} {
    min-height: 60px;
  }
  ${mqh("tall")} {
    margin-top: 15px;
  }
`;

const PointsContainer = styled("div")`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme }) => theme.colors.font};
  font-size: 1.3rem;

  ${mqw("small")} {
    height: 38px;
    width: 38px;
    font-size: 1.5rem;
  }
`;

const SwitchContainer = styled("div")`
  display: flex;
  width: 80px;
  align-items: center;
  margin-right: ${({ name }) => (name === "Vigilanz" ? "50px" : "30px")};
  margin-left: ${({ name }) => (name === "Vigilanz" ? "-20px" : "")};
  color: black;
  font-size: 0.6rem;

  ${mqw("small")} {
    width: 100px;
    margin-right: ${({ name }) => (name === "Vigilanz" ? "30px" : "5px")};
    margin-left: ${({ name }) => (name === "Vigilanz" ? "-40px" : "-17px")};
    font-size: 0.7rem;
  }
  ${mqw("medium")} {
  }
  ${mqw("large")} {
  }
`;
export { InputContainer, PointsContainer, SwitchContainer };
