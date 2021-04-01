let  rerenderEntireTree = (state: RootStateType) => {
  console.log("State changed"); 
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
 
let state: RootStateType = {
     profilePage: {
        posts: [
            { id: 1, message: "Hi,how are you?", likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 11 },
            { id: 3, message: "Blabla", likesCount: 1 },
            { id: 4, message: "Hey", likesCount: 13 }
          ],
        newPostText: "it-kamasutra.com"
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
  }
 
export const addPost = (postMessage: string) => {
  const newPost: PostType = {
    id: new Date().getTime(),
    message: postMessage,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText:string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}


export const subscribe = (observer: (state: RootStateType) => void) => {
  rerenderEntireTree = observer; //наблюдатель = observer , publisher-subscriber
}

  export default state;

  //store - OOP