import React from "react";
import UsersPage from "./UsersPage";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {AllActionType, UserType} from "../../types";
import {FollowUnfollowAC, SetUsersAC} from "../../redux/usersReducer";

let MapStateToProps = (state: RootState) => ({
    users: state.usersPage.users
})

let MapDispatchToProps = (dispatch: (action: AllActionType) => void) => ({
   followUser: (userId: number) => {
       dispatch(FollowUnfollowAC(userId))
   },

   setUsers: (newUsers: Array<UserType>) => {
       dispatch(SetUsersAC(newUsers))
   }
})

const UserPageContainer = connect(MapStateToProps, MapDispatchToProps)(UsersPage)

export default UserPageContainer;
