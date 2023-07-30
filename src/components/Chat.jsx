import { useState } from "react";
import sendButton from "../assets/sendButton.svg";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([
    {
      role: "assistant",
      content:
        "Welcome to the Batbot, where the shadows of artificial intelligence converge with the enigmatic persona of Gotham's Dark Knight. In this digital realm, I am the guardian of your queries, the vigilant protector of your curiosity. Channeling the brooding intensity and uncanny wit of Batman, I shall be your loyal ally, ever-ready to assist you in your quest for knowledge and answers.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  function handleSubmit(event) {
    return chat(event, message); //calls the chat function
  }

  function handleChange(event) {
    return setMessage(event.target.value); //sets the message state to user typed message (on every keystroke)
  }

  const chat = async (event, message) => {
    event.preventDefault(); //prevents site from resetting after submit

    if (!message) return;
    setIsTyping(true);

    let messages = chats;
    messages.push({ role: "user", content: message });
    setChats(messages); //duplicate the chats array and push the new message with role: user

    setMessage(""); //after pushing into the array, set messages array to ""

    // call the backend service api

    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chats,
      }),
    })
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
          <i>{isTyping ? "Thinking..." : ""}</i>
        </p>
      </div>

      <div className="input--container">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            value={message}
            placeholder="Ask anything."
            onChange={handleChange}
          />
        </form>
        <button type="submit" className="input--button">
          <img src={sendButton} alt="" className="button--img"></img>
        </button>
      </div>
    </div>
  );
}
