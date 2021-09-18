import React from "react";
import s from './../../styles/ProfilePage.module.css';
import city from './../../images/city2.jpg';
import AboutMe from "./AboutMe/AboutMe";
import MyPosts from "./MyPosts/MyPosts";

import userAva from './../../images/ava.jpg';

function ProfilePage() {
    return (
        <div className={s.profilePage}>
            <div className={s.profilePage_img}>
                <img src={city} alt="city"/>
            </div>
            <AboutMe name={'Natasha Bugaeva'} avatar={userAva} birthDate={'26 December'} city={'Minsk'} education={'higher'}/>
            <MyPosts/>
        </div>
    )
}

export default ProfilePage;
