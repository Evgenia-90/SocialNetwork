import  { PostType }  from "../../../App";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import state from "../../../redux/state";
import React, { ChangeEvent }  from "react";
 

type MyPostsType = {
  posts: Array<PostType>
  addPost: (postMessage: string) => void
  newPostText: string
  updateNewPostText:(text:string)=>void
}

let MyPosts = (props: MyPostsType ) => {

  let postsElements = state.profilePage.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

let newPostElement = React.createRef<HTMLTextAreaElement>();


let addPost = () => {

//   let text= "blabla"
//  props.addPost(text);
// props.updateNewPostText(text)
 } 
   
 let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  let text = e.currentTarget.value;
  props.updateNewPostText(text);


 }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea 
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
