import { Link } from "react-router-dom";

const BlogItem = ({title, content, author, image, id}) => {
  return (
    <section className="blog-card">
      <div className="blog-card__container">
        <Link to={`/blog/${id}`} className="blog-card__link">
          <div className="blog-card__img">
            <img
              src={image}
              alt="blog"
              className="card-img"
            />
          </div>
        </Link>
        <div className="blog-card__content content">
          <p className="content__author-name">BY {author}</p>
          <h3 className="content__title">{title}</h3>
          <p className="content__description">{content}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogItem;
