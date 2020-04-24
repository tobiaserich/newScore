import styled from "@emotion/styled";

const Button = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 4%;
  font-size: 1.3rem;
  margin: auto;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.action};
  border: none;
  border-radius: 20px;
`;

export default Button;
