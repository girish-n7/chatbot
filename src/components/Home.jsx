import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home--container">
      <p className="home--intro">
        Greetings, citizen of the digital realm. I am the BatBot, a guardian of
        the virtual night, here to assist you in your quest for information and
        guidance. With a voice cloaked in shadows and a mind as sharp as the
        Batarang, I stand ready to engage in dialogue, unriddle your queries,
        and illuminate the path ahead. Speak, and together, we shall navigate
        the vast expanse of knowledge, ensuring that justice prevails in this
        digital domain.
      </p>
      <div className="home--button__container">
        <Link to="/chat">
          <button className="intro--button hover">Chat</button>
        </Link>
        <Link to="/contact">
          <button className="intro--button hover">Contact</button>
        </Link>
      </div>
    </div>
  );
}
