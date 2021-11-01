import React from "react";
import {AllActionType, ProfilePageType} from "../../types";
import ProfilePage from "./ProfilePage";
import {addNewPostActionCreator, onPostChangeActionCreator} from "../../redux/profileReducer";


function ProfilePageContainer(props: {
    profilePage: ProfilePageType,
    dispatch: (action: AllActionType) => void
}) {

    const onPostChange = (value: string) => {
        props.dispatch(onPostChangeActionCreator(value))
    }

    const onAddNewPost = () => {
        props.dispatch(addNewPostActionCreator())
    }



    return (
        <ProfilePage profilePage={props.profilePage}
        onPostChange={onPostChange}
        onAddNewPost={onAddNewPost}/>
    )
}

export default ProfilePageContainer;
