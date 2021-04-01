
import React from "react";
import { PostType } from "../../App";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
type PropsType={
  posts:Array<PostType>
  newText:string
  addPost:(text:string)=>void
  updateNewPostText:(text:string)=>void
}


const Profile = function (props: PropsType) {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts}
      newPostText={props.newText}
      addPost={props.addPost}
      updateNewPostText={props.updateNewPostText} />

    </div>
  );
};

export default Profile;
