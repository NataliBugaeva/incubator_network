import React from "react";
import s from './../../styles/ProfilePage.module.css';
import city from './../../images/city2.jpg';
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../types";
import About from "./AboutMe/AboutMe";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

export type ProfilePagePropsType = {
    profilePage: ProfilePageType,
    onPostChange: (value: string) => void,
    addNewPost: () => void,
    status: string,
    updateStatus: (status: string) => void
}

function ProfilePage(props: ProfilePagePropsType) {

    return (
        <div className={s.profilePage}>
            <div className={s.profilePage_img}>
                <img src={city} alt="city"/>
            </div>
            {/*<ProfileStatus status={'Привет'}/>*/}
            <About name={props.profilePage.profile.fullName}
                   aboutMe={props.profilePage.profile.aboutMe}
                //insta={props.profilePage.profile.contacts.instagram}
                // status={props.profilePage.profile.lookingForAJobDescription}
                   avatar={props.profilePage.profile.photos.small}
                   status={props.status}
                   updateStatus={props.updateStatus}/>
            <MyPosts myPosts={props.profilePage.myPosts}
                     newPostText={props.profilePage.newPostText}
                     onPostChange={props.onPostChange}
                     onAddNewPost={props.addNewPost}/>
        </div>
    )
}

export default ProfilePage;
