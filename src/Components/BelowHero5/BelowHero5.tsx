// import react from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgb(223, 242, 239);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  color: #17355c;
  font-size: 35px;
  font-weight: 800;
  margin-bottom: 60px;
`;

const StatHolder = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const StatCard = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StatBig = styled.p`
  color: #2e425c;
  font-size: 64px;
  font-weight: 800;
`;
const StatSmall = styled.p`
  color: #2e425c;
  font-size: 16x;
  font-weight: 400;
`;

const BelowHero5: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Strength in Numbers</Title>
        <StatHolder>
          <StatCard>
            <StatBig>98%</StatBig>
            <StatSmall>Completion Rate</StatSmall>
          </StatCard>

          <StatCard>
            <StatBig>3000+</StatBig>
            <StatSmall>Succesful Graduates</StatSmall>
          </StatCard>

          <StatCard>
            <StatBig>20+</StatBig>
            <StatSmall>Partners</StatSmall>
          </StatCard>

          <StatCard>
            <StatBig>2000+</StatBig>
            <StatSmall>Succesful Stories</StatSmall>
          </StatCard>
        </StatHolder>
      </Container>
    </>
  );
};

export default BelowHero5;
