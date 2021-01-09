import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

/*let s = {
  'nav': 'Nav_nav__3E',
  'item': 'Nav_item__1U5zb' 
}*/

const Nav = () => {
    return (
      <nav className={s.nav}>
      <div className = {s.item}>
      <NavLink to = '/Profil' activeClassName = {s.active}>Profile</NavLink>
      </div>
      <div className = {s.item}>
        <NavLink to = '/Dialogs' activeClassName = {s.active}>Messeges</NavLink>
      </div>
      <div className = {s.item}>
      <NavLink to = '/News' activeClassName = {s.active}>News</NavLink>
      </div>
      <div className = {s.item}>
      <NavLink to = '/Music' activeClassName = {s.active}>Music</NavLink>
      </div>
      <div className = {s.item}>
      <NavLink to = '/Settings' activeClassName = {s.active}>Settings</NavLink>
      </div>
    </nav>
    )
}

export default Nav