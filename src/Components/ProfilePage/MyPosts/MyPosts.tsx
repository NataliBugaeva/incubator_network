import React, {ChangeEvent} from "react";
import s from '../../../styles/MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";


function MyPosts(props: {
    myPosts: Array<PostType>,
    newPostText: string,
    onPostChange: (text: string) => void,
    addNewPost: () => void
}) {

    const myPosts = props.myPosts.map(elem => {
        return <Post ava={elem.ava}
                     id={elem.id}
                     name={elem.name}
                     likesCount={elem.likesCount}
                     key={elem.id}/>
    })

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value);
    }

    const addNewPost = () => {
        props.addNewPost();
    }

    return (
        <div className={s.profilePage_myPosts}>
            <h2>My posts</h2>
            <div>
                <textarea cols={30} rows={5}
                          value={props.newPostText}
                          onChange={onPostChange}/>
            </div>
            <button onClick={addNewPost}>Add</button>
            {myPosts}
        </div>
    )
}

export default MyPosts;
