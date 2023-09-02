/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoWhite from "../assets/logoWhite.svg";
import logoBlack from "../assets/logoBlack.svg";
import light from "../assets/lightMode.svg";
import dark from "../assets/darkMode.svg";
import menuWhite from "../assets/menuWhite.svg";
import menuBlack from "../assets/menuBlack.svg";

export default function Header({ clearChat }) {
  const [darkTheme, setDarkTheme] = useState(true); //for theme
  const [menu, setMenu] = useState(false); //for sidebar menu

  //change theme
  function changeTheme() {
    setDarkTheme((prevState) => !prevState);
  }

  //toggle sidebar menu
  function toggleMenu() {
    setMenu((prevState) => !prevState);
  }

  //create an array for menu contents
  let menuContent = [
    { name: "Home", link: "/", clear: false },
    { name: "Chat", link: "/chat", clear: false },
    { name: "Clear Chat", link: "/chat", clear: true },
    { name: "Contact", link: "/contact", clear: false },
  ];

  //map the above array to individual clickable <p>
  let menuMap = menuContent.map((content) => {
    return (
      <Link to={content.link} key={content.name}>
        <button
          className="menu--buttons hover"
          onClick={() => {
            clearChat(content.clear);
            toggleMenu();
          }}
        >
          {content.name}
        </button>
      </Link>
    );
  });

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
      <div className="header--icons__container">
        <img
          src={darkTheme ? light : dark}
          onClick={changeTheme}
          alt=""
          className="icon--theme"
        />
        <img
          src={darkTheme ? menuWhite : menuBlack}
          onClick={toggleMenu}
          alt=""
          className="icon--menu"
        />
      </div>
      {menu && <div className="header--menu">{menuMap}</div>}
    </div>
  );
}

//use conditional rendering && to render menu only when its true
