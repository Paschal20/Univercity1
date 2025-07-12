import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 160vh;
  background-color: #f5f5f5;
  color: #333;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
`;
const CardHolder = styled.div`
  width: 90%;
  background-color: blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 48%;
  background-color: black;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  color: rgb(46, 66, 92);
  text-align: left;
`;
const CardButton = styled.button`
  background-color: #60c26a;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.1);
  color: white;
  padding: 13px 23px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease;
`;

const BelowHero = () => {
  return (
    <Container>
      <CardHolder>
        <Card>
          <CardTitle>Individuals</CardTitle>
          <CardText>
            Accelerate your dream of becoming a world-class software developer
            or designer.
          </CardText>
          <Card></Card>
        </Card>
        <Card></Card>
      </CardHolder>
    </Container>
  );
};

export default BelowHero;
