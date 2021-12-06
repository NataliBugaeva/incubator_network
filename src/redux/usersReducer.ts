import {AllActionType, UsersPageType, UserType} from "../types";
import {userAPI} from "../api/api";
import {Dispatch} from "react";
import { ThunkAction } from "redux-thunk";
import {RootState} from "./store";

let initialState: UsersPageType = {
    users: [],
    pageSize: 75,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state: UsersPageType = initialState, action: AllActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: !el.followed} : el)
            }
        }
        case 'SET-USERS': {
            //return {...state, users: [...state.users, ...action.newUsers]}
            return {...state, users: [...action.newUsers]}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUserCount: action.totalUsersCount}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case "SET-FOLLOWING-IN-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followUser = (userId: number) => ({type: 'FOLLOW-UNFOLLOW', userId} as const);
export const setUsers = (newUsers: Array<UserType>) => ({type: 'SET-USERS', newUsers} as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount
} as const);
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const);
export const setFetching = (isFetching: boolean) => ({type: 'SET-FETCHING', isFetching} as const);
export const setFollowingInProgress = (inProgress: boolean, userId: number) => ({
    type: 'SET-FOLLOWING-IN-PROGRESS',
    inProgress, userId
} as const);

//export type getUsersThunkCreator = ReturnType <typeof getUsers>;

//это getUsersThunkCreator
export const getUsers = (pageSize: number, currentPage: number): ThunkAction<Promise<void>, RootState, unknown, AllActionType> => {
    return async (dispatch) => {
        dispatch(setFetching(true));
        // instance.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
        userAPI.getUsers(pageSize, currentPage)
            .then(data => {
               dispatch(setUsers(data.items));
               dispatch(setTotalUsersCount(data.totalCount));
               dispatch(setFetching(false));
            })
    }
}

//это followUserThunkCreator
export const followUserTC = (id: number): ThunkAction<Promise<void>, RootState, unknown, AllActionType> => {
    return async (dispatch) => {
        userAPI.followUser(id)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(followUser(id));
                }
                dispatch(setFollowingInProgress(false, id));
            })
    }
}

//это unfollowUserThunkCreator
export const unfollowUserTC = (id: number): ThunkAction<Promise<void>, RootState, unknown, AllActionType> => {
    return async (dispatch) => {
        userAPI.unfollowUser(id)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(followUser(id));
                }
                dispatch(setFollowingInProgress(false, id));
            })
    }
}

export default usersReducer;
