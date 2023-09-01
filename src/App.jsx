import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SwitchPage from "./components/SwitchPage";

export default function App() {
  //default chat i.e prepopulated conversation
  let defaultChat = [
    {
      role: "system",
      content:
        "I am the night. Welcome, mortal, to the shadows of conversation. What do you seek, in this darkened digital realm?",
    },
  ];

  //set initial state of chats
  const [chats, setChats] = useState(defaultChat);

  //clear chat based on clear value of sidebar buttons
  function clearChat(boolean) {
    return boolean && setChats(defaultChat);
  }
  return (
    <main>
      <Sidebar clearChat={clearChat} />
      <div className="main--chat">
        <Header />
        <SwitchPage chats={chats} setChats={setChats} />
      </div>
    </main>
  );
}

//  use SwitchPage component to dynamically display the correct components based on requested routes
