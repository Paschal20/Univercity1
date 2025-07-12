import React from "react";
import styled from "@emotion/styled";

import HeroImage from "../../assets/Images/HeroImage.jpg";

const Hero1 = styled.div`
  height: calc(100vh - 100px);
  position: relative;
  background-size: cover;
  background-position: 50% 50%;
  background-color: #000000;
  font-type: Nunito Sans;
  background-image: url(${HeroImage});
`;

const Hero2 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.65);
  color: white;
  display: flex;
  
  flex-direction: column;
  text-align: center;
  font-size: 45px;
  font-weight: 700;
  &>span {
    margin-top: 150px;
  }

`;


const Hero: React.FC = () => {
  return (
    <>
      <Hero1>
        <Hero2>
          <span>
            Accelerate Your Carrer <br /> In Tech
          </span>
        </Hero2>
      </Hero1>
    </>
  );
};

export default Hero;
