import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    
    let dialogs = [
        { name: 'Dima', id: 1 },
        { name: 'Andrey', id: 2 },
        { name: 'Alex', id: 3 },
        { name: 'Sveta', id: 4 },
        { name: 'Vova', id: 5 },
        { name: 'Dora', id: 6 },
        { name: 'Oleg', id: 7 }
    ]

    let DialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messages = [
        { message: 'hi', id: 1 },
        { message: 'good morning', id: 2 },
        { message: 'hello', id: 3 },
        { message: 'yo', id: 4 },
        { message: 'How is going', id: 5 },
        { message: 'Good bay', id: 6 },
        { message: 'good night', id: 7 }

    ]

    let MessegesElements = messages.map(m => <Message message={m.message} />)
    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogElements}
            </div>
            <div className={s.messages}>
                {MessegesElements}
            </div>
        </div>

    )
};

export default Dialogs;