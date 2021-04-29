import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import { AppStateType, StoreType } from "./redux/redux-store"
import { ActionsTypes, RootStateType } from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type DialogType = {
  id: number
  name: string
}
export type MessageType = {
  id: number
  message: string
}

export type PropsType = {
  state: AppStateType
  dispatch: (action: ActionsTypes) => void
  store: StoreType
}

const App: React.FC = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path={"/dialogs"} render={() => <DialogsContainer />} />
        <Route path={"/profile"} render={() => <Profile />} />
        <Route path={"/users"} render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
