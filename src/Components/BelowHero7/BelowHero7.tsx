// import React from "react";
import styled from "@emotion/styled";
// Dropdown.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(177, 171, 171, 1);
  align-items: center;
  background-color: #e4f0ee;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: rgb(23, 53, 92);
  text-align: left;
  margin-top: 100px;
  margin-bottom: 70px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  width: 40%;
  margin-bottom: 200px;
`;
const Span = styled.span`
  font-weight: 700;
  color: #73c97e;
`;
const Content2 = styled.p`
  font-weight: 700;
  color: rgb(46, 66, 92);
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Content1 = styled.p`
  font-weight: 700;
  color: rgb(46, 66, 92);
`;
const StyledHr = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  border-top: 1px solid rgba(221, 217, 217, 1);
`;
const BelowHero7 = () => {
  return (
    <Container>
      <Title>FAQs</Title>
      <InnerContainer>
        <StyledHr />
        <Content2>
          {" "}
          Are the programs on-site or online?{" "}
          <FontAwesomeIcon icon={faAngleDown} />
        </Content2>{" "}
        <StyledHr />
        <Content2>
          What is the duration for a typical program?{" "}
          <FontAwesomeIcon icon={faAngleDown} />
        </Content2>
        <StyledHr />
        <Content2>
          {" "}
          Where are you located? <FontAwesomeIcon icon={faAngleDown} />
        </Content2>
        <StyledHr />
        <Content2>
          {" "}
          Do you have Evening / Part-time classes?{" "}
          <FontAwesomeIcon icon={faAngleDown} />
        </Content2>
        <StyledHr />
        <Content2>
          {" "}
          Can I join a waiting list for an upcoming cohort?{" "}
          <FontAwesomeIcon icon={faAngleDown} />
        </Content2>
        <StyledHr />
        <Content2>
          When will the next session take place?{" "}
          <FontAwesomeIcon icon={faAngleDown} />
        </Content2>
        <StyledHr />
        <Content2>
          I do not have any technical background, can I join the course?{" "}
          <FontAwesomeIcon icon={faAngleDown} />
        </Content2>
        <StyledHr />
        <Content2>
          Do I need a laptop? <FontAwesomeIcon icon={faAngleDown} />
        </Content2>
        <StyledHr />
        <Content1>
          Visit our <Span>FAQ Page</Span> for more help
        </Content1>
      </InnerContainer>
    </Container>
  );
};

export default BelowHero7;
