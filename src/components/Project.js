import React from "react";
import styled from "styled-components";

const Project = ({ name, picture, link }) => {
  return (
    <div>
      <StyledProject>
        <h2>{name}</h2>

        <a href={link} target="_blank" rel="noreferrer">
          <img src={picture} alt=" the project" />
        </a>
      </StyledProject>
    </div>
  );
};
const StyledProject = styled.div`
  background-color: #1d1d1d;
  margin: 1rem;
  padding: 2rem;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  h2 {
  }
  a {
    width: 49%;

    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      border-radius: 50px;
      width: 100%;
      height: 100%;
      margin: 0;
      &:hover {
        transition: ease-in-out 1s;
        transform: scale(1.2);
      }
    }
  }
  @media (max-width: 1300px) {
    margin: 1rem 0rem;
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin-bottom: 1rem;
    }
    a {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    }
  }
`;
export default Project;
