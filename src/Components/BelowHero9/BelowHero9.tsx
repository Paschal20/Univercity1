// import react from "react";
import styled from "@emotion/styled";
import Logo from "../../assets/Images/Univelcity-300x298.png";
/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Container = styled.section`
  width: 100%;
  height: 120vh;
  background-color: #122947;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InnerContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
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

const StyledHr = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px;
  border-top: 1px solid rgba(255, 255, 255, 1);
`;
const IconDiv = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

// const IconStyle = css`
//   color: #444;
//   font-size: 24px;
//   margin: 0 10px;
//   cursor: pointer;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #0077b5; /* Example: LinkedIn Blue */
//   }
// `;

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
        <StyledHr />
        <IconDiv>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </IconDiv>
        <Text1>
          Copyright © Univelcity School of Technology 2021 All Rights Reserved.
        </Text1>
        <Text1>Privacy Policy / Terms of Use / Cookie Policy</Text1>
      </Container>
    </>
  );
};

export default BelowHero9;
