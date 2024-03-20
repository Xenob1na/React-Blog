import BlogItem from "./BlogItem";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { getBlogList } from "../../redux/blogSlice";
import { useEffect, Dispatch } from "react";
import { IBlog } from "../../types/blog.type";
import Loader from "../../components/ui/Loader";
import { useSelector, useDispatch } from "react-redux";
const BlogList = () => {
  const dispatch: Dispatch<IBlog[]> = useDispatch();
  const Blog = useSelector((state) => state.blog.blogList);
  const isLoading = useSelector((state) => state.blog.isLoading);
  const error = useSelector((state) => state.blog.error);

  useEffect(() => {
    dispatch(getBlogList());
  }, [dispatch]);
  return (
    <div>
        {isLoading && <Loader />}
        {error && <div style={{ textAlign: "center", marginTop: "40px", fontSize: "20px" }}>Произошла ошибка, попробуйте позже</div>}
      <div>
        {!isLoading && (
          <div className="container media-container">
            {Blog.map((blog) => (
              <BlogItem key={blog.id} {...blog} />
            ))}
          </div>
        )}
      </div>
      <div className="pagination">
        <button className="btn-pagination">
          <FaArrowLeft />
        </button>
        <button className="btn-pagination">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogList;
