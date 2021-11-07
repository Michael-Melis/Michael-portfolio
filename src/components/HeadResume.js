import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import ButtonMailto from "./ButtonMailto";

const HeadResume = () => {
  return (
    <div>
      <h1>MICHAEL MELIS</h1>
      <div>
        <FontAwesomeIcon size="2x" icon={faPaperPlane} />
        <ButtonMailto
          label="michael.melis169@gmail.com"
          mailto="mailto:michael.melis@gmail.com?subject=Let's build something together"
        />
      </div>
    </div>
  );
};

export default HeadResume;
