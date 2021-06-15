import React from "react";
import { connect } from "react-redux";
import { getUserProfile, ProfileType } from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import Profile from "./Profile";
import { RouteComponentProps, withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

type PathParamsType = {
  userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type MapStatePropsType = {
  profile: null | ProfileType
}
export type mapStatePropsForRedirectType = {
  isAuth: boolean
}

type MapDispatchPropsType = {
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
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
  }
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);