import React from "react";
import {LocationType, UserType} from "../../../types";
import s from './../../../styles/User.module.css'
import Avatar, {AvatarStylesType} from "../../Avatar/Avatar";

export type UserPropsType = {
    id: string,
    followed: boolean,
    ava: string,
    fullName: string,
    status: string,
    location: LocationType,
    followUser: (userId: string) => void
}

const User = (props: UserPropsType) => {
    const styles: AvatarStylesType = {

        styles: {
            width: '100px',
            height: '100px',
            minWidth: '100px'
        },
        avatar: props.ava
    }

    let followUser = () => {
        props.followUser(props.id);
    }

    let button =  props.followed ? <button onClick={followUser}>Unfolloved</button>
        : <button onClick={followUser}>Folloved</button>

    return (
        <div className={s.user_block}>
            <div className={s.user_block_with_ava}>
                <Avatar styles={styles.styles} avatar={styles.avatar}/>
                {button}
            </div>

            <div className={s.user_block_info}>
                <div className={s.user_block_info_top}>
                    <div>{props.fullName}</div>
                    <div>{props.location.country}, {props.location.city}</div>
                </div>
                
                <div className={s.user_block_info_bottom}>
                    <div>{props.status}</div>
                </div>
            </div>
        </div>
    )
}

export default User
