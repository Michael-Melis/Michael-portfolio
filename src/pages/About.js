import React from "react";
import styled from "styled-components";
import profilePic from "../img/MichaelRed.png";

const About = () => {
  return (
    <AboutDiv id="about">
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
            waiting for the <Chance>chance</Chance> to prove myself.
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
  background: #1d1d1d;
  width: 100%;
  padding: 2rem 10rem 0rem 10rem;
  font-family: "Roboto-mono", sans-serif;
  display: flex;
  color: #fff;
  flex-direction: column;
  border-radius: 3%;
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem 0rem 2rem;
    h1 {
      font-size: 1rem;
    }
  }

  h1 {
    padding-top: 4rem;
    font-size: 2rem;
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
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  }
  h2 {
    width: 100%;
    font-size: 2rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
    span {
      color: #2dd1a0;
    }
  }
  img {
    opacity: 60%;
    flex: 1;
    z-index: 2;
    overflow: hidden;
    width: 100%;
    height: 90vh;
    object-fit: cover;
    bottom: 0;
    border-radius: 5%;
  }
`;
const AboutDesc = styled.div`
  width: 100%;
  @media (max-width: 1300px) {
    h2 {
      font-size: 1rem;
      padding-top: 1rem;

      margin: 0;
    }
  }
`;
const Chance = styled.span`
  color: #2dd1a0;
  font-size: 5rem;
  @media (max-width: 1300px) {
    font-size: 2rem;
  }
`;

export default About;
