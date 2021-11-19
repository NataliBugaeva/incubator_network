import React from "react";
import UsersPage from "./UsersPage";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {AllActionType, UserType} from "../../types";
import {
    FollowUnfollowAC,
    SetCurrentPageAC,
    SetFetchingAC,
    SetTotalUsersCountAC,
    SetUsersAC
} from "../../redux/usersReducer";
import axios from "axios";
import Preloader from "../Preloader/preloader";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "438b43d8-c9fc-4009-a5e7-db75e710334c"
    }
})

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
    setFetching: (isFetching: boolean) => void
}

//здесь д.б. типизация пропсов и типизация стэйта. Но какой здесь стэйт???
class UsersPageContainer extends React.Component<UsersPageContainerPropsType, {}> {
    //componentDidMount вызывается один единственный раз после отрисовки
    componentDidMount() {
        this.props.setFetching(true);
        instance.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setFetching(false);
            })
    }

    onClickChangePage(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        let currentPage = +e.currentTarget.innerHTML;
        this.props.setFetching(true);

        instance.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
            .then(response => {
                console.log(response.data.items);
                this.props.setUsers(response.data.items);
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
                                                                 onClickChangePage={this.onClickChangePage.bind(this)}/>}
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

})

let MapDispatchToProps = (dispatch: (action: AllActionType) => void) => ({
    followUser: (userId: number) => {
        dispatch(FollowUnfollowAC(userId))
    },

    setUsers: (newUsers: Array<UserType>) => {
        dispatch(SetUsersAC(newUsers))
    },

    setTotalUsersCount: (totalUsersCount: number) => {
        dispatch(SetTotalUsersCountAC(totalUsersCount))
    },

    setCurrentPage: (currentPage: number) => {
        dispatch(SetCurrentPageAC(currentPage))
    },

    setFetching: (isFetching: boolean) => {
        dispatch(SetFetchingAC(isFetching))
    }
})

export default connect(MapStateToProps, MapDispatchToProps)(UsersPageContainer)
