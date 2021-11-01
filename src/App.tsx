import React from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import DialogsPage from "./Components/DialogsPage/DialogsPage";
import {Route} from "react-router-dom";
import NewsPage from "./Components/NewsPage/NewsPage";
import MusicPage from "./Components/MusicPage/MusicPage";
import SettingsPage from "./Components/SettingsPage/SettingsPage";
/*import {AllActionType, StateType} from "./redux/state";*/
import FriendsPage from "./Components/FriendsPage/FriendsPage";
import {AllActionType} from "./types";
import ProfilePageContainer from "./Components/ProfilePage/ProfilePageContainer";
import DialogsPageContainer from "./Components/DialogsPage/DialogsPageContainer";
import {RootState, StoreType} from "./redux/store";
import StoreContext from "./StoreContext";




function App(/*props: {
    store: StoreType,
    state: RootState,
    dispatch: (action: AllActionType) => void
}*/) {

    return (

        <div className="app">

            <Header/>
            <div className='mainPart'>
                {/*<Sidebar friends={props.state.sidebar.friends}/>
                <Route render={() => <ProfilePageContainer profilePage={props.state.profilePage}
                                                  dispatch={props.dispatch}/>} path='/profile'/>
                <Route render={() => <DialogsPageContainer store={props.store}/>} path='/dialogs'/>*/}
                <Route render={() => <ProfilePageContainer/>} path='/profile'/>
                <Route render={() => <DialogsPageContainer/>} path='/dialogs'/>
                <Route render={() => <NewsPage/>} path='/news'/>
                <Route render={() => <MusicPage/>} path='/music'/>
                <Route render={() => <SettingsPage/>} path='/settings'/>
                <Route render={() => <FriendsPage/>} path='/friends'/>
            </div>
        </div>
    );
}

export default App;
