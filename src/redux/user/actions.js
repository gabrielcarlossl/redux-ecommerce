import UserActionTypes from "./action-types";

export const loginUser = () => ({
  type: UserActionTypes.LOGIN,
  payload: { name: "Gabriel", email: "gabriel@email.com.br" },
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT,
  payload: null,
});
