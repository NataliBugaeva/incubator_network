import React, {ChangeEvent} from "react";
import s from './../../styles/DialogsPage.module.css';
import Message from "./Message/Message";
import Chat from "./Chat/Chat";
import {DialogsPageType} from "../../types";
import { Redirect } from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export function DialogsPage(props: {
    dialogsPage: DialogsPageType,
   // isAuth: boolean | null,
   //  onChangeMessageText: (value: string) => void,
    onSendNewMessage: (messageText: string) => void
}) {

    // let onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // props.onChangeMessageText(e.currentTarget.value);
    // }

    // let sendNewMessage = () => {
    //     props.onSendNewMessage();
    // }

    const chats = props.dialogsPage.chats.map(elem => {
        return <Chat id={elem.id} name={elem.name} key={elem.id}/>
    })

    const messages = props.dialogsPage.messages.map(elem => {
        return <Message id={elem.id} avatar={elem.avatar} name={elem.name} time={elem.time}
                        message={elem.message} key={elem.id}/>
    })

   // if(!props.isAuth) return <Redirect to={'/login'}/>;

    const AddMessageFormReduxOnSubmit = (formData: AddMessageFormDataType) => {
        //alert(formData.newMessage);
        props.onSendNewMessage(formData.newMessage);
    }

    return (
        <div className={s.dialogsPage}>
            <div className={s.wrapper}>
                <div className={s.dialogsPage_chats}>
                    {chats}
                </div>

                <div className={s.dialogsPage_dialog}>
                    {messages}
                </div>
            </div>

            <AddMessageFormRedux onSubmit={AddMessageFormReduxOnSubmit}/>

            {/*<div className={s.newMessage}>*/}
            {/*    <textarea onChange={onChangeMessageText}*/}
            {/*              placeholder='enter your message...'*/}
            {/*              value={props.dialogsPage.messageText}/>*/}
            {/*    <button onClick={sendNewMessage}>Send</button>*/}
            {/*</div>*/}
        </div>
    )
}

export type AddMessageFormDataType = {
    newMessage: string
}

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessage'} placeholder={'enter your message...'}/>
            <button>Send</button>
            {/*<textarea onChange={onChangeMessageText}*/}
            {/*          placeholder='enter your message...'*/}
            {/*          value={props.dialogsPage.messageText}/>*/}

            {/*<button onClick={sendNewMessage}>Send</button>*/}
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({form: 'addNewMessage'})(AddMessageForm);


