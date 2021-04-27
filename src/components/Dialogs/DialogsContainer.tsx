import { DialogType, MessageType } from "../../App"; 
import  { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import { ActionsTypes } from "../../redux/store";
import  {store, AppStateType, StoreType } from "../../redux/redux-store";
import Dialogs  from "./Dialogs";
import { connect } from "react-redux";

export type dialogsType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};

export type PropsType = {
  state: AppStateType
  dispatch: (action: ActionsTypes) => void
  store: StoreType
}


let mapStateToProps = (state: AppStateType) => {
  return {
 dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
  return {
    sendMessage:() => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody:(body: string) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
