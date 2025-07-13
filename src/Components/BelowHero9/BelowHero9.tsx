// import react from "react";
import styled from "@emotion/styled";
import Logo from "../../assets/Images/Univelcity-300x298.png";

const Container = styled.section`
  width: 100%;
  height: 120vh;
  background-color: #122947;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
const InnerContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
`;
const Column1 = styled.div`
  width: 20%;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
`;
const Text1 = styled.p`
  color: #ffffff;
  font-size: 16px;
  text-align: left;
  margin-bottom: 20px;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const BelowHero9: React.FC = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <Image src={Logo} alt="" />
          <Column1>
            <Title>Our Mission</Title>
            <Text1>
              Our goal is to build driven, passionate and outstanding developers
              with industry-ready programming proficiency and soft-skills.
            </Text1>
          </Column1>
          <Column1>
            <Title>Quick links</Title>
            <Text1>Browse Courses</Text1>
            <Text1>Corporate</Text1>
            <Text1>Hire Tech Talents</Text1>
            <Text1>Financial Aid</Text1>
            <Text1>Workshops and Events</Text1>
            <Text1>FAQs</Text1>
            <Text1>Contact us</Text1>
          </Column1>
          <Column1>
            <Title>Contact</Title>
            <Text1>No 42, Montgomery Road, Yaba Lagos, Nigeria.</Text1>
            <Text1>
              For more info on our Classes;
              <br /> (+234) 906 355 2422 <br />
              (+234) 906 4717 877
            </Text1>
            <Text1>
              For corporate enquiry; <br /> (+234) 703 6188 527
            </Text1>
            <Text1>
              Email <br /> hello@univelcity.com <br /> Online@univelcity.com
            </Text1>
            <Text1>Send a Message</Text1>
          </Column1>
        </InnerContainer>
      </Container>
    </>
  );
};

export default BelowHero9;
