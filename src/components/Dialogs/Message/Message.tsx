import s from "./../Dialogs.module.css";

export type messageType = {
  message: string;
};
const Message = (props: messageType) => {
  return <div className={s.dialog}>{props.message}</div>;
};

export default Message;
