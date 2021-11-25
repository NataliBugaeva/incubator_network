import React from "react";
import s from './../../../styles/User.module.css'
import Avatar, {AvatarStylesType} from "../../Avatar/Avatar";
import {NavLink} from "react-router-dom";
import {instance} from "../../../types";

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
        instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`)
            .then(response => {
                if(response.data.resultCode == 0) {
                    props.followUser(props.id);
                }
            })
    }

    let unfollowUser = () => {
        instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`)
            .then(response => {
                if(response.data.resultCode == 0) {
                    props.followUser(props.id);
                }
            })
    }

    let button =  props.followed ? <button onClick={unfollowUser}>Unfollow</button>
        : <button onClick={followUser}>Follow</button>

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
