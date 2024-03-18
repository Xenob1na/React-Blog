import Layout from "./layouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllPosts from "./pages/AllPosts/AllPosts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AllPosts" element={<AllPosts />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
