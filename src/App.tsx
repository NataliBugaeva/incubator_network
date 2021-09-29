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


function App(props: {
    state: StateType,
    dispatch: (action: any) => void
}) {
    return (
        <div className="app">
            <Header/>
            <div className='mainPart'>
                <Sidebar friends={props.state.sidebar.friends}/>
                <Route render={() => <ProfilePage profilePage={props.state.profilePage}
                                                  dispatch={props.dispatch}/>} path='/profile'/>
                <Route render={() => <DialogsPage dialogsPage={props.state.dialogsPage}
                                                  dispatch={props.dispatch}/>} path='/dialogs'/>
                <Route render={() => <NewsPage/>} path='/news'/>
                <Route render={() => <MusicPage/>} path='/music'/>
                <Route render={() => <SettingsPage/>} path='/settings'/>
                <Route render={() => <FriendsPage/>} path='/friends'/>
            </div>
        </div>
    );
}

export default App;
