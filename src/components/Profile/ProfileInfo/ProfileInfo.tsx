import s from "./ProfileInfo.module.css";

const ProfileInfo = function () {
  return (
    <div>
      <div>
        <img className={s.img}
          src="https://i1.7fon.org/thumb/g667542.jpg"
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
