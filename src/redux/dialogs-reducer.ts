import { ActionsTypes, DialogPageType, SendMessageActionType, UpdateNewMessageBodyActionType } from "./store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
      {id: 1, name: "Dimych"},
      {id: 2, name: "Andrey"},
      {id: 3, name: "Sveta"},
      {id: 4, name: "Sasha"},
      {id: 5, name: "Victor"},
      {id: 6, name: "Valera"},
  ],
  messages: [
      {id: 1, message: "Hi"},
      {id: 2, message: "How is your It-kamasutra?"},
      {id: 3, message: "Yo"},
      {id: 4, message: "Yo"},
      {id: 5, message: "Hey"},
  ],
  newMessageBody: ""
};

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = {
        id: state.messages.length + 1,
        message: state.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, body],
        newMessageBody: "",
      };
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export const sendMessageCreator = (): SendMessageActionType =>
    ({type: SEND_MESSAGE})

export default dialogsReducer;
