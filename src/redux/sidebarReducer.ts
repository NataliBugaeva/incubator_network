import {v1} from "uuid";
import friendAva from "../images/almo.jpg";
import {AllActionType, SidebarType} from "../types";

let initialState: SidebarType = {
    friends: [
        {
            id: v1(),
            name: 'Elmo',
            ava: friendAva
        },
        {
            id: v1(),
            name: 'Cookie monster',
            ava: friendAva
        },
        {
            id: v1(),
            name: 'Kermit',
            ava: friendAva
        },
        {
            id: v1(),
            name: 'Erni',
            ava: friendAva
        },
        {
            id: v1(),
            name: 'Oskar',
            ava: friendAva
        },
        {
            id: v1(),
            name: 'Ebbi',
            ava: friendAva
        }
    ]
};

function sidebarReducer(state: SidebarType = initialState, action: AllActionType): SidebarType {

    return state;
}

export default sidebarReducer;
