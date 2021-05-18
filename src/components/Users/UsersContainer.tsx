import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { follow, InitialStateType, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, UserType } from "../../redux/users-reducer";
import { Users } from "./Users";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

export type MapStatePropsType = { // todo esta correcto
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchPropsType = { // todo esta correcto
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
         <Users 
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.usersPage.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(follow(userId));
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollow(userId));
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsers(users));
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPage(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCount(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// }

// let name = 15;
// let user = {
//     name
// }
// alert(user.name)

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
export default connect(mapStateToProps, {follow,unfollow,setUsers,
                                         setCurrentPage,setTotalUsersCount,toggleIsFetching})
                                         (UsersContainer);