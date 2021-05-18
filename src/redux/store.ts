import dialogsReducer, { DialogPageType } from "./dialogs-reducer";
import profileReducer, { ProfilePageType } from "./profile-reducer";
import { ActionsTypes } from "./redux-store";
import sidebarReducer, { SidebarType } from "./sidebar-reducer";

type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi,how are you?", likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 11 },
                { id: 3, message: "Blabla", likesCount: 1 },
                { id: 4, message: "Hey", likesCount: 13 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Victor" },
                { id: 6, name: "Valera" },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How is your It-kamasutra?" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo" },
                { id: 5, message: "Hey" },
            ],
            newMessageBody: ""
        },
        sidebar: {
            data: [
                { name: "Johnatan" },
            ],
        }
    },
    _callSubscriber(state: RootStateType) {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель = observer , publisher-subscriber
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
};
type RootStateType = {
    profilePage: any
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export default store;
