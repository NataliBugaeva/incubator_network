import React, {Dispatch} from "react";
import UsersPage from "./UsersPage";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {UserType} from "../../types";
import {
    followUser, followUserTC,
    getUsers,
    setCurrentPage,
    setFollowingInProgress, unfollowUserTC,
} from "../../redux/usersReducer";
import Preloader from "../Preloader/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type UsersPageContainerPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
    followUser: (userId: number) => void,
    followUserTC: (id: number) => void,
    unfollowUserTC: (id: number) => void,
   // setUsers: (newUsers: Array<UserType>) => void,
   // setTotalUsersCount: (totalUsersCount: number) => void,
    setCurrentPage: (currentPage: number) => void,
   // setFetching: (isFetching: boolean) => void,

    setFollowingInProgress: (inProgress: boolean, userId: number) => void,
    getUsers:  (pageSize: number, currentPage: number) => void
    //getUsers: getUsersThunkCreator
}

//здесь д.б. типизация пропсов и типизация стэйта. Но какой здесь стэйт???
class UsersPageContainer extends React.Component<UsersPageContainerPropsType, {}> {
    //componentDidMount вызывается один единственный раз после отрисовки
    componentDidMount() {
        //это санка
        this.props.getUsers(this.props.pageSize, this.props.currentPage);

        // this.props.setFetching(true);
        // // instance.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
        // userAPI.getUsers(this.props.pageSize, this.props.currentPage)
        //     .then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //         this.props.setFetching(false);
        //     })
    }

    onClickChangePage(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        let currentPage = +e.currentTarget.innerHTML;
        this.props.setCurrentPage(currentPage);
        //это санка
        this.props.getUsers(this.props.pageSize, currentPage);

        // let currentPage = +e.currentTarget.innerHTML;
        // this.props.setFetching(true);
        // this.props.setCurrentPage(currentPage);
        //
        // //instance.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
        // userAPI.getUsers(this.props.pageSize, currentPage)
        //     .then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setFetching(false);
        //     })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <UsersPage users={this.props.users}
                                                                   pageSize={this.props.pageSize}
                                                                   totalUserCount={this.props.totalUserCount}
                                                                   currentPage={this.props.currentPage}
                                                                   onClickChangePage={this.onClickChangePage.bind(this)}
                                                                   followingInProgress={this.props.followingInProgress}
                                                                   followUserTC={this.props.followUserTC}
                                                                   unfollowUserTC={this.props.unfollowUserTC}
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


export default withAuthRedirect(connect(MapStateToProps, {
    followUser, setCurrentPage, setFollowingInProgress,
    getUsers, followUserTC, unfollowUserTC
})(UsersPageContainer))
