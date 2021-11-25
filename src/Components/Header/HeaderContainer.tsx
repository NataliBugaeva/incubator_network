import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";
import {RootState} from "../../redux/store";
import {UserAuthDataType} from "../../types";
import {userAPI} from "../../api/api";

export type HeaderContainerPropsType = {
    id: number,
    login: string,
    setUserData: (data: UserAuthDataType) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
       // instance.get('https://social-network.samuraijs.com/api/1.0/auth/me')
        userAPI.authMe()
            .then(data => {
                if(data.resultCode === 0) {
                    this.props.setUserData(data.data);
                }
            })
    }

    render() {
        return (
            <Header id={this.props.id} login={this.props.login}/>
        )
    }
}

let MapStateToProps = (state: RootState) => ({
    id: state.authData.id,
    login: state.authData.login
})

export default connect(MapStateToProps, {setUserData})(HeaderContainer);
