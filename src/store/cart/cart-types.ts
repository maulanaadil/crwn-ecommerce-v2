import { CategoryItem } from "@Store/categories/categories.types";

export enum CART_ACTION_TYPES {
  SET_TOGGLE_CART_OPEN = "cart/SET_TOGGLE_CART_OPEN",
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
