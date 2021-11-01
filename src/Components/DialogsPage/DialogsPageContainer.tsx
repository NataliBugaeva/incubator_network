import React from "react";
import {AllActionType, DialogsPageType} from "../../types";
import {onMessageTextChangeActionCreator, sendNewMessageActionCreator} from "../../redux/dialogsReducer";
import DialogsPage from "./DialogsPage";
import {StoreType} from "../../redux/store";

function DialogsPageContainer(props: {
    //dialogsPage: DialogsPageType,
    //dispatch: (action: AllActionType) => void
    store: StoreType
}) {

    let onChangeMessageText = (value: string) => {
        //props.dispatch(onMessageTextChangeActionCreator(value));
        props.store.dispatch(onMessageTextChangeActionCreator(value));
    }

    let onSendNewMessage = () => {
        //props.dispatch(sendNewMessageActionCreator());
        props.store.dispatch(sendNewMessageActionCreator());
    }

    return (
        <DialogsPage /*dialogsPage={props.dialogsPage}*/
            dialogsPage={props.store.getState().dialogsPage}
            onChangeMessageText={onChangeMessageText}
            onSendNewMessage={onSendNewMessage}/>
    )
}

export default DialogsPageContainer;
