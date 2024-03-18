import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const BurgerMenu = ({closeMenu}) => {
  return (
    <div className="mobile-nav-wrapper">
      <nav className="mobile-nav">
        <span className="mobile-nav__btn-close" onClick={closeMenu}>
          <IoMdClose size={24} />
        </span>
        <ul className="mobile-nav__list">
          <li className="mobile-nav__item" onClick={closeMenu}>
            <Link to={`/`} className="mobile-nav__link">
              Home
            </Link>
          </li>
          <li className="mobile-nav__item" onClick={closeMenu}>
            <Link to={`/AllPosts`} className="mobile-nav__link">
              All Posts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
