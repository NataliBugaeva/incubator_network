import React from "react";
import s from './../../../styles/AboutMe.module.css';
import Avatar, {AvatarStylesType} from "../../Avatar/Avatar";
import ProfileStatus from "../../ProfileStatus/ProfileStatus";

export type AboutPropsType = {
    name: string,
    aboutMe: string,
    //insta: string,
    status: string,
    updateStatus: (status: string) => void,
    avatar: string
}


function About(props: AboutPropsType) {
    const styles: AvatarStylesType = {

        styles: {
            width: '100px',
            height: '100px',
            minWidth: '100px'
        },
        avatar: props.avatar
    }

    return (
        <div className={s.profilePage_aboutMe}>
            <Avatar styles={styles.styles} avatar={styles.avatar}/>
            <div className={s.profilePage_aboutMe_info}>
                <h2>{props.name}</h2>
               {/*<div>Insta: {props.insta}</div>*/}

               {/* <div>Status: {props.status}</div>*/}
                <div>About me: {props.aboutMe}</div>
                <div>Status: {<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>}</div>
            </div>
        </div>
    )
}

export default About;
