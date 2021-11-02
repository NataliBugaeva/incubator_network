import React from "react";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {AllActionType} from "../../types";

let MapStateToProps = (state: RootState) => ({
    friends: state.sidebar.friends
})

let MapDispatchToProps = (dispatch: (action: AllActionType) => void) => ({})

const SidebarContainer = connect(MapStateToProps, MapDispatchToProps)(Sidebar)

export default SidebarContainer
