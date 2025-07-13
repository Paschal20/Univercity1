import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
const Title = styled.h2`
  font-size: 35px;
  font-weight: 700;
  color: rgb(23, 53, 92);
  text-align: center;
`;
const CardHolder = styled.div`
  width: 80%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const Card = styled.div`
  width: 330px;
  height: 280px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 40px;
  text-align: left;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: rgb(23, 53, 92);
`;
const CardSmallTitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  color: rgb(153, 153, 153);
  margin-bottom: 20px;
  font-style: italic;
`;

const CardContent = styled.div`
  color: rgb(23, 53, 92);
  font-weight: 400;
  line-height: 24px;
`;

const BelowHero6 = () => {
  return (
    <Container>
      <Title>Success Stories</Title>
      <CardHolder>
        <Card>
          <CardTitle>Damilola</CardTitle>
          <CardSmallTitle>Data Analyst</CardSmallTitle>
          <CardContent>
            I didn't only learn concepts that got me grounded as a Data
            Scientist. I also received mentorship which further positioned me
            for life and career growth.
          </CardContent>
        </Card>

        <Card>
          <CardTitle>Jehonadab</CardTitle>
          <CardSmallTitle>Software Developer</CardSmallTitle>
          <CardContent>
            Seizing the opportunity to take a class at univelcity was the head
            start I needed in my career. Almost 3 years down the line, and I
            think this is my best career investment yet.
          </CardContent>
        </Card>

        <Card>
          <CardTitle>Uchechukwu</CardTitle>
          <CardSmallTitle>Data Analyst</CardSmallTitle>
          <CardContent>
            As an alumnus of Univelcity, learning PRODUCT DESIGN and PYTHON FOR
            DATA SCIENCE was one of the best decisions I have made in building a
            career.
          </CardContent>
        </Card>
      </CardHolder>
    </Container>
  );
};

export default BelowHero6;
