import React from 'react';
import s from './ProfilInfo.module.css';

const ProfilInfo = () => {
    return (
        <div>
            <div>
                <img id={s.upimage} src='https://www.forestryservices.ie/wp-content/uploads/2019/05/color-conifer-daylight-1179229.jpg' />
            </div>
            <div className = {s.descriptionBlock}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2019/09/04/01/24/tree-4450514__340.jpg' />
            </div>
                ava+description
                </div>
        </div>
    )
};

export default ProfilInfo;