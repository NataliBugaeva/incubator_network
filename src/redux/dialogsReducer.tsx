/*import {AllActionType, DialogsPageType} from "./state";*/
import {v1} from "uuid";
import ava from "../images/ava.jpg";
import {AllActionType, DialogsPageType} from "../types";

const ON_MESSAGE_TEXT_CHANGE = 'ON-MESSAGE-TEXT-CHANGE';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

let initialState: DialogsPageType = {
    messages: [
        {
            id: v1(),
            avatar: ava,
            name: 'Alice',
            message: 'Hi! How are you?',
            time: '22:25'
        },
        {
            id: v1(),
            avatar: ava,
            name: 'Kate',
            message: 'How it\'s going?',
            time: '23:02'
        },
        {
            id: v1(),
            avatar: ava,
            name: 'Juli',
            message: 'It\'s all right',
            time: '23:30'
        }
    ],
    chats: [
        {
            id: v1(),
            name: 'Alice'
        },
        {
            id: v1(),
            name: 'Kate'
        },
        {
            id: v1(),
            name: 'Juli'
        },
        {
            id: v1(),
            name: 'Alex'
        },
        {
            id: v1(),
            name: 'Jon'
        }
    ],
    messageText: ''
}


const dialogsReducer = (state: DialogsPageType = initialState, action: AllActionType): DialogsPageType => {
    let minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();

    switch (action.type) {
        case ON_MESSAGE_TEXT_CHANGE:
            //state.messageText = action.text;
            //return state;
            return {...state, messageText: action.text}

        case SEND_NEW_MESSAGE:
            let newMessage = {
                id: v1(),
                avatar: ava,
                name: 'Natali',
                message: state.messageText,
                time: `${new Date().getHours()} : ${minutes}`
            };
            // state.messages = [...state.messages, newMessage, ];
            //state.messageText = '';
            //return state;
            return {...state, messages: [...state.messages, newMessage], messageText: ''}


        default:
            return state;
    }
}

export const onMessageTextChangeActionCreator = (text: string) => ({
    type: ON_MESSAGE_TEXT_CHANGE,
    text: text
} as const);

export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE} as const);

export default dialogsReducer;
