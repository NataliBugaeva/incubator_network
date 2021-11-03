import React from "react";
import s from './../../styles/UsersPage.module.css'
import {UserType} from "../../types";
import User from "./User/User";

export type UsersPagePropsType = {
    users: Array<UserType>,
    followUser: (userId: string) => void,
    setUsers: (newUsers: Array<UserType>) => void
}

const UsersPage = (props: UsersPagePropsType) => {
    let users = props.users.map(el => <User id={el.id}
                                            followed={el.followed}
                                            ava={el.ava}
                                            fullName={el.fullName}
                                            status={el.status}
                                            location={el.location}
                                            followUser={props.followUser}/>)

let setUsers = () => {
        props.setUsers(props.users);
}

    return (
        <div className={s.usersPage}>
            <div>{users}</div>
            <button className={s.button_set} onClick={setUsers}>Show more</button>
        </div>

    )
}

export default UsersPage;
