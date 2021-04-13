import  { PostType }  from "../../../App";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import state, { ActionsTypes } from "../../../redux/state";
import React, { ChangeEvent }  from "react";
import store from "../../../redux/state";
 

type MyPostsType = {
  posts: Array<PostType>
  //addPost: (postMessage: string) => void
  newPostText: string
  //updateNewPostText:(text:string)=>void
  dispatch: (action: ActionsTypes) => void
}

let MyPosts = (props: MyPostsType ) => {

  let postsElements = store._state.profilePage.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

let newPostElement = React.createRef<HTMLTextAreaElement>();


let addPost = () => {
 props.dispatch({ type: 'ADD-POST'});
 
 } 
   
 let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  let text = e.currentTarget.value;
  props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text});


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
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
