import {AllActionType, DialogsPageType} from "./state";
import {v1} from "uuid";
import ava from "../images/ava.jpg";

const ON_MESSAGE_TEXT_CHANGE = 'ON-MESSAGE-TEXT-CHANGE';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';


const dialogsReducer = (state: DialogsPageType, action: AllActionType): DialogsPageType => {
    let minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();

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
                time: `${new Date().getHours()} : ${minutes}`
            };
            state.messages = [...state.messages, newMessage];
            state.messageText = '';
            return state;

        default:
            return state;
    }
}

export const onMessageTextChangeActionCreator = (text: string)=> ({
    type: ON_MESSAGE_TEXT_CHANGE,
    text: text
} as const);
export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE} as const);

export default dialogsReducer;
