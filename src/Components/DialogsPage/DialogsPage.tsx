import React, {ChangeEvent} from "react";
import s from './../../styles/DialogsPage.module.css';
import Message from "./Message/Message";
import Chat from "./Chat/Chat";
import {AllActionType, DialogsPageType} from "../../redux/state";

import {onMessageTextChangeActionCreator, sendNewMessageActionCreator} from "../../redux/dialogsReducer";

function DialogsPage(props: {
    dialogsPage: DialogsPageType,
    dispatch: (action: AllActionType) => void
}) {

    let onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
     props.dispatch(onMessageTextChangeActionCreator(e.currentTarget.value));
    }

    let sendNewMessage = () => {
        props.dispatch(sendNewMessageActionCreator());
    }

    return (
        <div className={s.dialogsPage}>
            <div className={s.wrapper}>
                <div className={s.dialogsPage_chats}>
                    {props.dialogsPage.chats.map(elem => {
                        return <Chat id={elem.id} name={elem.name} key={elem.id}/>
                    })}
                </div>

                <div className={s.dialogsPage_dialog}>
                    {props.dialogsPage.messages.map(elem => {
                        return <Message id={elem.id} avatar={elem.avatar} name={elem.name} time={elem.time}
                                        message={elem.message} key={elem.id}/>
                    })}
                </div>
            </div>

            <div className={s.newMessage}>
                <textarea onChange={onChangeMessageText}
                          placeholder='enter your message...'
                          value={props.dialogsPage.messageText}/>
                <button onClick={sendNewMessage}>Send</button>
            </div>
        </div>
    )
}

export default DialogsPage;
