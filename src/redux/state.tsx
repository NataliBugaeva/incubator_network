import ava from "../images/ava.jpg";
import friendAva from './../images/almo.jpg';
import postAva from './../images/kermit.jpg';
import {v1} from "uuid";
/*import {rerenderEntireTree} from "../index";*/

let rerenderEntireTree = (state: StateType) => {

}

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
    messages: Array<MessageType>,
    chats: Array<ChatType>
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

export const state: StateType = {
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
        ]
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
}


export const addNewPost = () => {
    let newPost = {
        id: v1(),
        name: state.profilePage.newPostText,
        likesCount: 0,
        ava: postAva
    }
    state.profilePage.myPosts = [newPost, ...state.profilePage.myPosts];
    onPostChange('');
    rerenderEntireTree(state);
}

export const onPostChange = (text: string) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}

export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer;
}
