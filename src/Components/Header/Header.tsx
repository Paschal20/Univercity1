import React from "react";
import styled from "@emotion/styled";
import Ulogo from "../../assets/Images/Univecity-Blue-Horizontal-Logo-300x55.png";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  border-bottom: 1px solid #ccc;
  width: 100%;
  font-family: Nunito Sans;
`;
const HeaderContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;
const Logo = styled.img`
  width: 150px;
  height: 30px;
`;

const ButtonAndNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;
const Navitems = styled.div`
  width: ;
`;

const Button = styled.button`
  background-color: #60c26a;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.1);
  color: white;
  padding: 13px 23px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 10px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContainer2>
        <Logo src={Ulogo} alt="" />
        <ButtonAndNavigation>
          <Navitems>Courses</Navitems>
          <Navitems>FullStack</Navitems>
          <Navitems>Corporate</Navitems>
          <Navitems>Hire Tech Talents</Navitems>

          <Button>Browse Courses</Button>
        </ButtonAndNavigation>
      </HeaderContainer2>
    </HeaderContainer>
  );
};

export default Header;
