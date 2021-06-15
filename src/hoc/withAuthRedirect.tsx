import { ComponentType } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { mapStatePropsForRedirectType } from "../components/Profile/ProfileContainer";
import { AppStateType } from "../redux/redux-store";

type mapStatePropsType = {
    isAuth: boolean
}

// const mapStateToProps = (state: AppStateType): mapStatePropsType => {
//     return {
//         isAuth: state.auth.isAuth
//     }
// }

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStatePropsType) => {
        let { isAuth, ...restProps } = props
        if (!isAuth) return <Redirect to={"/login"} />
        return <Component {...restProps as T} />
    }

    let mapStateToPropsForRedirect = (state: AppStateType): mapStatePropsForRedirectType => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);


    return ConnectedAuthRedirectComponent
}