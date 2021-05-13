import { UserType } from "../../redux/users-reducer"
import s from "./users.module.css";

export let Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ""}
                    onClick={(e) => { 
                        props.onPageChanged(p);
                     }}>{p}</span>

            })}
        </div>
        {props.users.map((u: UserType) => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : "https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg"} className={s.userPhoto} />
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

