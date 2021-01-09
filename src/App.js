import React from 'react';


import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profil from './components/Profil/Profil';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path = '/profil' render = {() => <Profil />} />
          <Route path = '/dialogs' render = {() => <Dialogs />} />
          <Route path = '/news' render = {() => <News />} />
          <Route path = '/music' render = {() => <Music />} />
          <Route path = '/settings' render = {() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
