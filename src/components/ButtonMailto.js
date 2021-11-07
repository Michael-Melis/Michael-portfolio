import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../styles";

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

export default ButtonMailto;
