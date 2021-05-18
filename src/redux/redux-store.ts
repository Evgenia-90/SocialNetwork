import { combineReducers, createStore } from "redux";
import dialogsReducer, { SendMessageActionType, UpdateNewMessageBodyActionType } from "./dialogs-reducer";
import profileReducer, { AddPostActionType, setUserProfile, UpdateNewPostTextActionType } from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, { follow,setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "./users-reducer";

export type FollowActionType = ReturnType<typeof follow>
export type UnfollowActionType = ReturnType<typeof unfollow>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type setIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | setIsFetchingActionType
    | SetUserProfileActionType
    
let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});


export let store = createStore(rootReducer);
export type StoreType = typeof store;

export type AppStateType = ReturnType <typeof rootReducer >
//@ts-ignore
window.store = store
