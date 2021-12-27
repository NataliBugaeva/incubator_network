import { ThunkAction } from "redux-thunk";
import {v1} from "uuid";
import postAva from "../images/kermit.jpg";
import {AllActionType, ProfilePageType, ProfileType} from "../types";
import {RootState} from "./store";
import {profileAPI, userAPI} from "../api/api";


let initialState: ProfilePageType = {
    profile: {
        aboutMe: "Наташечка золотце",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/natashechka",
            twitter: "https://twitter.com/@nb",
            instagram: "instagra.com/nata_bgv",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "looking for a dream job",
        fullName: "samurai natashechka",
        userId: 2,
        photos: {
            small: postAva,
            large: postAva,
        }
    },
  //  newPostText: '',


    // aboutMe: {
    //     name: 'Natasha Bugaeva',
    //     birthDate: '26 of December',
    //     city: 'Minsk',
    //     education: 'higher'
    // },
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
    ],
    status: ''
}

function profileReducer(state: ProfilePageType = initialState, action: AllActionType): ProfilePageType {
    switch (action.type) {
        // case 'ADD-NEW-POST': {
        //     let newPost = {
        //         id: v1(),
        //         name: state.newPostText,
        //         likesCount: 0,
        //         ava: postAva
        //     }
        //     return {...state, myPosts: [newPost, ...state.myPosts], newPostText: ''}
        // }
        case 'ADD-NEW-POST': {
            let newPost = {
                id: v1(),
                name: action.newPostText,
                likesCount: 0,
                ava: postAva
            }
            return {...state, myPosts: [newPost, ...state.myPosts]}
        }

        // case 'ON-POST-CHANGE': {
        //     return {...state, newPostText: action.text}
        // }

        case 'CHANGE-PROFILE': {
            return {...state, profile: action.profile}
        }

        case "SET-STATUS": {
            return {...state, status: action.status}
        }

        default:
            return state;
    }
}


//export const onPostChange = (text: string) => ({type: 'ON-POST-CHANGE', text: text} as const);


export const addNewPost = (newPostText: string) => ({type: 'ADD-NEW-POST', newPostText} as const);


export const changeProfile = (profile: ProfileType) => ({type: 'CHANGE-PROFILE', profile} as const);

export const setStatus = (status: string) => ({type: 'SET-STATUS', status}as const);

//это getProfileThunkCreator

export const getProfile = (userId: number): ThunkAction<Promise<void>, RootState, unknown, AllActionType> => {
    return async (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(changeProfile(data));
            })
    }
}

//это getStatusThunkCreator
export const getStatus = (userId: number): ThunkAction<Promise<void>, RootState, unknown, AllActionType> => {
    return async (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            })
    }
}

//это updateStatusThunkCreator
export const updateStatus = (status: string): ThunkAction<Promise<void>, RootState, unknown, AllActionType> => {
    return async (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(!response.data.resultCode) {
                    dispatch(setStatus(status));
                }
            })
    }
}

export default profileReducer;
