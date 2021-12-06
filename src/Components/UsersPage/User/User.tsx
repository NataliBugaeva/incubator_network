import React from "react";
import s from './../../../styles/User.module.css'
import Avatar, {AvatarStylesType} from "../../Avatar/Avatar";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../../api/api";

export type UserPropsType = {
    id: number,
    followed: boolean,
    ava: string,
    name: string,
    status: string,
    followUserTC: (id: number) => void,
    unfollowUserTC: (id: number) => void,
    followingInProgress: Array<number>,
    setFollowingInProgress: (inProgress: boolean, userId: number) => void,
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
        props.setFollowingInProgress(true, props.id);
        //instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`)

       props.followUserTC(props.id);
        // userAPI.followUser(props.id)
        //     .then(data => {
        //         if(data.resultCode === 0) {
        //             props.followUser(props.id);
        //         }
        //         props.setFollowingInProgress(false, props.id);
        //     })
    }

    let unfollowUser = () => {
       props.setFollowingInProgress(true, props.id);
        //instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`)
        props.unfollowUserTC(props.id);
        // userAPI.unfollowUser(props.id)
        //     .then(data => {
        //         if(data.resultCode === 0) {
        //             props.followUser(props.id);
        //         }
        //      props.setFollowingInProgress(false, props.id);
        //     })
    }

    let button =  props.followed ? <button disabled={props.followingInProgress.some(id => id === props.id)}
                                           onClick={unfollowUser}>Unfollow</button>
        : <button disabled={props.followingInProgress.some(id => id === props.id)}
                  onClick={followUser}>Follow</button>

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
