import styled from "@emotion/styled";
import { mqw } from "../assets/mediquery";

const Description = styled("h2")`
  width: 90px;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};
  font-size: 1.3rem;
  font-weight: 400;

  ${mqw("small")} {
    width: 100px;
    font-size: 1.38rem;
  }
`;

export default Description;
