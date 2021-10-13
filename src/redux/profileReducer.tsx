import {v1} from "uuid";
import postAva from "../images/kermit.jpg";
import {AllActionType, ProfilePageType} from "./state";

const ON_POST_CHANGE = 'ON-POST-CHANGE';
const ADD_NEW_POST = 'ADD-NEW-POST';

/*export type AllActionTypesOfProfileReducer =
    | OnPostChangeActionCreatorReturnedType
    | AddNewPostActionCreatorReturnedType;*/

function profileReducer(state: ProfilePageType, action: AllActionType) {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: v1(),
                name: state.newPostText,
                likesCount: 0,
                ava: postAva
            }
            state.myPosts = [newPost, ...state.myPosts];
            state.newPostText = '';
            return state;

        case ON_POST_CHANGE:
            state.newPostText = action.text;
            return state;

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
