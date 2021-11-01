import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mypic from "../img/MichaelRed.png";

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
        <h1>Hello.</h1>
        <h1>I am</h1>
        <h6>
          <span>MICHAEL</span>
          Front-End developer
        </h6>
      </Hello>
      <SecondMain>
        <h3>LET'S BUILD SOMETHING</h3>
        <h4>
          <span>TOGETHER</span>
        </h4>
      </SecondMain>
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
    margin: 1rem 10rem 0rem 0rem;
    font-size: 1.5rem;
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
  margin: 0rem 0rem 1rem 10rem;
  font-family: "Roboto Mono", monospace, sans-serif;
  word-spacing: 0.5rem;
  letter-spacing: 1rem;
  font-size: 2rem;
  padding: 2rem;
  span {
    color: #2dd1a0;
  }
  h3 {
    margin-top: 5rem;
  }
  h4 {
    font-size: 3rem;
    display: flex;
    justify-content: center;
  }
  h6 {
    display: flex;
    justify-content: flex-end;
    width: 50%;
    align-items: center;
    font-size: 1rem;
    span {
      margin-right: 3rem;
      font-size: 3rem;
    }
  }
`;
const SecondMain = styled(Hello)``;

export default Landing;
