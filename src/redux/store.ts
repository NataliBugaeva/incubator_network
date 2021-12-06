import {applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    authData: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof reducers>;
export type StoreType = typeof store;

console.log(store);
export default store;
