import { DialogType, MessageType } from "../../App"; 
import  { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import { ActionsTypes } from "../../redux/store";
import store from "../../redux/store";
import { AppStateType, StoreType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

export type dialogsType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};

export type PropsType = {
  state: AppStateType
  dispatch: (action: ActionsTypes) => void
  store: StoreType
}
const DialogsContainer = (props: PropsType) => {
let state = store._state.dialogsPage
  
  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  }
  let onNewMessageChange = (body: string) => {
    props.dispatch(updateNewMessageBodyCreator(body));
  }

  return <Dialogs updateNewMessageBody={onNewMessageChange}
                  sendMessage={onSendMessageClick}
                  dialogsPage={state}/>
};

export default DialogsContainer;
