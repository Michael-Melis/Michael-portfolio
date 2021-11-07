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
      <MainDay>
        {`${today.getDate()}  `}
        <h3>{`${monthNames[today.getMonth()]}  ${today.getFullYear()} `} </h3>
        <h3>
          <span> I am currently avalaible for hire</span>
        </h3>
      </MainDay>
    </CalendarDiv>
  );
};
const CalendarDiv = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0rem 1rem;

  h3 {
    font-size: 2rem;
    color: #fff;
    font-family: "Roboto Mono", sans-serif;
    @media (max-width: 1300px) {
      font-size: 0.8rem;
      align-items: baseline;
      span {
        margin-left: 1rem;
      }
    }
  }
`;
const MainDay = styled.div`
  font-size: 15rem;
  color: #2dd1a0;
  display: flex;
  align-items: baseline;
  span {
    margin-left: 5rem;
  }

  @media (max-width: 1300px) {
    font-size: 5rem;

    display: flex;
    align-items: center;
  }
`;

export default Calendar;
