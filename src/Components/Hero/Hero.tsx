import React from "react";
import styled from "@emotion/styled";

import HeroImage from "../../assets/Images/HeroImage.jpg";

const Hero1 = styled.div`
  height: calc(100vh - 100px);
  position: relative;
  background-size: cover;
  background-position: center top;
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
  align-items: center;
  text-align: center;
  font-size: 45px;
  font-weight: 700;
  & > span {
    margin-top: 150px;
  }
`;

const CardHolder = styled.div`
  width: 90%;
  margin-top: 120px;
  z index: 100;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  width: 48%;

  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(23, 53, 92);
`;

const CardText = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 30px;
  color: rgb(46, 66, 92);
  text-align: left;
`;
const CardButton = styled.button`
  background-color: #60c26a;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.1);
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Hero: React.FC = () => {
  return (
    <>
      <Hero1>
        <Hero2>
          <span>
            Accelerate Your Carrer <br /> In Tech
          </span>

          <CardHolder>
            <Card>
              <CardTitle>Individuals</CardTitle>
              <CardText>
                Accelerate your dream of becoming a world-class software
                developer or designer.
              </CardText>
              <CardButton>Browse Courses</CardButton>
            </Card>

            <Card>
              <CardTitle>Corporate</CardTitle>
              <CardText>
                Professional Staff training courses applicable to any corporate
                organization.
              </CardText>
              <CardButton>Learn More</CardButton>
            </Card>
          </CardHolder>
        </Hero2>
      </Hero1>
    </>
  );
};

export default Hero;
