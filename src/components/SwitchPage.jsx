/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";
import Contact from "./Contact";
import Error from "./Error";

export default function SwitchPage({ chats, setChats }) {
  return (
    // define components to render for respective routes
    <Routes key={location.pathname}>
      <Route exact path="/" element={<Home />}></Route>
      <Route
        exact
        path="/chat"
        element={<Chat chats={chats} setChats={setChats} />}
      ></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      <Route exact path="*" element={<Error />}></Route>
    </Routes>
  );
}
