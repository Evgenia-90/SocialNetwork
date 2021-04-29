import React from "react";
import { InitialStateType, UserType } from "../../redux/users-reducer";
import s from "./users.module.css";

export type UsersType = {
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

let Users = (props: UsersType) => {


    
    return <div>
        {
            props.usersPage.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                          ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button> 
                          : <button onClick={()=> {props.follow(u.id)}}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
            }
    </div>
}

export default Users;