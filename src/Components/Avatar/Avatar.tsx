import React from "react";
import s from '../../styles/Avatar.module.css';

export type AvatarType = {
        width: string,
        height: string,
        minWidth: string
}

export type AvatarStylesType = {
    styles: AvatarType,
    avatar: string
}

function Avatar(props: AvatarStylesType) {
    return (
        <div className={s.avatar}
             style={props.styles}>
            <img src={`${props.avatar}`} alt=""/>
        </div>
    )
}

export default Avatar;
