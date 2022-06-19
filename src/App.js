import logo from './logo.svg';
import './App.css';
import ChatWindow from './Components/ChatWindow';
import './views/chatWindow.css';
import {useState} from 'react';


function App() {

  let [state, setState]=useState(false);

  function handleState(){

  }

  return (
    <div>
   <ChatWindow id="chatWindowComp" ></ChatWindow>

    </div>
 
  );
}

export default App;
