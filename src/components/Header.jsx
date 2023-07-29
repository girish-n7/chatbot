import { useState } from "react";
// import logo from "";

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(true);

  function handleClick() {
    setDarkTheme((prevState) => !prevState);
  }

  return (
    <div className="header--container">
      <div className="header--head">
        {/* <img src={logo} className="header--logo"></img> */}
        <p className="header--title">AI Chatbot</p>
      </div>
      <p onClick={handleClick}>{darkTheme ? "dark" : "light"}</p>
    </div>
  );
}
