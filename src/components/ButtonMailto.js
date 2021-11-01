import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      <StyledButton>{label}</StyledButton>
    </Link>
  );
};
const StyledButton = styled.div`
  width: 25rem;
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding-top: 2rem;
  font-size: 2rem;

  &:hover {
    color: #2dd1a0;
  }
`;
export default ButtonMailto;
