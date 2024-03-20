import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllPosts from "./pages/AllPosts/AllPosts";
import Login from "./pages/Login/Login";
import Blog from "./pages/Blog/Blog";
import Error from "./pages/Error/Error";


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/AllPosts" element={<AllPosts />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
