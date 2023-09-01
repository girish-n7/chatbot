import { useState, useEffect } from "react";
import logoWhite from "../assets/logoWhite.svg";
import logoBlack from "../assets/logoBlack.svg";
import light from "../assets/lightMode.svg";
import dark from "../assets/darkMode.svg";

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(true);

  //change theme
  function handleClick() {
    setDarkTheme((prevState) => !prevState);
  }

  //set the color palette based on theme
  const theme = document.querySelector(":root").style;

  useEffect(() => {
    theme.setProperty("--text--ai", darkTheme ? "#fdfeff" : "#060307");
    theme.setProperty("--text--user", "#fdfeff");
    theme.setProperty(
      "--background",
      darkTheme
        ? "radial-gradient(ellipse at bottom, #162f5b 0%, #010205 70%)"
        : "radial-gradient(ellipse at bottom, #d4e1f8 0%, #fdfeff 70%)"
    );
    theme.setProperty("--user--message", darkTheme ? "#3c61dd" : "#385bcc");
    theme.setProperty(
      "--assistant--message",
      darkTheme ? "#020509" : "#fcfdfe"
    );
    theme.setProperty("--sidebar", darkTheme ? "#162f5b" : "#d4e1f8");
  });

  return (
    <div className="header--container">
      <div className="header--head">
        <img
          src={darkTheme ? logoWhite : logoBlack}
          className="header--logo"
        ></img>
        <p className="header--title">Batbot</p>
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
