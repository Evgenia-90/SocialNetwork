import { LoginType } from "../components/Header/Header";

// import { ActionsTypes } from "./redux-store";
type setAuthUserDataType = ReturnType<typeof setAuthUserData>
const SET_USER_DATA = "SET_USER_DATA";

export type ActionsType = setAuthUserDataType | exapleAT


export const initialStateForAuthReducer: LoginType = {
  data: {
    id: 1,
    email: null,
    login: null
  },
  resultCode: 0,
  messages:[],
  isAuth: false
}
export type InitialStateType2 = {
  id: any,
  email: any,
  login: any,
  isAuth: boolean
}

let initialState: InitialStateType2 = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state: LoginType = initialStateForAuthReducer, action: ActionsType): LoginType => {
  switch (action.type) {
    case "SET_USER_DATA":
      debugger
      return {
      ...state,
      data: action.data,
      isAuth: true
       
      }

    default:
      return state;
  }
};
type dataType = {id: number, email: string, login: string}
export const setAuthUserData = (data: dataType) => {
  return {
     type: SET_USER_DATA, 
     data
    } as const
}

type exapleAT = ReturnType<typeof exampleAction>
export const exampleAction = () => {
  return {
    type: "EXAMPLE"
  } as const
}
export default authReducer;
