import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import ButtonMailto from "./ButtonMailto";
import styled from "styled-components";
import { StyledButton } from "../styles";
import pic from "../img/michael.png";

const HeadResume = () => {
  return (
    <StyledHeadResume>
      <h1>MICHAEL MELIS</h1>

      <StyledContacts>
        <StyledIcons>
          <StyledIcon size="2x" icon={faPaperPlane} />
          <MailButton>
            <ButtonMailto
              label="michael.melis169@gmail.com"
              mailto="mailto:michael.melis@gmail.com?subject=Let's build something together"
            />
          </MailButton>
        </StyledIcons>
        <StyledIcons>
          <StyledIcon size="2x" icon={faMobileAlt} />
          <h2>+421944045190</h2>
        </StyledIcons>
      </StyledContacts>
    </StyledHeadResume>
  );
};
const StyledHeadResume = styled.div`
  padding: 1.5rem 3rem;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 8rem auto;
  border: 5px solid #2dd1a0;
  background: #2dd1a0;
  width: 50%;
  color: #fff;

  font-weight: lighter;

  h1 {
    text-align: center;
    font-size: 3rem;
    letter-spacing: 0.5rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 1300px) {
    margin: 2rem 0rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
`;
const StyledContacts = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
  }
`;
const StyledIcons = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  align-items: center;
`;
const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;
const MailButton = styled(StyledButton)``;

export default HeadResume;
