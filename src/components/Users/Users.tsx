import React from "react";
import { UserType } from "../../redux/users-reducer";
import s from "./users.module.css";
import { UsersPropsType } from "./UsersContainer";



export const Users: React.FC<UsersPropsType>  = (props) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers ([
            {
                id: 1,
                photoUrl: "https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg",
                followed: false,
                fullName: "Dmitry",
                status: "I am a boss",
                location: { city: "Minsk", country: "Belarus" }
            },
            {
                id: 2,
                photoUrl: "https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg",
                followed: true,
                fullName: "Sasha",
                status: "I am a boss too",
                location: { city: "Moscow", country: "Russia" }
            },
            {
                id: 3,
                photoUrl: "https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg",
                followed: false,
                fullName: "Andrew",
                status: "I am a boss too",
                location: { city: "Kiev", country: "Ukraine" }
            }]);
    }

       
    return <div>
        {
            props.usersPage.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>follow</button>}
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