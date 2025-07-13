// import react from "React";
import styled from "@emotion/styled";
import FirstImage from "../../assets/Images/First-Card-Image.jpeg";
import SecondImage from "../../assets/Images/Second-Card-Image.jpeg";
import ThirdImage from "../../assets/Images/Third-Card-Image.png";
import FourthImage from "../../assets/Images/Fourth-Card-Image.jpeg";
import FifthImage from "../../assets/Images/Fifth-Card-Image.jpeg";
import SixthImage from "../../assets/Images/Sixth-Card-Image.jpeg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(177, 171, 171, 1);
  align-items: center;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: rgb(23, 53, 92);
  text-align: center;
  margin-top: 100px;
  margin-bottom: 70px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-bottom: 200px;
`;
const CardContainer = styled.div`
  width: 100%;
  height: 260px;

  display: flex;
  align-items: center;
`;
// const TextContainer = styled.div`
//   width: 100%;
//   height: 
//   background-color: yellow;
// `;

const TextSide = styled.div`
  width: 55%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: left;

  padding: 30px;
`;

const CardTitle = styled.h3`
  color: rgb(23, 53, 92);
  font-size: 22px;
  font-weight: 700;
  margin-top: 10px;
`;
const CardDescription = styled.p`
  color: rgb(46, 66, 92);
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
  width: 90%;
`;

const ImageSide = styled.div`
  width: 45%;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BelowHero2: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Grow with Univelcity</Title>
        <InnerContainer>
          <CardContainer>
            <TextSide>
              <CardTitle>In-Demand Tech Skills</CardTitle>
              <CardDescription>
                Let's accelerate your journey into tech with our immersive
                training program. We will help you acquire the hottest skills in
                high demand in the job market.
              </CardDescription>
            </TextSide>
            <ImageSide>
              <CardImage src={FirstImage} alt="" />
            </ImageSide>
          </CardContainer>

          <CardContainer>
            <ImageSide>
              <CardImage src={SecondImage} alt="" />
            </ImageSide>
            <TextSide>
              <CardTitle>In-Demand Tech Skills</CardTitle>
              <CardDescription>
                Let's accelerate your journey into tech with our immersive
                training program. We will help you acquire the hottest skills in
                high demand in the job market.
              </CardDescription>
            </TextSide>
          </CardContainer>

          <CardContainer>
            <TextSide>
              <CardTitle>In-Demand Tech Skills</CardTitle>
              <CardDescription>
                Let's accelerate your journey into tech with our immersive
                training program. We will help you acquire the hottest skills in
                high demand in the job market.
              </CardDescription>
            </TextSide>
            <ImageSide>
              <CardImage src={ThirdImage} alt="" />
            </ImageSide>
          </CardContainer>

          <CardContainer>
            <ImageSide>
              <CardImage src={FourthImage} alt="" />
            </ImageSide>
            <TextSide>
              <CardTitle>In-Demand Tech Skills</CardTitle>
              <CardDescription>
                Let's accelerate your journey into tech with our immersive
                training program. We will help you acquire the hottest skills in
                high demand in the job market.
              </CardDescription>
            </TextSide>
          </CardContainer>

          <CardContainer>
            <TextSide>
              <CardTitle>In-Demand Tech Skills</CardTitle>
              <CardDescription>
                Let's accelerate your journey into tech with our immersive
                training program. We will help you acquire the hottest skills in
                high demand in the job market.
              </CardDescription>
            </TextSide>
            <ImageSide>
              <CardImage src={FifthImage} alt="" />
            </ImageSide>
          </CardContainer>

          <CardContainer>
            <ImageSide>
              <CardImage src={SixthImage} alt="" />
            </ImageSide>
            <TextSide>
              <CardTitle>In-Demand Tech Skills</CardTitle>
              <CardDescription>
                Let's accelerate your journey into tech with our immersive
                training program. We will help you acquire the hottest skills in
                high demand in the job market.
              </CardDescription>
            </TextSide>
          </CardContainer>
        </InnerContainer>
      </Container>
    </>
  );
};
export default BelowHero2;
