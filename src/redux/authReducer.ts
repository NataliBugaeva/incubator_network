import {AllActionType, UserAuthDataType} from "../types";

let initialState = {} as UserAuthDataType;

export const authReducer = (state: UserAuthDataType = initialState, action: AllActionType): UserAuthDataType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.data}
        }
        default: return state;
    }
}

export const setUserData = (data: UserAuthDataType) => ({type: 'SET-USER-DATA', data}as const);
