import { Link } from "react-router-dom";

export default function Contact() {
  //array of contact links
  let contactLinks = [
    { name: "GitHub", link: "https://github.com/girish-n7" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/girish-n-7075ba1a4",
    },
    { name: "Email", link: "mailto:ngirish1729@gmail.com" },
  ];

  //map the array into individual buttons
  let contactMap = contactLinks.map((content) => {
    return (
      <Link to={content.link} key={content.name}>
        <button className="intro--button hover">{content.name}</button>
      </Link>
    );
  });
  return (
    <div className="home--container">
      <p className="home--intro" style={{ textAlign: "center" }}>
        Have a question, feedback, or need to get in touch with the developer?
        Feel free to reach out using the information below.{" "}
        <hr className="contact--hr" />
        This web application was made by Girish N
      </p>
      <div className="home--button__container">{contactMap}</div>
    </div>
  );
}
