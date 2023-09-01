import { Link } from "react-router-dom";

export default function Sidebar() {
  //array of route objects (contains button name and respective route)
  const sidebarButtons = [
    { name: "Home", route: "/" },
    { name: "Chat", route: "/chat" },
    { name: "Clear chat", route: "/chat" },
    { name: "Contact", route: "/contact" },
  ];

  //map the above array into individual buttons with <Link />
  let sidebarMap = sidebarButtons.map((content) => {
    return (
      <Link to={content.route} key={content.name}>
        <button className="sidebar--button hover">{content.name}</button>
      </Link>
    );
  });

  return <div className="sidebar--container">{sidebarMap}</div>;
}
