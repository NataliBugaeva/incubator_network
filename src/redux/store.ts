import {combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
export type StoreType = typeof store;

console.log(store);
export default store;
