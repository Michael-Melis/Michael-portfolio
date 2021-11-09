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
    color: #2dd1a0;
    border-radius: 50px;
  }
`;

export const StyledResumeMailToButton = styled.div`
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
    border-radius: 50px;
    color: #151515;
    transition: 0.3s ease-in 0.1s;
  }
`;
