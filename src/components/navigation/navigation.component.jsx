import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/logo/crown.svg";

const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoContainer = styled(NavLink)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionLink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  &.active {
    color: #696969;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = () => (
  <NavigationContainer>
    <LogoContainer to="/">
      <CrwnLogo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/contact">Contact</OptionLink>
    </OptionsContainer>
    <Outlet />
  </NavigationContainer>
);

Navigation.propTypes = {};

export default Navigation;
