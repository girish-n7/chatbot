/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Sidebar({ clearChat }) {
  //array of route objects (contains button name and respective route)
  const sidebarButtons = [
    { name: "Home", route: "/", clear: false },
    { name: "Chat", route: "/chat", clear: false },
    { name: "Clear Chat", route: "/chat", clear: true },
    { name: "Contact", route: "/contact", clear: false },
  ];

  //map the above array into individual buttons with <Link />
  let sidebarMap = sidebarButtons.map((content) => {
    return (
      <Link to={content.route} key={content.name}>
        <button
          className="sidebar--button hover"
          onClick={() => clearChat(content.clear)}
        >
          {content.name}
        </button>
      </Link>
    );
  });

  return <div className="sidebar--container">{sidebarMap}</div>;
}
