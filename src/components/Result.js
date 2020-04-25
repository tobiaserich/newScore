import styled from "@emotion/styled";
import React from "react";

const ResultContainer = styled("div")`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 2.3rem;
`;

export default function Result({ points }) {
  const [pointsSum, setPointsSum] = React.useState(0);

  React.useEffect(() => {
    const totalPoints =
      points[0].points +
      points[1].points +
      points[2].points +
      points[3].points +
      points[4].points +
      points[5].points +
      points[6].points;

    if (isNaN(totalPoints)) {
      setPointsSum("Error");
    } else setPointsSum(totalPoints);
  }, [points]);
  return <ResultContainer>Score: {pointsSum}</ResultContainer>;
}
