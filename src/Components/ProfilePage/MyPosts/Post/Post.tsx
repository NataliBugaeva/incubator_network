import React from "react";
import s from './../../../../styles/Post.module.css';
import Avatar, {AvatarStylesType} from "../../../Avatar/Avatar";
import myAva from "../../../../images/ava.jpg";

type PostType = {
    avatar: any,
    name: string,
    likesCount: number
}

function Post(props: PostType) {
    const postAvaStyles: AvatarStylesType = {

        styles: {
            width: '50px',
            height: '50px',
            minWidth: '50px'
        },
        avatar: myAva
    }

    return (
        <div className={s.profilePage_post}>
            <Avatar styles={postAvaStyles.styles} avatar={postAvaStyles.avatar}/>
            <div>
                <div className={s.profilePage_post_name}>post name: {props.name}</div>
                <div className={s.profilePage_post_likes}>likes: {props.likesCount}</div>
            </div>
        </div>
    )
}

export default Post;
