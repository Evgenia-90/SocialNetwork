import { Dispatch } from "react";
import { usersAPI } from "../api/api";
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
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

export type followingInProgressItemType = {
  userId: number
}

export type InitialStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setCurrentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}

let initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  setCurrentPage: 0,
  isFetching: false,
  followingInProgress: []
};

export type UserReducerActionsType =
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | setCurrentPageActionType
  | setTotalUsersCountActionType
  | setIsFetchingActionType
  | toggleIsFollowingProgressActionType

const usersReducer = (state: InitialStateType = initialState, action: UserReducerActionsType): InitialStateType => {
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
      return { ...state, users: action.users }
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.currentPage }
    case "SET_TOTAL_USERS_COUNT":
      return { ...state, totalUsersCount: action.count }
    case "TOGGLE_IS_FETCHING":
      return { ...state, isFetching: action.isFetching }
    case "TOGGLE_IS_FOLLOWING_PROGRESS":
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      }
    default:
      return state;
  }
};

type FollowActionType = ReturnType<typeof followSuccess>
type UnfollowActionType = ReturnType<typeof unfollowSuccess>
type SetUsersActionType = ReturnType<typeof setUsers>
type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type setIsFetchingActionType = ReturnType<typeof toggleIsFetching>
type toggleIsFollowingProgressActionType = ReturnType<typeof toggleIsFollowingProgress>

export const followSuccess = (userId: number) => ({ type: FOLLOW, userId }) as const
export const unfollowSuccess = (userId: number) => ({ type: UNFOLLOW, userId }) as const
export const setUsers = (users: Array<UserType>) => ({ type: SET_USERS, users }) as const
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage }) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }) as const
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching }) as const
export const toggleIsFollowingProgress = (followingInProgress: boolean, userId: number) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId }) as const

export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
    toggleIsFetching(true)
  }
}
export const follow = (userId: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.follow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleIsFollowingProgress(false, userId));
      });
  }
}
export const unfollow = (userId: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.unfollow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleIsFollowingProgress(false, userId));
      });
  }
}

export default usersReducer;
