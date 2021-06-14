import { Dispatch } from "react";
import { authAPI } from "../api/api";
import { LoginType } from "../components/Header/Header";
import { ActionsTypes } from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA";

type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>

export type AuthActionsType = setAuthUserDataActionType | exampleAT

export const initialStateForAuthReducer: LoginType = {
  data: {
    id: 1,
    email: null,
    login: null
  },
  resultCode: 0,
  messages: [],
  isAuth: false
}
export type InitialStateType2 = {
  id: any,
  email: any,
  login: any,
  isAuth: boolean
}

const authReducer = (state: LoginType = initialStateForAuthReducer, action: AuthActionsType): LoginType => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        data: action.data,
        isAuth: true
      }
    default:
      return state;
  }
};
type dataType = { id: number, email: string, login: string }
export const setAuthUserData = (data: dataType) => {
  return {
    type: SET_USER_DATA,
    data
  } as const
}
export const getAuthUserData = () => (dispatch: Dispatch<ActionsTypes>) => {
  authAPI.me()
  .then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(response.data.data))
    }
  });
}

type exampleAT = ReturnType<typeof exampleAction>
export const exampleAction = () => {
  return {
    type: "EXAMPLE"
  } as const
}
export default authReducer;
