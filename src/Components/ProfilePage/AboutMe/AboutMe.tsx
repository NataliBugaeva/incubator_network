import React from "react";
import s from './../../../styles/AboutMe.module.css';
import myAva from './../../../images/ava.jpg';
import Avatar, {AvatarStylesType} from "../../Avatar/Avatar";


type AboutMeType = {
    avatar: any,
    name: string,
    birthDate: string,
    city: string,
    education: string
}

function AboutMe(props: AboutMeType) {

    const styles: AvatarStylesType = {

        styles: {
            width: '100px',
            height: '100px',
            minWidth: '100px'
        },
        avatar: myAva
    }

    return (
        <div className={s.profilePage_aboutMe}>
            <Avatar styles={styles.styles} avatar={styles.avatar}/>
            <div className={s.profilePage_aboutMe_info}>
                <h2>{props.name}</h2>
                <div>Date of birth: {props.birthDate}</div>
                <div>City: {props.city}</div>
                <div>Education: {props.education}</div>
            </div>
        </div>
    )
}

export default AboutMe;
