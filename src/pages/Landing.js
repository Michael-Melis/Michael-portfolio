import React from "react";
import styled from "styled-components";
import ButtonMailto from "../components/ButtonMailto";
import Calendar from "../components/Calendar";

const Landing = () => {
  return (
    <StyledLanding>
      <Hello>
        <h2>Hello.</h2>
        <h2>I am</h2>
        <h2>
          <span>MICHAEL</span>
        </h2>
        <h3>Front-End developer</h3>
      </Hello>
      <SecondMain>
        <h2>WE CAN BUILD SOMETHING</h2>
        <h2>
          <span>TOGETHER</span>
        </h2>

        <ButtonMailto
          label="LET'S CHAT ABOUT IT"
          mailto="mailto:michael.melis@gmail.com?subject=Let's build something together"
        />
      </SecondMain>
      <StyledCalendar>
        <Calendar />
      </StyledCalendar>
    </StyledLanding>
  );
};
const StyledLanding = styled.div`
  min-height: 100vh;
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
    margin: 1rem 2rem 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 2rem;
      span {
        font-size: 2.5rem;
        color: #2dd1a0;
      }
    }
    h3 {
      font-size: 1rem;
    }
  }

  h1 {
    font-size: 1.5rem;
  }
`;

const SecondMain = styled(Hello)`
  h2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
const StyledCalendar = styled.div`
  padding: 0rem 0rem 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 0rem 2rem 0rem 2rem;
  }
`;

export default Landing;
