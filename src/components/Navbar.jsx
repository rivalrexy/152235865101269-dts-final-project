import { useEffect, useState } from "react";
import { BsGoogle, BsCloudFog2Fill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerFB, loginGoogleFB } from "../services/FirebaseConfig";
import { logoutFB } from "../services/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navigate = useNavigate();
  const logoutFunc = (e) => {
    e.preventDefault();
    //await logoutFB();
    toast.promise(logoutFB(), {
      success: "Logout successfully",
      error: "Failed",
    });
    console.log(logoutFB());
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  // return <div className="basis-1/12  bg-gray-700"></div>;
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-700 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo">
              <div className="flex flex-row justify-center">
                <BsCloudFog2Fill size={"3em"} />
                <h2 className="text-xl mt-2 gap-2">
                  Weather Forecast App
                </h2>{" "}
              </div>
            </Link>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/">
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo">
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  onClick={logoutFunc}>
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Logout</span>
                </button>
                <ToastContainer autoClose={3000} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
