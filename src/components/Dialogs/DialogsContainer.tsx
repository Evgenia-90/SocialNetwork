import { DialogsReducerActionsType, DialogType, MessageType, sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import { ActionsTypes, AppStateType, StoreType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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

let mapDispatchToProps = (dispatch: (action: DialogsReducerActionsType) => void) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
