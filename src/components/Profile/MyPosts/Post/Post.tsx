import s from "./Post.module.css";
type MessageType = {
  message: string
  likesCount: number
}
const Post  = function (props: MessageType) {
  console.log(props.message);
  return (
    <div className={s.item}>
      <img
        src="http://pashich-ssd.ru/uploads/oboi_linux/211-83982.png"
        alt="image"
      />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
