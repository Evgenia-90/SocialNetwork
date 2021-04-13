
import React from "react";
import { PostType } from "../../App";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, { ActionsTypes } from "./../../redux/state";

type PropsType = {
  posts:Array<PostType>
  newText:string
  dispatch: (action: ActionsTypes) => void
}


const Profile = (props: PropsType) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts}
               newPostText={props.newText}
               dispatch={props.dispatch} />

    </div>
  );
};

export default Profile;
