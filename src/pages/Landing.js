import React from "react";
import styled from "styled-components";
import ButtonMailto from "../components/ButtonMailto";
import Calendar from "../components/Calendar";

const Landing = () => {
  return (
    <StyledLanding>
      <Hello>
        <h2>
          Hello. I am <span>MICHAEL</span>
        </h2>
        <h3>Front-End developer</h3>

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
  min-height: 100vh;
  @media (max-width: 1300px) {
    min-height: 67vh;
  }
`;

const Hello = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem 10em 0rem 10rem;
  font-family: "Roboto Mono", monospace, sans-serif;
  font-size: 2rem;
  margin-bottom: 10rem;
  @media (max-width: 1300px) {
    margin: 5rem 2rem 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    h2 {
      font-size: 2rem;
      span {
        font-size: 2.5rem;
        color: #2dd1a0;
      }
    }
    h3 {
      font-size: 1rem;
      margin-bottom: 5rem;
    }
  }

  h1 {
    font-size: 1.5rem;
  }
`;

const StyledCalendar = styled.div`
  padding: 0rem 0rem 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 0rem 2rem 0rem 2rem;
  }
`;

export default Landing;
