import CART_ACTION_TYPES from "./cart-types";

import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_TOGGLE_CART_OPEN, bool);
