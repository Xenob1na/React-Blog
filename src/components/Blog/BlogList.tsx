import BlogItem from "./BlogItem";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const BlogList = () => {
  return (
    <div>
      <h1>Blog List</h1>
      <div className="container media-container">
        <BlogItem />
      </div>
      <div className="pagination">
            <button
                className="btn-pagination">
                <FaArrowLeft />
            </button>
            <button
                className="btn-pagination">
                <FaArrowRight />
            </button>
        </div>
    </div>
  );
};

export default BlogList;
