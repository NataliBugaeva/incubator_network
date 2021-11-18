import {AllActionType, UsersPageType, UserType} from "../types";
import {v1} from "uuid";

let initialState: UsersPageType = {
    users: [],
    pageSize: 75,
    totalUserCount: 0,
    currentPage: 1,
}

const usersReducer = (state: UsersPageType = initialState, action: AllActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW': {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: !el.followed} : el)}
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
        default:
            return state;
    }
}

export const FollowUnfollowAC = (userId: number) => ({type: 'FOLLOW-UNFOLLOW', userId}as const);
export const SetUsersAC = (newUsers: Array<UserType>) => ({type: 'SET-USERS', newUsers}as const);
export const SetTotalUsersCountAC = (totalUsersCount: number) => ({type:'SET-TOTAL-USERS-COUNT', totalUsersCount}as const);
export const SetCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}as const);

export default usersReducer;
