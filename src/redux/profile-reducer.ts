export type AddPostActionType = {
  type: 'ADD-POST'
}
export type SetUserProfileActionType = {
  type: 'SET-USER-PROFILE'
  profile: null | ProfileType
}
export type UpdateNewPostTextActionType = {
  type: 'UPDATE-NEW-POST-TEXT'
  newText: string
}
export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
  profile: null | ProfileType
}
export type PostType = {
  id: number
  message: string
  likesCount: number
}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: {
    small: string
    large: string
  }
}




const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hi,how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 1 },
    { id: 4, message: "Hey", likesCount: 13 }
  ],
  newPostText: '',
  profile: null
};

type ProfileReducerActionsType = AddPostActionType |
  SetUserProfileActionType |
  UpdateNewPostTextActionType

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionsType): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      let newPost: PostType = {
        id: new Date().getTime(),
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (): AddPostActionType => ({ type: ADD_POST })
export const setUserProfile = (profile: null | ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;
