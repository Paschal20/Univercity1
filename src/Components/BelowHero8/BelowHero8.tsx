// import react from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  width: 100%;
  height: 80vh;
  background-color: #17355c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: white;
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 400;
  width: 560px;
  text-align: center;
  margin-bottom: 40px;
`;

const CardButton = styled.button`
  background-color: #60c26a;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.1);
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #40a140;
  }
`;

const BelowHero8: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Ready to transform your career?</Title>
        <Content>
          If you love to grow or build a career in tech, we have you covered. At
          Univelcity, we focus on industry-ready skills that prepare you for the
          future of work, while connecting you to incredible jobs both in
          Nigeria and abroad.
        </Content>
        <CardButton>Browse All Courses</CardButton>
      </Container>
    </>
  );
};

export default BelowHero8;
