import React from "react";
import {AllActionType, DialogsPageType} from "../../types";
import {onMessageTextChangeActionCreator, sendNewMessageActionCreator} from "../../redux/dialogsReducer";
import DialogsPage from "./DialogsPage";
import {RootState, StoreType} from "../../redux/store";
import StoreContext from "../../StoreContext";
import {addNewPostActionCreator, onPostChangeActionCreator} from "../../redux/profileReducer";
import {connect} from "react-redux";
import ProfilePage from "../ProfilePage/ProfilePage";

/*function DialogsPageContainer(/!*props: {
    //dialogsPage: DialogsPageType,
    //dispatch: (action: AllActionType) => void
    store: StoreType
}*!/) {



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
                        <DialogsPage /!*dialogsPage={props.dialogsPage}*!/
                            dialogsPage={store.getState().dialogsPage}
                            onChangeMessageText={onChangeMessageText}
                            onSendNewMessage={onSendNewMessage}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}*/


let MapStateToProps = (state: RootState) => ({
    dialogsPage: state.dialogsPage
})

let MapDispatchToProps = (dispatch: (action: AllActionType) => void) => ({
    onChangeMessageText: (value: string) => {
        dispatch(onMessageTextChangeActionCreator(value))
    },
    onSendNewMessage: () => {
        dispatch(sendNewMessageActionCreator())
    }
})



const DialogsPageContainer = connect(MapStateToProps, MapDispatchToProps)(DialogsPage);

export default DialogsPageContainer;
