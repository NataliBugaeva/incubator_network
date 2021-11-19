import {onMessageTextChangeActionCreator, sendNewMessageActionCreator} from "./redux/dialogsReducer";
import {addNewPostActionCreator, onPostChangeActionCreator} from "./redux/profileReducer";
import {
    followUser,
    setCurrentPage,
    setFetching,
    setTotalUsersCount,
    setUsers,
} from "./redux/usersReducer";

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

export type UsersPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
}
export type UserType = {
    id: number,
    followed: boolean,
    photos: {
        large: string,
        small: string
    }
    name: string,
    status: string,
}

export type AllActionType =
    | ReturnType<typeof onMessageTextChangeActionCreator>
    | ReturnType<typeof sendNewMessageActionCreator>
    | ReturnType<typeof addNewPostActionCreator>
    | ReturnType<typeof onPostChangeActionCreator>
    | ReturnType<typeof followUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setFetching>

