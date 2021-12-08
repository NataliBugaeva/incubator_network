import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootState} from "../redux/store";

type mapStateToPropsForRedirectType = {
    isAuth: boolean | null
}

let mapStateToPropsForRedirect = (state: RootState): mapStateToPropsForRedirectType => ({
    isAuth: state.authData.isAuth
})

export function withAuthRedirect<T>(Component: React.ComponentType<T>)  {

    const RedirectComponent = (props: mapStateToPropsForRedirectType) => {

        let {isAuth, ...restProps} = props;

        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

   let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

   return ConnectedRedirectComponent;

}
