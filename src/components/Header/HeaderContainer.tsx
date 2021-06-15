import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import Header from "./Header";
import { getAuthUserData } from "../../redux/auth-reducer"

type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchPropsType = {
  setAuthUserData: (id: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<any> {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return (
      <Header isAuth={this.props.isAuth} login={this.props.login} />
    )
  }
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.data.login,
})
export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
