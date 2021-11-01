import React from "react";
import {AllActionType, DialogsPageType} from "../../types";
import {onMessageTextChangeActionCreator, sendNewMessageActionCreator} from "../../redux/dialogsReducer";
import DialogsPage from "./DialogsPage";
import {StoreType} from "../../redux/store";
import StoreContext from "../../StoreContext";

function DialogsPageContainer(/*props: {
    //dialogsPage: DialogsPageType,
    //dispatch: (action: AllActionType) => void
    store: StoreType
}*/) {



    return (
        <StoreContext.Consumer>
            {
                store => {
                    let onChangeMessageText = (value: string) => {
                        //props.dispatch(onMessageTextChangeActionCreator(value));
                        store.dispatch(onMessageTextChangeActionCreator(value));
                    }

                    let onSendNewMessage = () => {
                        //props.dispatch(sendNewMessageActionCreator());
                        store.dispatch(sendNewMessageActionCreator());
                    }
                    return (
                        <DialogsPage /*dialogsPage={props.dialogsPage}*/
                            dialogsPage={store.getState().dialogsPage}
                            onChangeMessageText={onChangeMessageText}
                            onSendNewMessage={onSendNewMessage}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsPageContainer;
