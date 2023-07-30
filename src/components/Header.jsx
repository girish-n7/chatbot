import { useState, useEffect } from "react";
import logoWhite from "../assets/logoWhite.svg";
import logoBlack from "../assets/logoBlack.svg";
import light from "../assets/lightMode.svg";
import dark from "../assets/darkMode.svg";

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(true);

  function handleClick() {
    setDarkTheme((prevState) => !prevState);
  }

  const theme = document.querySelector(":root").style;

  useEffect(() => {
    theme.setProperty("--text--ai", darkTheme ? "#fdfeff" : "#060307");
    theme.setProperty("--text--user", "#fdfeff");
    theme.setProperty(
      "--background",
      darkTheme
        ? "linear-gradient(#010205,#162f5b)"
        : "linear-gradient(#fdfeff, #d4e1f8)"
    );
    theme.setProperty("--user--message", darkTheme ? "#3c61dd" : "#385bcc");
    theme.setProperty(
      "--assistant--message",
      darkTheme ? "#020509" : "#fcfdfe"
    );
    theme.setProperty("--input--style", darkTheme ? "#040913" : "#e6e9f1");
  });

  return (
    <div className="header--container">
      <div className="header--head">
        <img
          src={darkTheme ? logoWhite : logoBlack}
          className="header--logo"
        ></img>
        <p className="header--title">BATMAN</p>
      </div>
      <img
        src={darkTheme ? light : dark}
        onClick={handleClick}
        alt=""
        className="icon--theme"
      ></img>
    </div>
  );
}
