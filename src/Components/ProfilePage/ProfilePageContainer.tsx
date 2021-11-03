import React from "react";
import {AllActionType} from "../../types";
import ProfilePage from "./ProfilePage";
import {addNewPostActionCreator, onPostChangeActionCreator} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";

let MapStateToProps = (state: RootState) => ({
    profilePage: state.profilePage
})

let MapDispatchToProps = (dispatch: (action: AllActionType) => void) => ({
    onPostChange: (value: string) => {
        dispatch(onPostChangeActionCreator(value))
    },
    onAddNewPost: () => {
        dispatch(addNewPostActionCreator())
    }
})



const ProfilePageContainer = connect(MapStateToProps, MapDispatchToProps)(ProfilePage);

export default ProfilePageContainer;
