import React from "react";
import { connect } from "react-redux";
import { getUserProfile, ProfileType } from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import Profile from "./Profile";
import { RouteComponentProps, withRouter } from "react-router";
import { Redirect } from "react-router-dom";

type PathParamsType = {
  userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type MapStatePropsType = {
  profile: null | ProfileType
  isAuth: boolean
}

type MapDispatchPropsType = {
  // setUserProfile: (profile: null | ProfileType) => void
  getUserProfile: (userId: number) => void
}

class ProfileContainer extends React.Component<PropsType> {

  componentDidMount() {
    let userId = +this.props.match.params.userId
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
};

// let AuthRedirectComponent = (props) => {
//   return
// }

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);