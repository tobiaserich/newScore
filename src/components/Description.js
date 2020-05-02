import styled from "@emotion/styled";
import { mqw } from "../assets/mediquery";

const Description = styled("h2")`
  margin: 0;
  width: 90px;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};

  ${mqw("small")} {
    font-size: 1.38rem;
    width: 100px;
  }
`;

export default Description;
