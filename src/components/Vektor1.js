import React from "react";
import styled from "styled-components";

const Vektor1 = () => {
  return (
    <StyledVektor
      width="1061"
      height="769"
      viewBox="0 0 1061 769"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00031 767.5C51.9256 426.818 225.437 985.782 414.5 659.5C603.563 333.218 703.379 77.5513 969 343C1234.62 608.449 879.987 239.756 349 435C-181.987 630.244 237.146 40.7609 306 2"
        stroke="url(#paint0_linear_1:9)"
        stroke-width="3"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1:9"
          x1="255.499"
          y1="-416.5"
          x2="252.999"
          y2="531.498"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#2DD1A0" />
        </linearGradient>
      </defs>
    </StyledVektor>
  );
};

const StyledVektor = styled.svg`
  position: absolute;
  margin-left: 1rem;
  margin-top: 3rem;
  width: 100%;
  height: 100%;
`;

export default Vektor1;
