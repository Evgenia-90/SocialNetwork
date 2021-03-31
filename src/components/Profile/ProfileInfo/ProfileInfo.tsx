import s from "./ProfileInfo.module.css";

const ProfileInfo = function () {
  return (
    <div>
      <div>
        <img
          src="https://pohod-v-gory.com/uploads/image/attachment/91309/1200px-Matterhorn_from_air.jpg"
          alt="image2"
        />
        <div className={s.descriptionBlock}>
        Ava + description
        </div>
      </div>
      </div>
    
  );
};

export default ProfileInfo;
