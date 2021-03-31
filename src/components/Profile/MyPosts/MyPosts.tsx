import  { PostType }  from "../../../App";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import state from "../../../redux/state";
import React  from "react";
 

type MyPostsType = {
  posts: Array<PostType>
  addPost: (postMessage: string) => void
}

let MyPosts = function (props: MyPostsType ) {
debugger
  let postsElements = state.profilePage.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

let newPostElement = React.createRef<HTMLTextAreaElement>();


let addPost = () => {
  if (newPostElement.current) {
 props.addPost(newPostElement.current.value);
 newPostElement.current.value = '';
}
 } 
   
 

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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
