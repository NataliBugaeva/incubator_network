import {AllActionType, UsersPageType, UserType} from "../types";
import {v1} from "uuid";

let initialState: UsersPageType = {
    users: [
        /*{id: v1(), followed: true, ava: 'https://avotar.ru/avatar/prikolnye/100/5.jpg', fullName: 'Nata',
            status: 'looking for a job', location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: false, ava: 'https://avotar.ru/avatar/prikolnye/100/5.jpg', fullName: 'Liza',
            status: 'looking for a job', location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: false, ava: 'https://avotar.ru/avatar/prikolnye/100/5.jpg', fullName: 'Lena',
            status: 'looking for a job', location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: true, ava: 'https://avotar.ru/avatar/prikolnye/100/5.jpg', fullName: 'Dasha',
            status: 'looking for a job', location: {city: 'Minsk', country: 'Belarus'}}*/
    ]
}

const usersReducer = (state: UsersPageType = initialState, action: AllActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW': {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: !el.followed} : el)}
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.newUsers]}
        }
        default:
            return state;
    }
}

export const FollowUnfollowAC = (userId: number) => ({type: 'FOLLOW-UNFOLLOW', userId}as const);
export const SetUsersAC = (newUsers: Array<UserType>) => ({type: 'SET-USERS', newUsers}as const);

export default usersReducer;
