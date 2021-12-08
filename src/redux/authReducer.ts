import {AllActionType, UserAuthDataType} from "../types";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./store";
import {authAPI} from "../api/api";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: UserAuthDataType = initialState, action: AllActionType): UserAuthDataType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.data, isAuth: true}
        }
        default: return state;
    }
}

export const setUserData = (data: UserAuthDataType) => ({type: 'SET-USER-DATA', data}as const);

//это authMeThunkCreator
export const authMe = (): ThunkAction<Promise<void>, RootState, unknown, AllActionType> => {
    return async (dispatch) => {
        authAPI.authMe()
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setUserData(data.data));
                }
            })
    }
}
