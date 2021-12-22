import {applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    authData: authReducer,
    form: formReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;

export type RootState = ReturnType<typeof reducers>;
export type StoreType = typeof store;

console.log(store);
export default store;
