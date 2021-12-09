import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderUI = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: var(--black);
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 588px) {
    width: 100%;
    margin-left: 15px;
  }
`;

const HeaderTitleText = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  color: var(--primary-blue-color);

  @media only screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

const HeaderNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 50px;
  position: sticky;
  @media only screen and (max-width: 650px) {
    margin-right: 5px;
  }
`;

const NavBarMenu = styled.div`
  width: 80px;
  height: 45px;
  background-image: url('../../assets/images/menu-burguer-removebg-preview.png');
  background-position: center;
  background-size: 25px;
  background-repeat: no-repeat;
  &:hover {
    height: auto;
    & div {
      display: flex;
      width: auto;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 180px;
    }
  }
`;

const NavBarContainerLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 588px) {
    display: none;
  }
`;

const HeaderNavBarLinks = styled.span`
  color: var(--secondary-blue-color);
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  margin: 5px;
  cursor: pointer;
`;

const Header = () => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
    setViewWidth(window.innerWidth);
  });
  return (
    <HeaderUI>
      <HeaderTitle>
        <Link to="/">
          <HeaderTitleText>Lambda Watch</HeaderTitleText>
        </Link>
      </HeaderTitle>
      <HeaderNavBar>
        {viewWidth <= 588 && (
          <NavBarMenu>
            <NavBarContainerLinks>
              <Link to="/">
                <HeaderNavBarLinks>Cryptos</HeaderNavBarLinks>
              </Link>

              <Link to="/exchanges">
                <HeaderNavBarLinks>Exchange</HeaderNavBarLinks>
              </Link>

              <HeaderNavBarLinks>API</HeaderNavBarLinks>
            </NavBarContainerLinks>
          </NavBarMenu>
        )}
        {viewWidth > 588 && (
          <NavBarContainerLinks>
            <Link to="/">
              <HeaderNavBarLinks>Cryptos</HeaderNavBarLinks>
            </Link>

            <Link to="/exchanges">
              <HeaderNavBarLinks>Exchange</HeaderNavBarLinks>
            </Link>
            <HeaderNavBarLinks>API</HeaderNavBarLinks>
          </NavBarContainerLinks>
        )}
      </HeaderNavBar>
    </HeaderUI>
  );
};

export { Header };
