import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import {Route} from "react-router-dom";
import NewsPage from "./Components/NewsPage/NewsPage";
import MusicPage from "./Components/MusicPage/MusicPage";
import SettingsPage from "./Components/SettingsPage/SettingsPage";
import FriendsPage from "./Components/FriendsPage/FriendsPage";
import ProfilePageContainer from "./Components/ProfilePage/ProfilePageContainer";
import DialogsPageContainer from "./Components/DialogsPage/DialogsPageContainer";
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import UsersPageContainer from './Components/UsersPage/UsersPageContainer';
import HeaderContainer from "./Components/Header/HeaderContainer";

function App() {
    return (
        <div className="app">
            <HeaderContainer />
            <div className='mainPart'>
                <SidebarContainer />
                <Route render={() => <ProfilePageContainer/>} path='/profile/:userId?'/>
                <Route render={() => <DialogsPageContainer/>} path='/dialogs'/>
                <Route render={() => <NewsPage/>} path='/news'/>
                <Route render={() => <MusicPage/>} path='/music'/>
                <Route render={() => <SettingsPage/>} path='/settings'/>
                <Route render={() => <FriendsPage/>} path='/friends'/>
                <Route render={() => <UsersPageContainer/>} path='/users'/>
            </div>
        </div>
    );
}

export default App;
