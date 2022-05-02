import { createSelector } from "reselect";

import { RootState } from "@Store/store";

import { CategoriesState } from "./categories-reducer";

const selectCategoriesReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategoriesMap = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categoriesMap
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
);
