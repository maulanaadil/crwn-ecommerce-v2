import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`;

export const LogoContainer = styled(NavLink)`
  height: 100%;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(NavLink)`
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
