import { CategoryItem } from "@Store/categories/categories.types";
import { CartItem } from "./cart-types";

export const addCartItems = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  // Find if cartItems contains productToAdd
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If found, increment quantity
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  // return new array with modified cartItem/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  // Find if cartItems contains productToRemove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // Check if quantity is equal to 1, if it is remove that item frm that cart
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartItems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

export const clearCartItem = (
  cartItems: CartItem[],
  itemCartToClear: CartItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== itemCartToClear.id);
};
