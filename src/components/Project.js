import React from "react";
import styled from "styled-components";

const Project = ({ name, picture }) => {
  return (
    <div>
      <StyledProject>
        <h2>{name}</h2>
        <img src={picture} alt="" />
      </StyledProject>
    </div>
  );
};
const StyledProject = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin: 2rem 0rem 2rem 5rem;
  img {
    width: 20%;
    border-radius: 20%;
    cursor: pointer;
    &:hover {
      transform: scale(1.3);
      transition: 0.4s ease-in;
    }
  }
`;
export default Project;
