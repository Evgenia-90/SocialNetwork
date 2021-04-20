import { ChangeEvent } from "react";
import { DialogType, MessageType } from "../../App";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {  DialogPageType } from "../../redux/store";
import { store } from "../../redux/redux-store";
 
export type dialogsType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};

export type PropsTypeDialogs = {
 updateNewMessageBody: (body:string) => void
 sendMessage: () => void
 dialogsPage: DialogPageType
 newMessageBody: string
}
const Dialogs = (props: PropsTypeDialogs) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d: { name: string; id: number; }) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map ((message: { message: string; }) => (
    <Message message={message.message} />
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
          <div><textarea value={props.newMessageBody}
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
