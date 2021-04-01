import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import state, { addPost, updateNewPostText } from "./redux/state"
import {RootStateType} from './redux/state'

export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type DialogType = {
  id: number
  name:string
}
export type MessageType = {
  id: number
  message:string
}

export type PropsType = {
  state: RootStateType
  addPost: (postMessage: string) => void
  updateNewPostText: (newText: string) => void
}
 

const App = (props: PropsType) => {

  return (
    <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path={"/dialogs"} render={ () => <Dialogs state={props.state} /> } />
            <Route path={"/profile"} render={() => <Profile posts={state.profilePage.posts} 
            newText={state.profilePage.newPostText}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />} />
          </div>
        </div>
    </BrowserRouter>
  );
};

export default App;
