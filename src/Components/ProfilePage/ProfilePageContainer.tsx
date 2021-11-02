import React from "react";
import {AllActionType, ProfilePageType} from "../../types";
import ProfilePage from "./ProfilePage";
import {addNewPostActionCreator, onPostChangeActionCreator} from "../../redux/profileReducer";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";

/*
function ProfilePageContainer(/!*props: {
    profilePage: ProfilePageType,
    dispatch: (action: AllActionType) => void
}*!/) {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const onPostChange = (value: string) => {
                        store.dispatch(onPostChangeActionCreator(value))
                    }

                    const onAddNewPost = () => {
                        store.dispatch(addNewPostActionCreator())
                    }
                    return (
                        <ProfilePage profilePage={store.getState().profilePage}
                                     onPostChange={onPostChange}
                                     onAddNewPost={onAddNewPost}/>
                    )
                }
        }

        </StoreContext.Consumer>
    )
}*/

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
