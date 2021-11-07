import styled from "styled-components";
export const StyledButton = styled.div`
  text-decoration: none;

  color: #fff;
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 0rem 1rem;
  @media (max-width: 1300px) {
    font-size: 1rem;
    width: 100%;
    padding: 0;
  }

  &:hover {
    background: #1d1d1d;
    border-radius: 50px;
    color: #fff;
  }
`;
