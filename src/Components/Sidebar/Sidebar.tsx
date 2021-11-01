import React from "react";
import s from '../../styles/Sidebar.module.css';
import {NavLink} from 'react-router-dom';
import Friend from "./Friend/Friend";
import {SidebarType} from "../../types";


function Sidebar(props: SidebarType) {

    const friendsInSidebar = props.friends.map(elem => {
        return <Friend key={elem.id} id={elem.id} name={elem.name} ava={elem.ava}/>
    })

    return (
        <nav className={s.sidebar}>
            <div>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.friendsPage}>
                <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                <div className={s.friendsPage_blockWithFriendsAva}>
                    {friendsInSidebar}
                </div>
            </div>
        </nav>
    )

}

export default Sidebar;
