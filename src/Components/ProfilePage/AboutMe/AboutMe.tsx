import React from "react";
import s from './../../../styles/AboutMe.module.css';
import myAva from './../../../images/ava.jpg';
import Avatar from "../../Avatar/Avatar";


type AboutMeType = {
    avatar: any,
    name: string,
    birthDate: string,
    city: string,
    education: string
}

function AboutMe(props: AboutMeType) {
    return (
        <div className={s.profilePage_aboutMe}>
            <div className={s.profilePage_aboutMe_avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            {/*<Avatar width='100px' height='100px' minWidth='100px' avatar={ava}/>*/}
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
