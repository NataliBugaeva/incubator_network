import React from "react";
import {instance, ProfilePageType, ProfileType} from "../../types";
import ProfilePage from "./ProfilePage";
import {addNewPost, changeProfile, onPostChange} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";

export type ProfilePageContainerPropsType = {
    profilePage: ProfilePageType,
    onPostChange: (value: string) => void,
    addNewPost: () => void,
    changeProfile: (profile: ProfileType) => void,
}

class ProfilePageContainer extends React.Component<ProfilePageContainerPropsType, {}> {
    componentDidMount() {
        instance.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
    profilePage: state.profilePage
})

export default connect(MapStateToProps, {onPostChange,
    addNewPost, changeProfile})(ProfilePageContainer);
