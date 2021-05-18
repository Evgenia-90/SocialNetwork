import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { ProfileType } from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import Profile from "./Profile";
import {setUserProfile } from "../../redux/profile-reducer"

type MapStatePropsType = {  
    profile: null | ProfileType
}

type MapDispatchPropsType = {  
    setUserProfile: (profile: null | ProfileType) => void
}

class ProfileContainer extends React.Component<ProfilePropsType> {

componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    .then(response => {
        this.props.setUserProfile(response.data);
    });
}

render() {
  return (
    <div>
      <Profile {...this.props} profile={this.props.profile} />
    </div>
  );
}
};

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({ profile: state.profilePage.profile })

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);