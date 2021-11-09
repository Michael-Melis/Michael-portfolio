import React from "react";
import { Link } from "react-router-dom";
import { StyledResumeMailToButton } from "../styles";

const ResumeMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      <StyledResumeMailToButton>{label}</StyledResumeMailToButton>
    </Link>
  );
};

export default ResumeMailto;
