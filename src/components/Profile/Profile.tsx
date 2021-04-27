import { PostType } from "../../App";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ActionsTypes } from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

 

const Profile = () => {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />

    </div>
  );
};

export default Profile;
