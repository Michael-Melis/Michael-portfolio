import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <StyledContact>
      <LeftDiv>
        <h1>Getting in touch is easy!</h1>
        <a
          href="https://github.com/MichaelMelis169"
          target="_blank"
          rel="noreferrer"
        >
          <StyledIcon size="3x" icon={faGithubSquare} />
        </a>
        <a
          href="https://www.linkedin.com/in/michael-meli%C5%A1-0a7348102/"
          target="_blank"
          rel="noreferrer"
        >
          <StyledIcon size="3x" icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com/michaelmelis/"
          target="_blank"
          rel="noreferrer"
        >
          <StyledIcon size="3x" icon={faInstagramSquare} />
        </a>
        <a
          href="https://twitter.com/MichaelMeli1"
          target="_blank"
          rel="noreferrer"
        >
          <StyledIcon size="3x" icon={faTwitterSquare} />
        </a>
      </LeftDiv>
      <RightDiv>
        <h1>este neviem co</h1>
      </RightDiv>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  margin: 5rem 10rem 0rem 10rem;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  font-family: "Roboto Mono", sans-serif;
`;
const LeftDiv = styled.div``;
const StyledIcon = styled(FontAwesomeIcon)``;

const RightDiv = styled.div``;

export default Contact;
