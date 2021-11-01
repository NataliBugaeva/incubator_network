import React from "react";
import s from './../../../styles/Chat.module.css';
import {NavLink} from "react-router-dom";
import {ChatType} from "../../../types";



function Chat(props: ChatType) {
    return (
        <div className={s.chat}>
            <NavLink  activeClassName={s.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default Chat;
