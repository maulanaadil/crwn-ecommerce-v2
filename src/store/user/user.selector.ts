import { createSelector } from "reselect";

import { RootState } from "@Store/store";

import { UserState } from "./user-reducer";

const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);

export const selectIsLoading = createSelector(
  selectUserReducer,
  (user) => user.isLoading
);
