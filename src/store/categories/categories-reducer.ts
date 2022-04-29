import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";

import { CategoryAction } from "./categories-action";

export type CategoriesState = {
  readonly categoriesMap: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: CategoriesState = {
  categoriesMap: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action = {} as CategoryAction
) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesMap: action.payload,
        isLoading: false,
        error: null,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
