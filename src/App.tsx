import React from 'react';
/*import './styles/Reset.css';*/
import './App.css';



import Sidebar from "./Components/Sidebar/Sidebar";
import ProfilePage from "./Components/ProfilePage/ProfilePage";

import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='mainPart'>
          <Sidebar/>
          <ProfilePage/>
      </div>
    </div>
  );
}

export default App;
