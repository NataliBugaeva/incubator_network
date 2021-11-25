import React from "react";
import UsersPage from "./UsersPage";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {UserType} from "../../types";
import {
    followUser,
    setCurrentPage,
    setFetching, setFollowingInProgress,
    setTotalUsersCount,
    setUsers
} from "../../redux/usersReducer";
import Preloader from "../Preloader/preloader";
import {userAPI} from "../../api/api";

export type UsersPageContainerPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followUser: (userId: number) => void,
    setUsers: (newUsers: Array<UserType>) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    setCurrentPage: (currentPage: number) => void,
    setFetching: (isFetching: boolean) => void,
    followingInProgress: Array<number>,
    setFollowingInProgress: (inProgress: boolean, userId: number) => void
}

//здесь д.б. типизация пропсов и типизация стэйта. Но какой здесь стэйт???
class UsersPageContainer extends React.Component<UsersPageContainerPropsType, {}> {
    //componentDidMount вызывается один единственный раз после отрисовки
    componentDidMount() {
        this.props.setFetching(true);
        // instance.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
        userAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.setFetching(false);
            })
    }

    onClickChangePage(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        let currentPage = +e.currentTarget.innerHTML;
        this.props.setFetching(true);

        //instance.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
        userAPI.getUsers(this.props.pageSize, currentPage)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setCurrentPage(currentPage);
                this.props.setFetching(false);
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <UsersPage users={this.props.users}
                                                                   pageSize={this.props.pageSize}
                                                                   totalUserCount={this.props.totalUserCount}
                                                                   currentPage={this.props.currentPage}
                                                                   followUser={this.props.followUser}
                                                                   onClickChangePage={this.onClickChangePage.bind(this)}
                                                                   followingInProgress={this.props.followingInProgress}
                                                                   setFollowingInProgress={this.props.setFollowingInProgress}/>}
            </>
        )
    }


}

let MapStateToProps = (state: RootState) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
})

/*let MapDispatchToProps = (dispatch: (action: AllActionType) => void) => ({
    followUser: (userId: number) => {
        dispatch(FollowUser(userId))
    },

    setUsers: (newUsers: Array<UserType>) => {
        dispatch(SetUsers(newUsers))
    },

    setTotalUsersCount: (totalUsersCount: number) => {
        dispatch(SetTotalUsersCount(totalUsersCount))
    },

    setCurrentPage: (currentPage: number) => {
        dispatch(SetCurrentPage(currentPage))
    },

    setFetching: (isFetching: boolean) => {
        dispatch(SetFetching(isFetching))
    }
})*/

export default connect(MapStateToProps, {
    followUser, setUsers, setTotalUsersCount,
    setCurrentPage, setFetching, setFollowingInProgress
})(UsersPageContainer)
