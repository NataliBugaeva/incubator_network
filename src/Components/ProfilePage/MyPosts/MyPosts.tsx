import React from "react";
import s from '../../../styles/MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";


function MyPosts(props: { myPosts: Array<PostType> }) {
    const myPosts = props.myPosts.map(elem => {
        return <Post ava={elem.ava}
                     id={elem.id}
                     name={elem.name}
                     likesCount={elem.likesCount}
                     key={elem.id}/>
    })

    return (
        <div className={s.profilePage_myPosts}>
            <h2>My posts</h2>
            <div>
                <textarea name="" id="" cols={30} rows={5}></textarea>
            </div>
            <button>Send</button>
            {myPosts}
        </div>
    )
}

export default MyPosts;
