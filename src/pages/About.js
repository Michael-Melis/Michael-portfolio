import { faDeaf } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import profilePic from "../img/MichaelRed.png";

const About = () => {
  return (
    <AboutDiv>
      <h1>Let me introduce myself</h1>
      <Description>
        <AboutDesc>
          <h2>
            My name is <span>Michael Melis</span> born in
            <span> Opava, Czechia</span> .
          </h2>
          <h2>
            <span>Front-End developer</span> with a passion for learning new
            things.
          </h2>
          <h2>
            I have one year experience in Front-End and have a firm knowladge of
            HTML,CSS and JavaScript language
          </h2>
          <h2>
            I am <span>TEAM</span> oriented <span>STRONG</span> individual
            waiting for the <Chance>Chance</Chance> to prove myself.
          </h2>
        </AboutDesc>
        <div>
          <img src={profilePic} alt="My portrait" />
        </div>
      </Description>
    </AboutDiv>
  );
};
const AboutDiv = styled.div`
  background: #fff;
  width: 100%;
  padding: 2rem 0rem 0rem 10rem;
  font-family: "Roboto-mono", sans-serif;
  display: flex;

  flex-direction: column;
  min-height: 100vh;
  border-radius: 5%;

  h1 {
    padding-top: 1rem;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    letter-spacing: 1rem;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
  h2 {
    font-size: 2rem;
    margin-top: 5rem;
    span {
      color: #fe6f6e;
    }
  }
  img {
    flex: 1;
    z-index: 2;
    overflow: hidden; //for animation to not overflow
    width: 100%;
    height: 70vh;
    object-fit: cover;
    border-radius: 5%;
  }
`;
const AboutDesc = styled.div`
  width: 50%;
`;
const Chance = styled.span`
  color: #fe6f6e;
  font-size: 5rem;
`;

export default About;
