import { ActionsTypes } from "./redux-store";

export type UserType = {
  id: number,
  photos: {
    small: string
    large: string
  }
  followed: boolean,
  name: string,
  status: string,
  location: UsersLocation
}

export type UsersLocation = {
  city: string,
  country: string
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

export type InitialStateType = {
  users: Array<UserType>
}

let initialState: InitialStateType = {
  users: [
    // {id: 1, 
    //  photos: "https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg" ,
    //  followed: false, 
    //  name: "Dmitry", 
    //  status: "I am a boss", 
    //  location: {city: "Minsk", country: "Belarus"} },
    // {id: 2, 
    // photos: "https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg" ,
    // followed: true,
    // name: "Sasha",
    // status: "I am a boss too", 
    // location: {city: "Moscow", country: "Russia"} },
    // {id: 3, 
    // photos: "https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg" , 
    // followed: false, 
    // name: "Andrew", 
    // status: "I am a boss too", 
    // location: {city: "Kiev", country: "Ukraine"} }
  ],
};

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case "SET_USERS":
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
};

export const followAC = (userId: number) => ({ type: FOLLOW, userId }) as const
export const unfollowAC = (userId: number) => ({ type: UNFOLLOW, userId }) as const
export const setUsersAC = (users: Array<UserType>) => ({ type: SET_USERS, users }) as const

export default usersReducer;
