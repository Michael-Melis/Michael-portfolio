import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon size="2x" icon={faPaperPlane} />
          <MailButton>
            <ButtonMailto
              label="michael.melis169@gmail.com"
              mailto="mailto:michael.melis@gmail.com?subject=Let's build something together"
            />
          </MailButton>
        </StyledIcons>
        <StyledIcons>
          <FontAwesomeIcon size="2x" icon={faMobile} />
          <h2>+421944045190</h2>
        </StyledIcons>
      </StyledContacts>
      {/* <img src={pic} alt="Michael profile "/> */}
    </StyledHeadResume>
  );
};
const StyledHeadResume = styled.div`
  padding: 0.8rem 3rem;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #2dd1a0;
  width: 80%;
  color: #fff;
  position: relative;
  h1 {
    text-align: center;
    font-size: 3rem;
    letter-spacing: 0.5rem;
  }
`;
const StyledContacts = styled.div`
  display: flex;
  justify-content: space-around;
`;
const StyledIcons = styled.div`
  display: flex;
`;
const MailButton = styled(StyledButton)`
  margin: 0;
  padding: 0;
  padding-top: 0;
  font-size: 1rem;
`;

export default HeadResume;
