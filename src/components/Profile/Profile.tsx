import { PostType } from "../../App";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ActionsTypes } from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
  posts:Array<PostType>
  newText:string
  dispatch: (action: ActionsTypes) => void
}


const Profile = (props: PropsType) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer dispatch={props.dispatch} newPostText={props.newText} posts={props.posts} />

    </div>
  );
};

export default Profile;
