import React from "react";
import s from './../../styles/ProfilePage.module.css';
import city from './../../images/city2.jpg';
import AboutMe from "./AboutMe/AboutMe";
import MyPosts from "./MyPosts/MyPosts";
import {AllActionType, ProfilePageType} from "../../types";


function ProfilePage(props: {
    profilePage: ProfilePageType,
    onPostChange: (value: string) => void,
    onAddNewPost: () => void
}) {
    return (
        <div className={s.profilePage}>
            <div className={s.profilePage_img}>
                <img src={city} alt="city"/>
            </div>
            <AboutMe name={props.profilePage.aboutMe.name} birthDate={props.profilePage.aboutMe.birthDate}
                     city={props.profilePage.aboutMe.city} education={props.profilePage.aboutMe.education}/>
            <MyPosts myPosts={props.profilePage.myPosts}
                     newPostText={props.profilePage.newPostText}
                     onPostChange={props.onPostChange}
                     onAddNewPost={props.onAddNewPost}
                    /* dispatch={props.dispatch}*//>
        </div>
    )
}

export default ProfilePage;
