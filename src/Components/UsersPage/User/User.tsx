import React from "react";
import s from './../../../styles/User.module.css'
import Avatar, {AvatarStylesType} from "../../Avatar/Avatar";
import {NavLink} from "react-router-dom";

export type UserPropsType = {
    id: number,
    followed: boolean,
    ava: string,
    name: string,
    status: string,
    followUser: (userId: number) => void
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
                <NavLink to={`/profile/${props.id}`}>
                    <Avatar styles={styles.styles} avatar={styles.avatar}/>
                </NavLink>
                {button}
            </div>

            <div className={s.user_block_info}>
                <div className={s.user_block_info_top}>
                    <div>{props.name}</div>
                </div>
                
                <div className={s.user_block_info_bottom}>
                    <div>{props.status}</div>
                </div>
            </div>
        </div>
    )
}

export default User
