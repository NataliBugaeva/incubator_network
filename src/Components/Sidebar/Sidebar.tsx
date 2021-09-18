import React from "react";
import s from '../../styles/Sidebar.module.css';

function Sidebar() {
    return (
        <nav className={s.sidebar}>
            <div><a href='/'>Profile</a></div>
            <div><a href='/'>Messages</a></div>
            <div><a href='/'>News</a></div>
            <div><a href='/'>Music</a></div>
        </nav>
    )
}

export default Sidebar;
