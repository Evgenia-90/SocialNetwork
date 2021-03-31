import React from "react";
import { DialogType, MessageType } from "../../App";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {RootStateType} from './../../redux/state'

export type dialogsType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};

export type PropsType = {
  state: RootStateType
}
const Dialogs = (props: PropsType) => {

 let state = props.state

  let dialogsElements = state.dialogsPage.dialogs.map((d: { name: string; id: number; }) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.dialogsPage.messages.map((message: { message: string; }) => (
    <Message message={message.message} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
