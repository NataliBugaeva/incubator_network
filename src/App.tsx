import React from 'react';
/*import './styles/Reset.css';*/
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Header from "./Components/Header/Header";
import DialogsPage from "./Components/DialogsPage/DialogsPage";
import {Route} from "react-router-dom";
import NewsPage from "./Components/NewsPage/NewsPage";
import MusicPage from "./Components/MusicPage/MusicPage";
import SettingsPage from "./Components/SettingsPage/SettingsPage";
import {StateType} from "./redux/state";
import FriendsPage from "./Components/FriendsPage/FriendsPage";

import {addNewPost} from "./redux/state";
import {onPostChange} from "./redux/state";


function App(props: { state: StateType }) {
    return (
        <div className="app">
            <Header/>
            <div className='mainPart'>
                <Sidebar friends={props.state.sidebar.friends}/>
                <Route render={() => <ProfilePage profilePage={props.state.profilePage}
                                                  onPostChange={onPostChange}
                                                  addNewPost={addNewPost}/>} path='/profile'/>
                <Route render={() => <DialogsPage messages={props.state.dialogsPage.messages}
                                                  chats={props.state.dialogsPage.chats}/>} path='/dialogs'/>
                <Route render={() => <NewsPage/>} path='/news'/>
                <Route render={() => <MusicPage/>} path='/music'/>
                <Route render={() => <SettingsPage/>} path='/settings'/>
                <Route render={() => <FriendsPage/>} path='/friends'/>
            </div>
        </div>
    );
}

export default App;
