import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reducer"

type MapStatePropsType = {  
  isAuth: boolean
  login: string | null
}

type MapDispatchPropsType = {  
  setAuthUserData: (id: number, email: string, login: string) => void
}

// type PropsType = RouteComponentProps & HeaderPropsType
type PropsType = HeaderPropsType

class HeaderContainer extends React.Component<any> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          
          this.props.setAuthUserData(response.data.data)
        }
      });
  }
  render() {
    return (
      // <Header {...this.props} />
      <Header isAuth={this.props.isAuth} login={this.props.login}/>

    )
  }
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.data.login,
})
export default connect(mapStateToProps, { setAuthUserData }) (HeaderContainer);
 

