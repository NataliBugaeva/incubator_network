import ava from "../images/ava.jpg";
import friendAva from './../images/almo.jpg';
import postAva from './../images/kermit.jpg';
import {v1} from "uuid";

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}
export type ProfilePageType = {
    newPostText: string,
    aboutMe: AboutMeType,
    myPosts: Array<PostType>
}
export type AboutMeType = {
    name: string,
    birthDate: string,
    city: string,
    education: string
}
export type PostType = {
    id: string,
    name: string,
    likesCount: number,
    ava: string
}

export type DialogsPageType = {
    chats: Array<ChatType>,
    messages: Array<MessageType>,
    messageText: string
}
export type MessageType = {
    id: string,
    avatar: string,
    name: string,
    message: string,
    time: string
}
export type ChatType = {
    id: string,
    name: string
}
export type SidebarType = {
    friends: Array<FriendTypeInSidebar>
}
export type FriendTypeInSidebar = {
    id: string,
    name: string,
    ava: string
}

export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _callSubscriber: (state: StateType) => void,
    dispatch: (action: any) => void,
    subscribe: (observer: (state: StateType) => void) => void
}

const ON_POST_CHANGE = 'ON-POST-CHANGE',
      ADD_NEW_POST = 'ADD-NEW-POST',
      ON_MESSAGE_TEXT_CHANGE = 'ON-MESSAGE-TEXT-CHANGE',
      SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';


export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            aboutMe: {
                name: 'Natasha Bugaeva',
                birthDate: '26 of December',
                city: 'Minsk',
                education: 'higher'
            },
            myPosts: [
                {
                    id: v1(),
                    name: 'Alice',
                    likesCount: 5,
                    ava: postAva
                },
                {
                    id: v1(),
                    name: 'Julia',
                    likesCount: 7,
                    ava: postAva
                },
                {
                    id: v1(),
                    name: 'Kate',
                    likesCount: 9,
                    ava: postAva
                }
            ]
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: v1(),
                    name: 'Elmo',
                    ava: friendAva
                },
                {
                    id: v1(),
                    name: 'Cookie monster',
                    ava: friendAva
                },
                {
                    id: v1(),
                    name: 'Kermit',
                    ava: friendAva
                },
                {
                    id: v1(),
                    name: 'Erni',
                    ava: friendAva
                },
                {
                    id: v1(),
                    name: 'Oskar',
                    ava: friendAva
                },
                {
                    id: v1(),
                    name: 'Ebbi',
                    ava: friendAva
                }
            ]
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-NEW-POST':
                let newPost = {
                    id: v1(),
                    name: this._state.profilePage.newPostText,
                    likesCount: 0,
                    ava: postAva
                }
                this._state.profilePage.myPosts = [newPost, ...this._state.profilePage.myPosts];
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;

            case 'ON-POST-CHANGE':
                this._state.profilePage.newPostText = action.text;
                this._callSubscriber(this._state);
                break;

            case 'ON-MESSAGE-TEXT-CHANGE':
                this._state.dialogsPage.messageText = action.text;
                this._callSubscriber(this._state);
                break;

            case 'SEND-NEW-MESSAGE':
                let newMessage = {
                    id: v1(),
                    avatar: ava,
                    name: 'Natali',
                    message: this._state.dialogsPage.messageText,
                    time: `${new Date().getHours()} : ${new Date().getMinutes()}`
                };
                this._state.dialogsPage.messages = [...this._state.dialogsPage.messages, newMessage];
                this._state.dialogsPage.messageText = '';
                this._callSubscriber(this._state);
                break;

            default:
                break;
        }
    }

}

export const onPostChangeActionCreator = (text: string) => ({type: ON_POST_CHANGE, text: text});
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});

export const onMessageTextChangeActionCreator = (text: string) => ({type: ON_MESSAGE_TEXT_CHANGE, text: text});
export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE});

