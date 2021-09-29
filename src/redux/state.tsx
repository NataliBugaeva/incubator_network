import ava from "../images/ava.jpg";
import friendAva from './../images/almo.jpg';
import postAva from './../images/kermit.jpg';
import {v1} from "uuid";
import profileReducer, {
    addNewPostActionCreator, AddNewPostActionCreatorReturnedType,
    onPostChangeActionCreator, OnPostChangeActionCreatorReturnedType
} from "./profileReducer";
import dialogsReducer, {
    onMessageTextChangeActionCreator, OnMessageTextChangeActionCreatorReturnedType,
    sendNewMessageActionCreator, SendNewMessageActionCreatorReturnedType
} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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

/*export type AllActionType =
    | ReturnType<typeof onMessageTextChangeActionCreator>
    | ReturnType<typeof sendNewMessageActionCreator>
    | ReturnType<typeof addNewPostActionCreator>
    | ReturnType<typeof onPostChangeActionCreator>*/

export type AllActionType =
    | OnMessageTextChangeActionCreatorReturnedType
    | SendNewMessageActionCreatorReturnedType
    | OnPostChangeActionCreatorReturnedType
    | AddNewPostActionCreatorReturnedType

export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _callSubscriber: (state: StateType) => void,
    dispatch: (action: AllActionType) => void,
    subscribe: (observer: (state: StateType) => void) => void
}


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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

