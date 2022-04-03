import { useContext } from "react";
import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";

import { UserContext } from "../../context/user.context";

import { signOutUser } from "../../utils/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/logo/crown.svg";

const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`;

const LogoContainer = styled(NavLink)`
  height: 100%;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/">Home</OptionLink>
          <OptionLink to="/shop">Shop</OptionLink>
          {currentUser ? (
            <OptionLink as="div" onClick={signOutHandler}>
              Sign Out
            </OptionLink>
          ) : (
            <OptionLink to="/auth">Sign In</OptionLink>
          )}
          <OptionLink to="/contact">Contact</OptionLink>
        </OptionsContainer>
        <Outlet />
      </NavigationContainer>
    </>
  );
};

Navigation.propTypes = {};

export default Navigation;
