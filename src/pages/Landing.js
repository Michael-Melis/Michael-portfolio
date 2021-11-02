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
        <h1>
          <span>MICHAEL</span>
        </h1>
        <h1>Front-End developer</h1>
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
  margin: 1rem 0em 0rem 10rem;
  font-family: "Roboto Mono", monospace, sans-serif;

  letter-spacing: 1rem;
  font-size: 2rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 1rem;
  }
  span {
    font-size: 3.5rem;
    color: #2dd1a0;
  }
`;

const SecondMain = styled(Hello)`
  button {
    background: #fff;
    cursor: pointer;
    width: 8rem;
    height: 3rem;
    border-radius: 5%;
    box-shadow: 1px 1px 5px #2dd1a0;
    font-family: "Roboto Mono", sans-serif;
    &:hover {
      color: black;
      background-color: #2dd1a0;
      transition: 0.5s;
    }
  }
  h2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    span {
    }
  }
`;
const StyledCalendar = styled.div`
  padding: 0rem 0rem 5rem 10rem;
`;

export default Landing;
