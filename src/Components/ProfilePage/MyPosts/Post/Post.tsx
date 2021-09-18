import React from "react";
import s from './../../../../styles/Post.module.css';



type PostType = {
    avatar: any,
    name: string,
    likesCount: number
}

function Post(props: PostType) {
    return (
        <div className={s.profilePage_post}>
            <div className={s.profilePage_post_ava}>
                <img src={props.avatar} alt=""/>
            </div>
            <div>
                <div className={s.profilePage_post_name}>post name: {props.name}</div>
                <div className={s.profilePage_post_likes}>likes: {props.likesCount}</div>
            </div>
        </div>
    )
}

export default Post;
