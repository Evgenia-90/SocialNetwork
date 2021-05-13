import { combineReducers, createStore } from "redux";
import dialogsReducer, { SendMessageActionType, UpdateNewMessageBodyActionType } from "./dialogs-reducer";
import profileReducer, { AddPostActionType, UpdateNewPostTextActionType } from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, { followAC,setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from "./users-reducer";

export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
export type setIsFetchingActionType = ReturnType<typeof toggleIsFetchingAC>


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
