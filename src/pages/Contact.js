import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import { HashLink } from "react-router-hash-link";

const Contact = () => {
  return (
    <StyledContact id="contact">
      <LeftDiv>
        <h1>Getting in touch is easy!</h1>
        <Icons>
          <a
            href="https://github.com/MichaelMelis169"
            target="_blank"
            rel="noreferrer"
          >
            <StyledIcon icon={faGithubSquare} />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-meli%C5%A1-0a7348102/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/michaelmelis/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledIcon icon={faInstagramSquare} />
          </a>
          <a
            href="https://twitter.com/MichaelMeli1"
            target="_blank"
            rel="noreferrer"
          >
            <StyledIcon icon={faTwitterSquare} />
          </a>
        </Icons>
      </LeftDiv>
      <RightDiv>
        <StyledBackToTop smooth to="#top">
          Scroll to top
        </StyledBackToTop>

        <h1>
          <StyledCopy icon={faCopyright} />
          Designed & created by Michael Melis 2021
        </h1>
      </RightDiv>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  font-family: "Roboto Mono", sans-serif;
  background: #1d1d1d;
  width: 100%;
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  }
`;
const StyledBackToTop = styled(HashLink)`
  color: #fff;
  font-size: 0.8rem;
`;
const LeftDiv = styled.div`
  justify-content: space-evenly;
  display: flex;
  margin-left: 10rem;
  flex-direction: column;
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    margin: 1rem 2rem;
  }
  h1 {
    display: flex;
    font-size: 1rem;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledIcon = styled(FontAwesomeIcon)`
  text-decoration: none;
  color: #fff;
  margin: 1rem 2rem;

  &:hover {
    color: #2dd1a0;
    transition: 0.2s ease-in;
  }
`;
const StyledCopy = styled(FontAwesomeIcon)`
  margin-right: 0.2rem;
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 0.3rem;
  margin-right: 10rem;
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    margin: 1rem 2rem;
  }
  h1 {
    margin-left: 1rem;
  }
`;

export default Contact;
