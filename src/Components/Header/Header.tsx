import React from "react";
import s from '../../styles/Header.module.css';

export type HeaderPropsType = {
    id: number,
    login: string
}

function Header(props: HeaderPropsType) {
    return (
        <div className={s.header}>
              <div className={s.login}>{props.login ? props.login : 'Login'}</div>
        </div>
    )
}

export default Header;
