import React from "react";
import Project from "../components/Project";
import music from "../img/Music.png";
import capture from "../img/Capture.png";
import styled from "styled-components";

const Work = () => {
  return (
    <div id="work">
      <StyledWork>My Work</StyledWork>
      <Project
        name="Capture"
        picture={capture}
        link="https://capture-portfolio.herokuapp.com/"
      />
      <Project
        name="Music app"
        picture={music}
        link="https://music-app-wave.herokuapp.com/"
      />
    </div>
  );
};

const StyledWork = styled.h1`
  color: #fff;
  text-align: center;
`;

export default Work;
