/* eslint-disable react/prop-types */
import { useState } from "react";
import sendButton from "../assets/sendButton.svg";
import FetchAPI from "./FetchAPI";

export default function Chat({ chats, setChats }) {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (event, message) => {
    event.preventDefault(); //prevents site from resetting after submit

    if (!message) return;
    setIsTyping(true);

    let messages = chats;
    messages.push({ role: "user", content: message });
    setChats(messages); //duplicate the chats array and push the new message with role: user

    setMessage(""); //after pushing into the array, set messages array to ""

    // call the backend service api
    FetchAPI(chats)
      .then((response) => response.json())
      .then((data) => {
        messages.push(data.output); //push the new message i.e, data into the messages array
        setChats(messages); //set the chats array to the above
        setIsTyping(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="chat--container">
      <div>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p
                key={index}
                className={`chat--message ${
                  chat.role === "user" ? "user--input" : ""
                }`}
              >
                {chat.content}
              </p>
            ))
          : ""}
      </div>

      <div className={isTyping ? "typing--status" : "hide"}>
        <p>
          <i>{isTyping ? "Typing..." : ""}</i>
        </p>
      </div>

      <div className="input--container">
        <form action="" onSubmit={(event) => chat(event, message)}>
          <input
            type="text"
            name="message"
            value={message}
            placeholder="Ask anything."
            onChange={(event) => setMessage(event.target.value)}
          />
        </form>
        <button
          onClick={(event) => chat(event, message)}
          className="input--button"
        >
          <img src={sendButton} alt="" className="button--img"></img>
        </button>
      </div>
    </div>
  );
}
