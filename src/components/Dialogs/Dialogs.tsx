import React, { ChangeEvent } from "react";
import { DialogType, MessageType } from "../../App";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import store, {RootStateType, sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/state'

export type dialogsType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};

export type PropsType = {
  state: RootStateType
}
const Dialogs = (props: PropsType) => {

 let state = store.getState().dialogsPage

  let dialogsElements = state.dialogs.map((d: { name: string; id: number; }) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map ((message: { message: string; }) => (
    <Message message={message.message} />
  ));
  let newMessageBody = state.newMessageBody
  let onSendMessageClick = () => {
    store.dispatch(sendMessageCreator());
  }
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  let body = e.target.value;
    store.dispatch(updateNewMessageBodyCreator(body));
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
