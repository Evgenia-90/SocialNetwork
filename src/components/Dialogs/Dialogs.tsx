import { ChangeEvent } from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { DialogPageType, DialogType, MessageType } from "../../redux/dialogs-reducer";

export type dialogsType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};

export type PropsTypeDialogs = {
  updateNewMessageBody: (body: string) => void
  sendMessage: () => void
  dialogsPage: DialogPageType
  isAuth: boolean
}
const Dialogs = (props: PropsTypeDialogs) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d: { name: string; id: number; }) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m: { message: string; id: number; }) => (
    <Message message={m.message} key={m.id} />
  ));


  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

    let body = e.currentTarget.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea value={props.dialogsPage.newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message">
          </textarea>
          </div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
