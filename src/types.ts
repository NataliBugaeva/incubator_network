import {onMessageTextChangeActionCreator, sendNewMessageActionCreator} from "./redux/dialogsReducer";
import {addNewPost, changeProfile, onPostChange} from "./redux/profileReducer";
import {
    followUser,
    setCurrentPage,
    setFetching, setFollowingInProgress,
    setTotalUsersCount,
    setUsers,
} from "./redux/usersReducer";
import {setUserData} from "./redux/authReducer";


export type ProfilePageType = {
    profile: ProfileType,
    newPostText: string,
    //aboutMe: AboutMeType,
    myPosts: Array<PostType>,
}

export type ProfileContactsType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null
}
export type ProfilePhotosType = {
    small: string,
    large: string
}
export type ProfileType = {
    aboutMe: string,
    contacts: ProfileContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: ProfilePhotosType
}

// export type AboutMeType = {
//     name: string,
//     birthDate: string,
//     city: string,
//     education: string
// }
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
    followingInProgress: Array<number>
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

export type UserAuthDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null
}

export type AllActionType =
    | ReturnType<typeof onMessageTextChangeActionCreator>
    | ReturnType<typeof sendNewMessageActionCreator>
    | ReturnType<typeof addNewPost>
    | ReturnType<typeof onPostChange>
    | ReturnType<typeof changeProfile>
    | ReturnType<typeof followUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setUserData>
    | ReturnType<typeof setFollowingInProgress>

