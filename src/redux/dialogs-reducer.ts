export type UpdateNewMessageBodyActionType = {
  type: 'UPDATE-NEW-MESSAGE-BODY'
  body: string
}
export type SendMessageActionType = {
  type: 'SEND-MESSAGE'
}

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export type MessageType = {
  id: number
  message: string
}
export type DialogType = {
  id: number
  name: string
}
export type DialogPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageBody: string
}

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Valera" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your It-kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Hey" },
  ] as Array<MessageType>,
  newMessageBody: ""
};

export type InitialStateType = typeof initialState

type DialogsReducerActionsType = UpdateNewMessageBodyActionType | SendMessageActionType

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsReducerActionsType) => {
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
  ({ body, type: UPDATE_NEW_MESSAGE_BODY })

export const sendMessageCreator = (): SendMessageActionType =>
  ({ type: SEND_MESSAGE })

export default dialogsReducer;
