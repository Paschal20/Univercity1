// import React from "react";
import styled from "@emotion/styled";
import BH1 from "../../assets/Images/Bh 1.jpeg";
import BH2 from "../../assets/Images/Bh 2.jpeg";
import BH3 from "../../assets/Images/Bh 3.png";

const Section = styled.section`
  min-height: 100vh;
  height: 160vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 86%;
  max-width: 1200px;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 700;
  color: rgb(23, 53, 92);
  margin-bottom: 5px;
  margin-top: 70px;
`;

const Content = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgb(46, 66, 92)
  margin-bottom: 10px;
`;
const CardHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 30px;
  margin-bottom: 50px;
`;
const Card = styled.div`
  width: 360px;

  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: left;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 20px;
  color: white;
`;

const ImageHolder = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;
const TextHolder = styled.div`
  width: 350px;
  margin-left: 20px;'
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
  color: rgb(23, 53, 92);
  margin-top: 30px;
`;

const CardContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  color: rgb(46, 66, 92);
`;

const BottomCardWords = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  width: 240px;
  display: flex;
  justify-content: space-between;
`;
const BottomWord = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  color: rgb(46, 66, 92);
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

const BelowHero = () => {
  return (
    <>
      <Section>
        <Container>
          <Title>Find your Perfect program</Title>
          <Content>
            Our curriculum uses a project-based learning approach and is perfect
            for both beginners and experienced individuals.
          </Content>

          <CardHolder>
            <Card>
              <ImageHolder>
                <Image src={BH1} alt="Image1" />
              </ImageHolder>

              <TextHolder>
                <CardTitle>Machine Learning</CardTitle>
                <CardContent>
                  Welcome to the Machine Learning Fundamentals course! In this
                  12-week curriculum, you will embark on an exciting journey to
                  explore the world of machine…
                </CardContent>
                <BottomCardWords>
                  <BottomWord>12 months</BottomWord>
                  <BottomWord>Twice a week</BottomWord>
                </BottomCardWords>
              </TextHolder>
            </Card>

            <Card>
              <ImageHolder>
                <Image src={BH2} alt="Image1" />
              </ImageHolder>

              <TextHolder>
                <CardTitle>Cybersecurity (Ethical Hacking)</CardTitle>
                <CardContent>
                  Cybersecurity has an estimated 37% growth rate for jobs,
                  faster than the average for other occupations. Gain skills in
                  the occupation with the fastest…
                </CardContent>

                <BottomCardWords>
                  <BottomWord>12 months</BottomWord>
                  <BottomWord>3 months</BottomWord>
                </BottomCardWords>
              </TextHolder>
            </Card>

            <Card>
              <ImageHolder>
                <Image src={BH3} alt="Image1" />
              </ImageHolder>

              <TextHolder>
                <CardTitle>FullStack Web Development</CardTitle>
                <CardContent>
                  Are you ready to embark on an exciting journey into the world
                  of full-stack development? Our comprehensive Full-Stack
                  Development Course is your gateway to…
                </CardContent>
                <BottomCardWords>
                  <BottomWord>6 months</BottomWord>
                  <BottomWord>Four times a week</BottomWord>
                </BottomCardWords>
              </TextHolder>
            </Card>
          </CardHolder>
          <CardButton>Browse all Courses</CardButton>
        </Container>
      </Section>
    </>
  );
};

export default BelowHero;
