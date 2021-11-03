import {v1} from "uuid";
import postAva from "../images/kermit.jpg";
import {AllActionType, ProfilePageType} from "../types";

const ON_POST_CHANGE = 'ON-POST-CHANGE';
const ADD_NEW_POST = 'ADD-NEW-POST';

let initialState: ProfilePageType = {
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
}

function profileReducer(state: ProfilePageType = initialState, action: AllActionType): ProfilePageType {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: v1(),
                name: state.newPostText,
                likesCount: 0,
                ava: postAva
            }
            return {...state, myPosts:[newPost, ...state.myPosts], newPostText: ''}


        case ON_POST_CHANGE:
            return {...state, newPostText: action.text}

        default:
            return state;
    }
}


export const onPostChangeActionCreator = (text: string) => ({
        type: ON_POST_CHANGE,
        text: text
    } as const);

export const addNewPostActionCreator = () => ({type: ADD_NEW_POST} as const);

export default profileReducer;
