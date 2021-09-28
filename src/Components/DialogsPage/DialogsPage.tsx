import React from "react";
import s from './../../styles/DialogsPage.module.css';
import Message from "./Message/Message";
import Chat from "./Chat/Chat";
import {DialogsPageType} from "../../redux/state";

function DialogsPage(props: DialogsPageType) {

    return (
        <div className={s.dialogsPage}>
            <div className={s.dialogsPage_chats}>
                {props.chats.map( elem => {
                    return <Chat id={elem.id} name={elem.name} key={elem.id}/>
                })}
            </div>

            <div className={s.dialogsPage_dialog}>
                {props.messages.map( elem => {
                    return <Message id={elem.id} avatar={elem.avatar} name={elem.name} time={elem.time}
                                    message={elem.message} key={elem.id}/>
                })}
            </div>
        </div>
    )
}

export default DialogsPage;
