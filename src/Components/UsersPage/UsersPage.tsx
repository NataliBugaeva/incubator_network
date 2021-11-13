import React from "react";
import s from './../../styles/UsersPage.module.css'
import {UserType} from "../../types";
import User from "./User/User";
import axios from "axios";
import ava from './../../images/ava.jpg'

export type UsersPagePropsType = {
    users: Array<UserType>,
    followUser: (userId: number) => void,
    setUsers: (newUsers: Array<UserType>) => void
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "438b43d8-c9fc-4009-a5e7-db75e710334c"
    }
})

const UsersPage = (props: UsersPagePropsType) => {

    let getUsers = () => {
        if(props.users.length === 0) {
            instance.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                  props.setUsers(response.data.items);
                })
        }
    }


    let users = props.users.map(el => <User id={el.id}
                                            followed={el.followed}
                                            ava={el.photos.small ? el.photos.small : ava}
                                            name={el.name}
                                            status={el.status ? el.status : ''}
                                            followUser={props.followUser}/>)


    return (
        <div className={s.usersPage}>
            <button onClick={getUsers}>get users</button>
            <div>{users}</div>
            {/*<button className={s.button_set} onClick={setUsers}>Show more</button>*/}
        </div>

    )
}

export default UsersPage;