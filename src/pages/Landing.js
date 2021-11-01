import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mypic from "../img/MichaelRed.png";
import Calendar from "../components/Calendar";

const Landing = () => {
  return (
    <>
      <TopMenu>
        <ul>
          <li>about</li>
          <li>work</li>
          <li>contact me</li>
          <li>resume</li>
        </ul>
      </TopMenu>
      <Hello>
        <h2>Hello.</h2>
        <h2>I am</h2>
        <h1>
          <span>MICHAEL</span>
          Front-End developer
        </h1>
      </Hello>
      <SecondMain>
        <h2>LET'S BUILD SOMETHING</h2>
        <h2>
          <span>TOGETHER</span>
        </h2>
      </SecondMain>
      <StyledCalendar>
        <Calendar />
      </StyledCalendar>
    </>
  );
};

const TopMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  position: sticky;
  top: 0;
  background: #151515;
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;
    color: #fff;
    align-items: flex-end;
    font-family: "Roboto Mono", monospace;
  }

  li {
    list-style: none;
    margin: 1rem;
    cursor: pointer;
    &:hover {
      color: #2dd1a0;
    }
  }
`;
const Hello = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem 0rem 0rem 10rem;
  font-family: "Roboto Mono", monospace, sans-serif;
  word-spacing: 0.5rem;
  letter-spacing: 1rem;
  font-size: 2rem;
  h1 {
    font-size: 1rem;
    margin-bottom: 8rem;
  }
  span {
    margin-right: 3rem;
    font-size: 3.5rem;
    color: #2dd1a0;
  }
`;
const SecondMain = styled(Hello)`
  h2 {
    margin-top: 1rem;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    span {
    }
  }
`;
const StyledCalendar = styled.div`
  margin: 1rem 0rem 0rem 10rem;
`;

export default Landing;
