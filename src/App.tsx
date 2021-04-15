import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import {StoreType} from "./redux/redux-store"
import { ActionsTypes, RootStateType } from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


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
  state:  RootStateType
  dispatch: (action: ActionsTypes) => void
  store: StoreType
}

const App: React.FC<PropsType> = (props) => {
  return (
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path={"/dialogs"} render={ () => <DialogsContainer state={props.state}
                                                                      dispatch={props.dispatch}
                                                                      store={props.store}
                                                                       
                                                                       />} /> 
              <Route path={"/profile"} render={() => <Profile dispatch={props.dispatch}
                                                              newText={props.state.profilePage.newPostText} 
                                                              posts={props.state.profilePage.posts}
                                                              />} /> 
          </div>
        </div>
  );
};

export default App;
