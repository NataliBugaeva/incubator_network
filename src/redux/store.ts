import {combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

//let rootState = store.getState();
export type RootState = ReturnType<typeof reducers>;
export type StoreType = typeof store;

console.log(store);
export default store;
