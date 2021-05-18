import { ProfileType } from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

type PropsTypeProfileInfo = {
  profile: ProfileType | null
}


const ProfileInfo = function (props: PropsTypeProfileInfo) {
  if (!props.profile) {
    return <Preloader />
  }
  
  return (
    <div>
      <div>
        <img className={s.img}
          src="https://i1.7fon.org/thumb/g667542.jpg"
          alt="image2"
        />
        <div className={s.descriptionBlock}>
          <img src={props.profile?.photos.large} />
        Ava + description
        </div>
      </div>
      </div>
    
  );
};

export default ProfileInfo;
