import "./App.css";
import Login from "./containers/Login";
import Home from "./containers/Home";
import CityDetail from "./containers/CityDetail";
import SignUp from "./containers/SignUp";
import ResetPassword from "./containers/ResetPassword";
import { Routes, Route } from "react-router-dom";
import About from "./containers/About";
import Article from "./containers/Article";
import { SkeletonTheme } from "react-loading-skeleton";
import PrivateRoutes from "./components/PrivateRoutes";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Weather Forecast App";
  }, []);
  return (
    <div className="App">
      {/* <div className="flex h-screen flex-col"> */}
      <SkeletonTheme baseColor="#FFFFFF" highlightColor="#5555">
        <div className="flex flex-col h-screen justify-between">
          {/* <ProtectedRoute></ProtectedRoute> */}

          {/* <Login /> */}
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="reset" element={<ResetPassword />} />
            <Route path="signup" element={<SignUp />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} exact></Route>
              <Route path="about" element={<About />} exact></Route>
              <Route path="article" element={<Article />} exact></Route>
              <Route
                path="forecast/:country"
                element={<CityDetail />}
                exact></Route>
            </Route>
          </Routes>
          <footer className="align-bottom">
            <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
            <span>© 2022 by Rival Dwi Reksy Purnomo. All Rights Reserved.</span>
          </footer>
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default App;
