import  { PostType }  from "../../../App";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import React, { ChangeEvent }  from "react";
import { ActionsTypes } from "../../../redux/store";
 

type MyPostsType = {
  posts: Array<PostType>
  addPost: () => void
  newPostText: string
  updateNewPostText:(text:string)=>void
}

let MyPosts = (props: MyPostsType ) => {

  let postsElements = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

let newPostElement = React.createRef<HTMLTextAreaElement>();


let onAddPost = () => {
 props.addPost();
 } 
   
 let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  if(newPostElement.current){
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
 }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea 
          placeholder="enter text"
          onChange={onPostChange} 
          ref={newPostElement} 
          value={props.newPostText}/> 
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
