import React from "react";
import s from './../../../styles/Friend.module.css';
import Avatar, {AvatarStylesType} from "../../Avatar/Avatar";
import myAva from "../../../images/almo.jpg";
import {FriendTypeInSidebar} from "../../../redux/state";


function Friend(props: FriendTypeInSidebar) {
    const styles: AvatarStylesType = {

        styles: {
            width: '40px',
            height: '40px',
            minWidth: '40px'
        },
        avatar: props.ava
    }

    return (
        <div className={s.friend}>
            <Avatar styles={styles.styles} avatar={styles.avatar}/>
            <div className={s.friend_name}>{props.name}</div>
        </div>
    )
}

export default Friend;
