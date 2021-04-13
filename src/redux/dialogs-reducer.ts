import { ActionsTypes, PostType, RootStateType } from "./state";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state: RootStateType, action: ActionsTypes) => {
  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.dialogsPage.newMessageBody = action.body;
  } else if (action.type === SEND_MESSAGE) {
    let body = state.dialogsPage.newMessageBody;
    state.dialogsPage.newMessageBody = "";
    state.dialogsPage.messages.push({ id: 6, message: body });
  }
  return state;
};

export default dialogsReducer;
