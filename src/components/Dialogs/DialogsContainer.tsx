import  { DialogsReducerActionsType, DialogType, MessageType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import  { ActionsTypes, AppStateType, StoreType } from "../../redux/redux-store";
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
 dialogsPage: state.dialogsPage,
 isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch: (action: DialogsReducerActionsType) => void) => {
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
