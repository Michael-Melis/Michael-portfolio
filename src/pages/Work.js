import React from "react";
import Project from "../components/Project";
import music from "../img/Music.png";
import capture from "../img/Capture.png";
import styled from "styled-components";

const Work = () => {
  return (
    <StyledWork id="work">
      <h1>My Work</h1>
      <Project
        name="Capture"
        picture={capture}
        link="https://capture-portfolio.herokuapp.com/"
      />
      <Project
        name="Music app"
        picture={music}
        link="https://music-app169.herokuapp.com/"
      />
    </StyledWork>
  );
};

const StyledWork = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;

  min-height: 90vh;
  margin: 4rem 10rem 4rem 10rem;
  @media (max-width: 1300px) {
    margin: 1rem 0rem;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    h1 {
      margin-bottom: 2rem;
    }
  }
`;

export default Work;
