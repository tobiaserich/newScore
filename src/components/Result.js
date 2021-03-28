import styled from "@emotion/styled";
import React from "react";
import { mqw } from "../assets/mediquery";
import PointsContext from "../context/PointsContext";

const ResultContainer = styled("div")`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  ${mqw("small")} {
    font-size: 2.3rem;
    margin-top: 15px;
  }
`;

export default function Result({ points }) {
  const [pointsSum, setPointsSum] = React.useState(0);
  const context = React.useContext(PointsContext);

  React.useEffect(() => {
    const totalPoints =
      context["AF"][1] +
      context["SPO2"][1] +
      context["O2 Gabe?"][1] +
      context["RR syst"][1] +
      context["Puls"][1] +
      context["Vigilanz"][1] +
      context["Temp"][1];

    if (isNaN(totalPoints)) {
      setPointsSum("Only Numbers allowed");
    } else if (totalPoints === pointsSum) {
      return;
    } else {
      setPointsSum(totalPoints);
    }
  }, [context]);

  return <ResultContainer>Score: {pointsSum}</ResultContainer>;
}
