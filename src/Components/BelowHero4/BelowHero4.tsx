// import react from "react";
import styled from "@emotion/styled";
import RightLogos from "../../assets/Images/Univelcity_logos_Hired-1024x854.jpeg";

const Container = styled.section`
  width: 100%;
  height: 110vh;
  background-color: white;
  display: flex;

  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftSide = styled.div`
  width: 55%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;
const RightSide = styled.div`
  width: 45%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RightImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LeftTitle = styled.h2`
  color: white;
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 30px;
  color: rgb(23, 53, 92);
  width: 550px;
`;

const Content = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 400;
  width: 550px;
  text-align: left;
  margin-bottom: 20px;
  color: rgb(46, 66, 92);
`;

const BelowHero4: React.FC = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <LeftSide>
            <LeftTitle>
              Over 90% of our students find high-paying jobs within the first 6
              months of graduating.
            </LeftTitle>
            <Content>
              Univelcity is a tech school designed to accelerate the growth of
              tech talent in Africa for the growing demand of businesses,
              startups in Nigeria and around the world.
            </Content>
            <Content>
              We use Agile Project-based learning that focuses on in-demand tech
              skills in the industry.
            </Content>

            <Content>
              In the last 3 years, we have trained over 1000 developers with
              more than 400 of them tracked gainfully employed.
            </Content>
          </LeftSide>

          <RightSide>
            <RightImage src={RightLogos} alt="" />
          </RightSide>
        </InnerContainer>
      </Container>
    </>
  );
};

export default BelowHero4;
