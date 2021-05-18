import { type } from "node:os";
import { NavLink } from "react-router-dom";
import { UserType } from "../../redux/users-reducer"
import s from "./users.module.css";




type PropsTypeUsers = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


export let Users = (props: PropsTypeUsers) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    // }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : s.Page}
                    onClick={(e) => {
                        props.onPageChanged(p);
                    }}>{p}</span>

            })}
        </div>
        {props.users.map((u: UserType) => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : "https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg"} className={s.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)
        }
    </div>
}

