import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { ActionsTypes, PostType } from "../../../redux/store";
import MyPosts from "./MyPosts";
 
type MyPostsType = {
 posts: Array<PostType>
 dispatch: (action: ActionsTypes) => void
 newPostText: string
}

let MyPostsContainer = (props: MyPostsType ) => {
 let addPost = () => {
 props.dispatch(addPostActionCreator());
 } 
   
 let onPostChange = (text: string) => {
  let action = updateNewPostTextActionCreator(text);
  props.dispatch(action);
 }

  return (<MyPosts updateNewPostText={onPostChange}
                   addPost={addPost} 
                   posts={props.posts}
                   newPostText={props.newPostText} />);
};

export default MyPostsContainer;
