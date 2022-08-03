import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./containers/Login";
import Home from "./containers/Home";
import CityDetail from "./containers/CityDetail";
import SignUp from "./containers/SignUp";
import ResetPassword from "./containers/ResetPassword";
import { Routes, Route } from "react-router-dom";
import About from "./containers/About";
import Article from "./containers/Article";

function App() {
  return (
    <div className="App">
      {/* <div className="flex h-screen flex-col"> */}
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        {/* <Login /> */}
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="reset" element={<ResetPassword />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="article" element={<Article />}></Route>
          <Route path="forecast/:country" element={<CityDetail />}></Route>
        </Routes>
        <footer className="align-bottom">
          <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
          <span>© 2022 by Rival Dwi Reksy Purnomo. All Rights Reserved.</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
