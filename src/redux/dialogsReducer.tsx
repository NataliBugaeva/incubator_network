import {AllActionType, DialogsPageType} from "./state";
import {v1} from "uuid";
import ava from "../images/ava.jpg";

const ON_MESSAGE_TEXT_CHANGE = 'ON-MESSAGE-TEXT-CHANGE';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

/*export type AllActionTypesOfDialogsReducer =
    | SendNewMessageActionCreatorReturnedType
    | OnMessageTextChangeActionCreatorReturnedType;*/

const dialogsReducer = (state: DialogsPageType, action: AllActionType): DialogsPageType => {
    switch (action.type) {
        case ON_MESSAGE_TEXT_CHANGE:
            state.messageText = action.text;
            return state;

        case SEND_NEW_MESSAGE:
            let newMessage = {
                id: v1(),
                avatar: ava,
                name: 'Natali',
                message: state.messageText,
                time: `${new Date().getHours()} : ${new Date().getMinutes()}`
            };
            state.messages = [...state.messages, newMessage];
            state.messageText = '';
            return state;

        default:
            return state;
    }
}

export type OnMessageTextChangeActionCreatorReturnedType = {type: typeof ON_MESSAGE_TEXT_CHANGE, text: string};
export type SendNewMessageActionCreatorReturnedType = {type: typeof SEND_NEW_MESSAGE};

export const onMessageTextChangeActionCreator = (text: string): OnMessageTextChangeActionCreatorReturnedType => ({
    type: ON_MESSAGE_TEXT_CHANGE,
    text: text
});
export const sendNewMessageActionCreator = (): SendNewMessageActionCreatorReturnedType => ({type: SEND_NEW_MESSAGE});

export default dialogsReducer;
