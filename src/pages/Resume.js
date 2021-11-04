import React from "react";
import resume from "../img/cv.png";
import styled from "styled-components";

const Resume = () => {
  return (
    <StyledResume id="resume">
      <h1>Resume</h1>
      <img src={resume} alt="cv" />
    </StyledResume>
  );
};
const StyledResume = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  object-fit: cover;

  margin: 5rem 10rem;
  @media (max-width: 1300px) {
    display: flex;
    margin: 3rem 2rem;
    img {
      max-width: 100%;
      height: auto;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
export default Resume;
