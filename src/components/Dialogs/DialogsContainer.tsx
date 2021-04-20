import { DialogType, MessageType } from "../../App"; 
import  { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import { ActionsTypes } from "../../redux/store";
import  {store, AppStateType, StoreType } from "../../redux/redux-store";
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
let state = store.getState()
  
  let onSendMessageClick = () => {
  store.dispatch(sendMessageCreator());
  }
  let onNewMessageChange = (body: string) => {

    store.dispatch(updateNewMessageBodyCreator(body));
  }

  return <Dialogs updateNewMessageBody={onNewMessageChange}
                  sendMessage={onSendMessageClick}
                  dialogsPage={state.dialogsPage} newMessageBody={state.dialogsPage.newMessageBody}/>
};

export default DialogsContainer;
