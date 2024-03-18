import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllPosts from "./pages/AllPosts/AllPosts";
import Login from "./pages/Login/Login";


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AllPosts" element={<AllPosts />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
