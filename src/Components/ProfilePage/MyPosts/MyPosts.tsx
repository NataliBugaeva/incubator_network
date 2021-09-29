import React, {ChangeEvent} from "react";
import s from '../../../styles/MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";
import{addNewPostActionCreator, onPostChangeActionCreator} from './../../../redux/profileReducer';



function MyPosts(props: {
    myPosts: Array<PostType>,
    newPostText: string,
    dispatch: (action: any) => void
}) {

    const myPosts = props.myPosts.map(elem => {
        return <Post ava={elem.ava}
                     id={elem.id}
                     name={elem.name}
                     likesCount={elem.likesCount}
                     key={elem.id}/>
    })

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onPostChangeActionCreator(e.currentTarget.value));
    }

    const addNewPost = () => {
        props.dispatch(addNewPostActionCreator());
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
