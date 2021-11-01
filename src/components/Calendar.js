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
      <h3>
        {`.${monthNames[today.getMonth() + 1]}. ${today.getFullYear()} `}{" "}
        <span> I am currently avalaible for work</span>
      </h3>
    </CalendarDiv>
  );
};
const CalendarDiv = styled.div`
  display: flex;
  align-items: baseline;

  h3 {
    font-size: 2rem;
    color: #fff;
    font-family: "Roboto Mono", sans-serif;

    span {
      margin-left: 3rem;
    }
  }
`;
const MainDay = styled.div`
  font-size: 15rem;
  color: #fff;
`;

export default Calendar;
