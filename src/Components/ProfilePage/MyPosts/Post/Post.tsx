import React from "react";
import s from './../../../../styles/Post.module.css';
import Avatar, {AvatarStylesType} from "../../../Avatar/Avatar";
import {PostType} from "../../../../types";

function Post(props: PostType) {

    const styles: AvatarStylesType = {
        styles: {
            width: '50px',
            height: '50px',
            minWidth: '50px'
        },
        avatar: props.ava
    }

    return (
        <div className={s.profilePage_post}>
            <Avatar styles={styles.styles} avatar={styles.avatar}/>
            <div>
                <div className={s.profilePage_post_name}>post name: {props.name}</div>
                <div className={s.profilePage_post_likes}>likes: {props.likesCount}</div>
            </div>
        </div>
    )
}

export default Post;
