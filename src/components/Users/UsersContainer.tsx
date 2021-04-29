import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { followAC, InitialStateType, setUsersAC, unfollowAC, UserType } from "../../redux/users-reducer";
import {Users} from "./Users";

type MapStatePropsType = {
    usersPage: InitialStateType
    
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);