import { ChangeEvent } from "react";
import { DialogType, MessageType } from "../../App";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import store, {  DialogPageType } from "../../redux/store";
 
export type dialogsType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};

export type PropsTypeDialogs = {
 updateNewMessageBody: (body:string) => void
 sendMessage: () => void
 dialogsPage: DialogPageType
}
const Dialogs = (props: PropsTypeDialogs) => {
  let dialogsElements = store._state.dialogsPage.dialogs.map((d: { name: string; id: number; }) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = store._state.dialogsPage.messages.map ((message: { message: string; }) => (
    <Message message={message.message} />
  ));
  let newMessageBody = store._state.dialogsPage.newMessageBody
  
  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  let body = e.target.value;
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
          <div><textarea value={newMessageBody}
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
