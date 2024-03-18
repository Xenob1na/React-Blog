import AuthorCard from "../../components/AuthorCard/AuthorCard";
import BlogList from "../../components/Blog/BlogList";
import Layout from "../../layouts";
const Home = () => {
  return (
    <div>
      <Layout>
        <AuthorCard />
        <BlogList />
      </Layout>
    </div>
  );
};

export default Home;
