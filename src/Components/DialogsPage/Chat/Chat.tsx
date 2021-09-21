import React from "react";
import s from './../../../styles/Chat.module.css';
import {NavLink} from "react-router-dom";

export type ChatType = {
    id: number,
    name: string
}

function Chat(props: ChatType) {
    return (
        <div className={s.chat} key={props.id}>
            <NavLink  activeClassName={s.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default Chat;
