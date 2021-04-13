export type StoreType = {
_state: RootStateType
_callSubscriber: (state: RootStateType) => void
getState: () => RootStateType
subscribe: (observer: (state: RootStateType) => void) => void
dispatch: (action: ActionsTypes ) => void
}

type AddPostActionType = {
  type: 'ADD-POST'

}
type UpdateNewPostTextActionType = {
  type: 'UPDATE-NEW-POST-TEXT'
  newText: string 
}
export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

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
     ]
   },
 },
 _callSubscriber(state: RootStateType) {
  console.log("State changed"); 
},

 getState() {
return this._state;
 },
 subscribe(observer){
  this._callSubscriber = observer; //наблюдатель = observer , publisher-subscriber
},

dispatch(action) { // {type: 'ADD-POST'}
if (action.type === 'ADD-POST') {
  const newPost: PostType = {
    id: new Date().getTime(),
    message: this._state.profilePage.newPostText,
    likesCount: 0
  }
  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostText = '';
  this._callSubscriber(this._state)
} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
  this._state.profilePage.newPostText = action.newText;
  this._callSubscriber(this._state);
}
}
}

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export default store;
