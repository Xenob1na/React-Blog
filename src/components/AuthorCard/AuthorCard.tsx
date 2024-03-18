import { FaGithub } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Author from "../../assets/images/author.png";
const AuthorCard = () => {
  return (
    <section className="author-card">
      <div className="container author-card__container">
        <div className="author-card__profile">
          <img src={Author} className="author-card__img" alt="author" />
        </div>
        <div className="author-card__name">
          <h1 className="author-card__title">TOMAS LAURINAVICIUS</h1>
        </div>
        <div className="author-card__info">
          <p className="author-card__description">
            Hi, my name is Daniel, I'm the CTO here at Kinsta.
          </p>
        </div>
        <div className="author-card__social-media">
          <a href="#" className="author-card__link">
            <FaGithub size={24} />
          </a>
          <a href="#" className="author-card__link">
            <FaPinterest size={24} />
          </a>
          <a href="#" className="author-card__link">
            <RiInstagramFill size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuthorCard;
