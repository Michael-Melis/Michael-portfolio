import styled from "styled-components";
export const StyledButton = styled.div`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;

  font-size: 2rem;
  @media (max-width: 1300px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: #2dd1a0;
  }
`;
