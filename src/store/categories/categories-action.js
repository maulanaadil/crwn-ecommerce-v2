import CATEGORIES_ACTION_TYPES from "./categories.types";

import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "utils/firebase.utils";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoryArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoryArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed);
  }
};
