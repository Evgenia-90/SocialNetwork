import { combineReducers, createStore } from "redux";
import authReducer, { AuthActionsType } from "./auth-reducer";
import dialogsReducer, { DialogsReducerActionsType } from "./dialogs-reducer";
import profileReducer, { ProfileReducerActionsType } from "./profile-reducer";
import sidebarReducer, { SidebarActionType } from "./sidebar-reducer";

import usersReducer, { UserReducerActionsType } from "./users-reducer";

export type ActionsTypes =
    | AuthActionsType
    | DialogsReducerActionsType
    | ProfileReducerActionsType
    | SidebarActionType
    | UserReducerActionsType


export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


export let store = createStore(rootReducer);
export type StoreType = typeof store;

export type AppStateType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store
