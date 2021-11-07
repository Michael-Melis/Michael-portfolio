import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import ButtonMailto from "./ButtonMailto";
import styled from "styled-components";
import { StyledButton } from "../styles";

const HeadResume = () => {
  return (
    <div>
      <h1>MICHAEL MELIS</h1>
      <div>
        <FontAwesomeIcon size="2x" icon={faPaperPlane} />
        <MailButton>
          <ButtonMailto
            label="michael.melis169@gmail.com"
            mailto="mailto:michael.melis@gmail.com?subject=Let's build something together"
          />
        </MailButton>
      </div>
      <div>
        <FontAwesomeIcon size="2x" icon={faMobile} />
      </div>
    </div>
  );
};
const MailButton = styled(StyledButton)``;

export default HeadResume;
