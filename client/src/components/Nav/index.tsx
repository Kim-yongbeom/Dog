import React from "react";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";

const NavbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: rgba(255, 186, 1);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled(Link)`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const TitleLogo = styled.img`
  width: 5rem;
  height: 5rem;
`;

const TitleText = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const ActionItemContainer = styled.div`
  margin-right: 1rem;
`;

const ActionItem = styled.span`
  font-size: 25px;
  padding: 0 1rem;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Wrapper>
        <Title to="/">
          <TitleLogo src="./dogImg.png" alt="dog" />
          <TitleText>TOTO</TitleText>
        </Title>
        <ActionItemContainer>
          <ActionItem>
            <FcSearch />
          </ActionItem>
          <ActionItem>logo</ActionItem>
          <ActionItem></ActionItem>
        </ActionItemContainer>
      </Wrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
