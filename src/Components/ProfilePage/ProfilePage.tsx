import React from "react";
import s from './../../styles/ProfilePage.module.css';
import city from './../../images/city2.jpg';
import AboutMe from "./AboutMe/AboutMe";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../redux/state";


function ProfilePage(props: ProfilePageType) {
    return (
        <div className={s.profilePage}>
            <div className={s.profilePage_img}>
                <img src={city} alt="city"/>
            </div>
            <AboutMe name={props.aboutMe.name}  birthDate={props.aboutMe.birthDate}
                     city={props.aboutMe.city} education={props.aboutMe.education}/>
            <MyPosts myPosts={props.myPosts}/>
        </div>
    )
}

export default ProfilePage;
