import React from "react";
import styled from "styled-components";
import ButtonMailto from "../components/ButtonMailto";
import Calendar from "../components/Calendar";

const Landing = () => {
  return (
    <StyledLanding>
      <Hello>
        <h2>
          {" "}
          <span> Hello.</span>{" "}
        </h2>
        <h2>I am MICHAEL</h2>
        <h3>
          {" "}
          <span> Front-End developer</span>
        </h3>

        <h2>
          WE CAN BUILD SOMETHING <span>TOGETHER</span>
        </h2>

        <ButtonMailto
          label="LET'S CHAT ABOUT IT"
          mailto="mailto:michael.melis@gmail.com?subject=Let's build something together"
        />
      </Hello>

      <StyledCalendar>
        <Calendar />
      </StyledCalendar>
    </StyledLanding>
  );
};
const StyledLanding = styled.div`
  min-height: 75vh;
  @media (max-width: 1300px) {
    min-height: 67vh;
  }
`;

const Hello = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto Mono", monospace, sans-serif;
  font-size: 2rem;
  margin-top: 18rem;
  margin-bottom: 5rem;
  h2 {
    font-size: 3rem;
    text-align: center;
    span {
      font-size: 3rem;
      color: #2dd1a0;
    }
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 5rem;
  }
  @media (max-width: 1300px) {
    margin: 5rem 2rem 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    h2 {
      font-size: 2rem;
    }
    h3 {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 5rem;
      span {
        font-size: 1.5rem;
        color: #2dd1a0;
      }
    }
  }

  h1 {
    font-size: 1.5rem;
  }
`;

const StyledCalendar = styled.div`
  padding: 0rem 0rem 5rem 10rem;
  display: flex;
  align-items: center;
  @media (max-width: 1300px) {
    padding: 0rem 2rem 0rem 2rem;
  }
`;

export default Landing;
