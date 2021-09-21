import React from "react";
import s from './../../styles/DialogsPage.module.css';
import Message from "./Message/Message";
import {MessageType} from "./Message/Message";
import {NavLink} from "react-router-dom";
import Chat, {ChatType} from "./Chat/Chat";

export type DialogsPageType = {
    messages: Array<MessageType>,
    chats: Array<ChatType>
}



function DialogsPage(props: DialogsPageType) {

    return (
        <div className={s.dialogsPage}>
            <div className={s.dialogsPage_chats}>
                {props.chats.map( elem => {
                    return <Chat id={elem.id} name={elem.name}/>
                })}
            </div>

            <div className={s.dialogsPage_dialog}>
                {props.messages.map( elem => {
                    return <Message id={elem.id} avatar={elem.avatar} name={elem.name} time={elem.time} message={elem.message}/>
                })}
            </div>
        </div>
    )
}

export default DialogsPage;
