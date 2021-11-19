import React from "react";
import s from './../../styles/preloader.module.css'
import preloader from './../../images/ZZ5H.gif';

const Preloader = (props: {}) => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt=""/>
        </div>
    )
}

export default Preloader;

