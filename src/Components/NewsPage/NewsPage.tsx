import React from "react";
import s from './../../styles/NewsPage.module.css';

type NewsPageType = {}

function NewsPage(props: NewsPageType) {
    return (
        <div className={s.newsPage}>
            this is news page
        </div>
    )
}

export default NewsPage;

