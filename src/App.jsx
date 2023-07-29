import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
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
    <main>
      <p className="header--title">AI Chatbot</p>

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

      <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing..." : ""}</i>
        </p>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Ask anything."
          onChange={handleChange}
        />
      </form>
    </main>
  );
}
