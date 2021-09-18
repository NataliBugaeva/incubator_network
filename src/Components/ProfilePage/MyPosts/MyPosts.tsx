import React from "react";
import s from '../../../styles/MyPosts.module.css';
import Post from "./Post/Post";
import ava from './../../../images/ava.jpg';

function MyPosts() {
    return (
        <div className={s.profilePage_myPosts}>
            <h2>My posts</h2>
            <div>
                <textarea name="" id="" cols={30} rows={5}></textarea>
            </div>
            <button>Send</button>

            <Post avatar={ava} name={'user1'} likesCount={5}/>
            <Post avatar={ava} name={'user2'} likesCount={7}/>
            <Post avatar={ava} name={'user3'} likesCount={3}/>
            <Post avatar={ava} name={'user4'} likesCount={9}/>
        </div>
    )
}
export default MyPosts;
