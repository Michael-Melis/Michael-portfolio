import React from "react";
import styled from "styled-components";

const Calendar = () => {
  let today = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <CalendarDiv>
      <MainDay>{`${today.getDay()}  `}</MainDay>
      <h3>{`${monthNames[today.getMonth()]}  ${today.getFullYear()} `} </h3>
      <h3>
        <span> I am currently avalaible for work</span>
      </h3>
    </CalendarDiv>
  );
};
const CalendarDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  h3 {
    font-size: 2rem;
    color: #fff;
    font-family: "Roboto Mono", sans-serif;
    @media (max-width: 1300px) {
      font-size: 1rem;
      padding-bottom: 5rem;
    }
    span {
      margin-left: 1rem;
    }
  }
`;
const MainDay = styled.div`
  font-size: 15rem;
  color: #2dd1a0;

  @media (max-width: 1300px) {
    font-size: 4rem;
  }
`;

export default Calendar;
