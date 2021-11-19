import {v1} from "uuid";
import postAva from "../images/kermit.jpg";
import {AllActionType, ProfilePageType, ProfileType} from "../types";


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
    newPostText: '',
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
}

function profileReducer(state: ProfilePageType = initialState, action: AllActionType): ProfilePageType {
    switch (action.type) {
        case 'ADD-NEW-POST': {
            let newPost = {
                id: v1(),
                name: state.newPostText,
                likesCount: 0,
                ava: postAva
            }
            return {...state, myPosts: [newPost, ...state.myPosts], newPostText: ''}
        }

        case 'ON-POST-CHANGE': {
            return {...state, newPostText: action.text}
        }

        case 'CHANGE-PROFILE': {
            return {...state, profile: action.profile}
        }

        default:
            return state;
    }
}


export const onPostChange = (text: string) => ({type: 'ON-POST-CHANGE', text: text} as const);
export const addNewPost = () => ({type: 'ADD-NEW-POST'} as const);
export const changeProfile = (profile: ProfileType) => ({type: 'CHANGE-PROFILE', profile} as const);

export default profileReducer;
