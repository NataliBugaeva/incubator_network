import React from "react";
import {ProfilePageType} from "../../types";
import ProfilePage from "./ProfilePage";
import {addNewPost, getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";

export type ProfilePageContainerPropsType = {
    profilePage: ProfilePageType,
    status: string,
    //isAuth: boolean | null,
    //userId: string,
    //onPostChange: (value: string) => void,
    addNewPost: () => void,
    getProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void
}

export type ProfilePageContainerWithRouterPropsType = RouteComponentProps<{ userId: string }>
    & ProfilePageContainerPropsType;

class ProfilePageContainer extends React.Component<ProfilePageContainerWithRouterPropsType, {}> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId) || 2;


        //instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        this.props.getProfile(userId);
        // userAPI.getProfile(userId)
        //     .then(data => {
        //         this.props.changeProfile(data);
        //     })

        this.props.getStatus(userId);
    }

    render() {
        // if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <ProfilePage {...this.props}
                         profilePage={this.props.profilePage}
                        // onPostChange={this.props.onPostChange}
                         addNewPost={this.props.addNewPost}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
            />
        )
    }
}

let MapStateToProps = (state: RootState) => ({
    profilePage: state.profilePage,
    status: state.profilePage.status
    //isAuth: state.authData.isAuth
    // userId: state.profilePage.profile.userId
})


// let ProfilePageContainerWithRouter = withRouter(ProfilePageContainer)
//
// export default withAuthRedirect(connect(MapStateToProps, {
//     onPostChange,
//     addNewPost, getProfile
// })(ProfilePageContainerWithRouter));

export default compose<React.ComponentType>(
    connect(MapStateToProps, {
        // onPostChange,
        addNewPost, getProfile, getStatus, updateStatus
    }),
    withAuthRedirect,
    withRouter
)(ProfilePageContainer)
