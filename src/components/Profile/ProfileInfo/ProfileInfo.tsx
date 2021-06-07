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
          src="https://i.natgeofe.com/n/f27ebe1a-7265-4e18-8c82-b6f93c7da44e/sunrise-moraine-lake-canada.jpg?w=636&h=425"
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
