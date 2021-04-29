import { connect } from "react-redux";
import { addPostActionCreator, PostType, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { ActionsTypes, AppStateType } from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
 
type MyPostsType = {
 posts: Array<PostType>
 dispatch: (action: ActionsTypes) => void
 newPostText: string
}
 
let mapStateToProps = (state: AppStateType) => {
    return {
   posts: state.profilePage.posts,
   newPostText: state.profilePage.newPostText
    }
  }

  let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewPostText: (text: string) => {
       let action = updateNewPostTextActionCreator(text);
       dispatch(action);
      },
      addPost: () => {
        dispatch(addPostActionCreator());
      },
    }
  }

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps ) (MyPosts);

export default MyPostsContainer;
