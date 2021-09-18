import React from "react";
import s from '../../styles/Avatar.module.css';

type AvatarType = {
    width: string,
    height: string,
    minWidth: string,
    avatar: any
}

function Avatar(props: AvatarType) {
    return (
        <div className={s.profilePage_aboutMe_avatar}
             /*width={props.width}
             height={props.height}
             min-width={props.minWidth}*/>
            <img src={props.avatar} alt=""/>
        </div>
    )
}

export default Avatar;
