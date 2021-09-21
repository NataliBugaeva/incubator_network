import React from 'react';
/*import './styles/Reset.css';*/
import './App.css';

import Sidebar from "./Components/Sidebar/Sidebar";
import ProfilePage from "./Components/ProfilePage/ProfilePage";

import Header from "./Components/Header/Header";
import DialogsPage from "./Components/DialogsPage/DialogsPage";
import {BrowserRouter, Route} from "react-router-dom";
import NewsPage from "./Components/NewsPage/NewsPage";
import MusicPage from "./Components/MusicPage/MusicPage";
import SettingsPage from "./Components/SettingsPage/SettingsPage";
import {MessageType} from "./Components/DialogsPage/Message/Message";

import ava from "./images/ava.jpg";
import {ChatType} from "./Components/DialogsPage/Chat/Chat";


const messagesData: Array<MessageType> = [
    {
        id: 1,
        avatar: ava,
        name: 'Alice',
        message: 'Hi! How are you?',
        time: '22:25'
    },
    {
        id: 2,
        avatar: ava,
        name: 'Kate',
        message: 'How it\'s going?',
        time: '23:02'
    },
    {
        id: 3,
        avatar: ava,
        name: 'Juli',
        message: 'It\'s all right',
        time: '23:30'
    }

]

const chatsData: Array<ChatType> = [
    {
        id: 1,
        name: 'Alice'
    },
    {
        id: 2,
        name: 'Kate'
    },
    {
        id: 3,
        name: 'Juli'
    },
    {
        id: 4,
        name: 'Alex'
    },
    {
        id: 5,
        name: 'Jon'
    }
]

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <div className='mainPart'>
                    <Sidebar/>
                    <Route render={() => <ProfilePage/>} path='/profile'/>
                    <Route render={() => <DialogsPage messages={messagesData} chats={chatsData}/>} path='/dialogs'/>
                    <Route render={() => <NewsPage/>} path='/news'/>
                    <Route render={() => <MusicPage/>} path='/music'/>
                    <Route render={() => <SettingsPage/>} path='/settings'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
