import React, {useState} from 'react';
import ChatList from './ChatList';
import '../views/chatWindow.css';
import EnterChatBox from './EnterChatBox';


const ChatWindow =(props)=>{
    let [state, setState]=useState(false);
    let [checkEnterChatBox1, setcheckEnterChatBox1]=useState(false);
    let [checkEnterChatBox2, setcheckEnterChatBox2]=useState(false);

    function handleEnterChatBox1(){
        console.log("clicked handleEnterChatBox1");
        setcheckEnterChatBox1((prevcheckEnterChatBox1)=> !prevcheckEnterChatBox1);
    }

    function handleEnterChatBox2(){
        console.log("clicked handleEnterChatBox2");

        setcheckEnterChatBox2((prevcheckEnterChatBox2)=> !prevcheckEnterChatBox2);
    }


    return   ( <div id= "chatWindow">
            <form>
                

            </form>
             <ChatList/>
             <EnterChatBox checkEnterChatBox={checkEnterChatBox1} chatBox={"first"}/>
             <EnterChatBox checkEnterChatBox={checkEnterChatBox2} chatBox={"second"}/>
             <button onClick={handleEnterChatBox1}>
                 Toggle Text for EnterChatBox1
             </button>
             <button onClick={handleEnterChatBox2}>
                 Toggle Text for EnterChatBox2
             </button>

              </div>
    );
}

export default ChatWindow;