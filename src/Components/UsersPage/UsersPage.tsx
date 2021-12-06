import React from "react";
import s from './../../styles/UsersPage.module.css'
import {UserType} from "../../types";
import User from "./User/User";
import ava from './../../images/ava.jpg'

export type UsersPagePropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    followUserTC: (id: number) => void,
    unfollowUserTC: (id: number) => void,
   // followUser: (userId: number) => void,
    onClickChangePage: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
    followingInProgress: Array<number>,
    setFollowingInProgress: (inProgress: boolean, userId: number) => void
}

export const UsersPage = (props: UsersPagePropsType) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(props.totalUserCount / props.pageSize); i++) {
        pages.push(i);
    }

    let allPages = pages.map(el => <div onClick={props.onClickChangePage}
                                        className={el === props.currentPage ? s.selectedPage : ''}>{el}</div>)

    return (
        <div className={s.usersPage}>

            <div className={s.pages}>
                {allPages}
            </div>

            <div>{
                props.users.map(el => <User key={el.id}
                                            id={el.id}
                                            followed={el.followed}
                                            ava={el.photos.small ? el.photos.small : ava}
                                            name={el.name}
                                            status={el.status ? el.status : ''}
                                            followUserTC = {props.followUserTC}
                                            unfollowUserTC = {props.unfollowUserTC}
                                            //followUser={props.followUser}
                                            followingInProgress={props.followingInProgress}
                                            setFollowingInProgress={props.setFollowingInProgress}/>)
            }</div>
        </div>
    )
}

export default UsersPage;
