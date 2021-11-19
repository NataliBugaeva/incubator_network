import React from "react";
import {instance, ProfilePageType, ProfileType} from "../../types";
import ProfilePage from "./ProfilePage";
import {addNewPost, changeProfile, onPostChange} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {RouteComponentProps, withRouter } from "react-router-dom";

export type ProfilePageContainerPropsType = {
    profilePage: ProfilePageType,
    //userId: string,
    onPostChange: (value: string) => void,
    addNewPost: () => void,
    changeProfile: (profile: ProfileType) => void,
}

export type ProfilePageContainerWithRouterPropsType = RouteComponentProps<{userId: string}>
    & ProfilePageContainerPropsType;

class ProfilePageContainer extends React.Component<ProfilePageContainerWithRouterPropsType, {}> {
    componentDidMount() {
        let userId = this.props.match.params.userId || 2;


        instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.changeProfile(response.data);
            })
    }

    render() {
        return (
            <ProfilePage profilePage={this.props.profilePage}
                         onPostChange={this.props.onPostChange}
                         addNewPost={this.props.addNewPost}/>
        )
    }
}

let MapStateToProps = (state: RootState) => ({
    profilePage: state.profilePage,
   // userId: state.profilePage.profile.userId
})


let ProfilePageContainerWithRouter = withRouter(ProfilePageContainer)

export default connect(MapStateToProps, {onPostChange,
    addNewPost, changeProfile})(ProfilePageContainerWithRouter);
