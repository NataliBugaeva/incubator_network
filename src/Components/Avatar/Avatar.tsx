import React from "react";
import s from '../../styles/Avatar.module.css';
import korzik from './../../images/ava.jpg';

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
            <img src={`${props.avatar || korzik}`} alt=""/>
        </div>
    )
}

export default Avatar;
