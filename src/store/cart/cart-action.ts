import { CART_ACTION_TYPES, CartItem } from "./cart-types";
import { CategoryItem } from "@Store/categories/categories.types";

import { addCartItems, clearCartItem, removeCartItem } from "./cart-utils";
import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from "@Utils/reducer/reducer.utils";

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_TOGGLE_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (bool: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_TOGGLE_CART_OPEN, bool)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItems(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  itemCartToClear: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, itemCartToClear);
  return setCartItems(newCartItems);
};
