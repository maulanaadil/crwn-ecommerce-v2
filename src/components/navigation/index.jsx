import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

import { signOutStart } from "store/user/user.action";
import { selectCurrentUser } from "store/user/user.selector";
import { selectIsCartOpen } from "store/cart/cart-selector";

import { ReactComponent as CrwnLogo } from "assets/logo/crown.svg";

import {
  NavigationContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./styles";
import { CartIcon, CartDropdown } from "components/cart";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = async () => {
    dispatch(signOutStart());
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
          <OptionLink to="/contact">Contact</OptionLink>
          {currentUser ? (
            <OptionLink as="div" onClick={signOutHandler}>
              Sign Out
            </OptionLink>
          ) : (
            <OptionLink to="/auth">Sign In</OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
        {isCartOpen && (
          <AnimatePresence>
            <CartDropdown
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
        )}
        <Outlet />
      </NavigationContainer>
    </>
  );
};

Navigation.propTypes = {};

export default Navigation;
