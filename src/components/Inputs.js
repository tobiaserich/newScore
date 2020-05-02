import styled from "@emotion/styled";
import { mqw } from "../assets/mediquery";

const InputField = styled("input")`
  width: 75px;
  height: 28px;
  margin-right: 30px;
  box-shadow: inset 1px 1px 4px
    ${({ theme }) => theme.colors.fontWithTransparency};
  border-radius: 2px;
  text-align: center;
  font-size: 1.3rem;

  ${mqw("small")} {
    width: 80px;
    height: 32px;
    margin-left: -20px;
  }
`;

const HiddenCheckbox = styled("input")`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
export { InputField, HiddenCheckbox };
