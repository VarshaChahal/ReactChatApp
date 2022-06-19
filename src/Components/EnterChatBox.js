import React, {useState} from 'react';
import '../views/chatWindow.css';

const EnterChatBox = (props) =>{

    return (
        <form>
            <div >
                <p>{props.checkEnterChatBox?`checkig for ${props.chatBox}, is true`:`checkig for ${props.chatBox}, is false`}</p>
                <input type="text" placeholder='enter text' id="chatBox"></input>
            </div>
        </form>
    )
}

export default EnterChatBox;