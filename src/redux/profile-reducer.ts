import { ActionsTypes, PostType, RootStateType } from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state: RootStateType, action: ActionsTypes) => {
  if (action.type === ADD_POST) {
    const newPost: PostType = {
      id: new Date().getTime(),
      message: state.profilePage.newPostText,
      likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.profilePage.newPostText = action.newText;
  }
  return state;
};

export default profileReducer;
