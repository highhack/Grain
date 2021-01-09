import React from 'react';
import s from './Profil.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfilInfo from './ProfilInfo/ProfilInfo';

const Profil = () => {

  
  return (
    <div className={s.content}>
      <ProfilInfo />
      <MyPosts />
      
    </div>
  )
};

export default Profil;