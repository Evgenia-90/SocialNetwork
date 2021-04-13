import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
// import state, { addPost, updateNewPostText } from "./redux/state"
import store, {ActionsTypes, RootStateType, StoreType} from './redux/state'


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
  store: StoreType
}


const App: React.FC<PropsType> = (props) => {
const state = props.store.getState();
  return (
    <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path={"/dialogs"} render={ () => <Dialogs state={state} /> } />
            <Route path={"/profile"} render={() => <Profile posts={state.profilePage.posts} 
            newText={state.profilePage.newPostText}
            dispatch={store.dispatch.bind(store)}
             />} />
          </div>
        </div>
    </BrowserRouter>
  );
};

export default App;
