import React from "react";
import s from './../../styles/ProfilePage.module.css';
import city from './../../images/city2.jpg';
import AboutMe from "./AboutMe/AboutMe";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../redux/state";


function ProfilePage(props: {
    profilePage: ProfilePageType,
    onPostChange: (text: string) => void,
    addNewPost: () => void
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
                     addNewPost={props.addNewPost}/>
        </div>
    )
}

export default ProfilePage;
