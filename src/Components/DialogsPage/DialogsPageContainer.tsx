import {AllActionType} from "../../types";
import {onMessageTextChangeActionCreator, sendNewMessageActionCreator} from "../../redux/dialogsReducer";
import DialogsPage from "./DialogsPage";
import {RootState} from "../../redux/store";
import {connect} from "react-redux";

let MapStateToProps = (state: RootState) => ({
    dialogsPage: state.dialogsPage,
    isAuth: state.authData.isAuth
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
