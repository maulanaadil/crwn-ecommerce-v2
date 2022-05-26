import { AnyAction } from "redux";

import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  setAppStart,
} from "./user.action";

import { UserData } from "@Utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE = {
  currentUser: null,
  isLoading: true,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): UserState => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  if (signInFailed.match(action) || signOutFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
    };
  }

  if (setAppStart.match(action)) {
    return {
      ...state,
      isLoading: false,
    };
  }

  return state;
};
