import React from "react";
import Project from "../components/Project";
import music from "../img/Music.png";
import capture from "../img/Capture.png";
import styled from "styled-components";

const Work = () => {
  return (
    <StyledWork>
      <h1>Portfolio</h1>
      <Project name="Capture" picture={capture} />
      <Project name="Music app" picture={music} />
    </StyledWork>
  );
};

const StyledWork = styled.div`
  min-height: 60vh;
  h1 {
    margin: 2rem 0rem 0rem 10rem;
    color: #fff;
  }
`;

export default Work;
