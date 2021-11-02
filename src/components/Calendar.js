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
  align-items: center;

  h3 {
    font-size: 2rem;
    color: #fff;
    font-family: "Roboto Mono", sans-serif;
    @media (max-width: 1300px) {
      font-size: 1rem;
    }
    span {
      margin-left: 1rem;
    }
  }
`;
const MainDay = styled.div`
  font-size: 15rem;
  color: #fff;
  @media (max-width: 1300px) {
    font-size: 4rem;
  }
`;

export default Calendar;
