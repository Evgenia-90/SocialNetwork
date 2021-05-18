import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import { ActionsTypes, AppStateType, StoreType } from "./redux/redux-store"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


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
        <Route path={"/profile"} render={() => <ProfileContainer />} />
        <Route path={"/users"} render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
