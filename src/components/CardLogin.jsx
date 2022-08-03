import { useState, useEffect } from "react";
import { BsGoogle, BsCloudFog2Fill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { auth, loginFB, loginGoogleFB } from "../services/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardLogin = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [submited, setSubmitted] = useState(false);
  const [errorValidation, seterrorValidation] = useState(false);

  useEffect(() => {
    if (submited) {
      seterrorValidation(true);
    }
  }, [submited]);

  const emailHandler = (event) => {
    setData({
      ...data,
      email: event.target.value,
    });
    setSubmitted(false);
    seterrorValidation(false);
  };

  const passwordHandler = (event) => {
    setData({
      ...data,
      password: event.target.value,
    });
    setSubmitted(false);
    seterrorValidation(false);
  };
  const loginFunc = (e) => {
    e.preventDefault();
    loginFB(data.email, data.password).then(
      () => {},
      () => {
        setSubmitted(true);
      }
    );
    toast.promise(loginFB(data.email, data.password), {
      pending: "Please wait",
      success: "Successfully, Directly to page",
      error: "Failed",
    });
  };
  const alert = (param) => {
    if (data.email === "") {
      return (
        <div
          className="bg-red-100 rounded-lg py-3 px-6 mb-4 text-base text-red-700"
          role="alert">
          Please Fill out this field
        </div>
      );
    } else if (!validateEmail(data.email) && param === "email") {
      return (
        <div
          className="bg-red-100 rounded-lg py-3 px-6 mb-4 text-base text-red-700 "
          role="alert">
          Not valid email address
        </div>
      );
    } else if (!user && param === "password") {
      return (
        <div
          className="bg-red-100 rounded-lg py-3 px-6 mb-4 text-base text-red-700"
          role="alert">
          Wrong Password
        </div>
      );
    } else {
      return;
    }
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const loginGoogleFunc = (e) => {
    e.preventDefault();
    loginGoogleFB();
  };

  useEffect(() => {
    if (user) {
      setSubmitted(false);
      seterrorValidation(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
    }
  }, [loading, user, navigate]);

  return (
    // <div className="basis-1/4 bg-slate-500 rounded-xl self-center">
    <div className="flex justify-center mt-auto mb-auto">
      <div className="shadow-lg rounded-xl basis-1/4">
        <form>
          <div className="flex flex-col gap-y-2 justify-center mx-9 mt-20 mb-5">
            <div className="flex flex-row justify-center">
              <BsCloudFog2Fill size={"3em"} />
              <h2 className="text-xl mt-2 gap-2">Weather Forecast App</h2>
            </div>
            <input
              type="email"
              className={
                errorValidation
                  ? "border-solid border-2 border-red-700 py-2 px-2"
                  : "border-solid border-2 border-slate-400 py-2 px-2"
              }
              placeholder="Email"
              value={data.email}
              onChange={emailHandler}
              id="email"
            />
            {submited ? alert("email") : <></>}
            <input
              type="password"
              className={
                errorValidation
                  ? "border-solid border-2 border-red-700 py-2 px-2"
                  : "border-solid border-2 border-slate-400 py-2 px-2"
              }
              placeholder="Password"
              value={data.password}
              onChange={passwordHandler}
            />
            {submited ? alert("password") : <></>}

            <div className="grid grid-cols-2">
              <Link to="/signup" className="text-blue-600 text-start">
                Sign Up
              </Link>
              <Link to="/reset" className="text-blue-600 text-end">
                Reset Password
              </Link>
            </div>
            <div className="grid grid-cols-6">
              <button
                className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-auto border border-gray-500 hover:border-transparent rounded col-end-7 col-span-2"
                onClick={loginFunc}>
                Login
              </button>
              <ToastContainer autoClose={3000} />
            </div>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>

            <button
              type="submit"
              className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-auto border border-gray-500 hover:border-transparent rounded col-end-7 col-span-2 flex flex-row justify-center"
              onClick={loginGoogleFunc}>
              <BsGoogle />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardLogin;
