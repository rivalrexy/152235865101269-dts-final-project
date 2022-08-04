import { useState, useEffect } from "react";
import { BsGoogle, BsCloudFog2Fill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerFB, loginGoogleFB } from "../services/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardSignUp = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [submited, setSubmitted] = useState(false);
  const [errorValidation, seterrorValidation] = useState(false);

  // const notifySuccess = (e) => {
  //   //e.preventDefault();
  //   toast.success("Account succesfully created !", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };

  useEffect(() => {
    if (submited && !user) {
      seterrorValidation(true);
    }
  }, [submited, user]);

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
  const loginGoogleFunc = (e) => {
    e.preventDefault();
    loginGoogleFB();
  };
  const registerFunc = (e) => {
    e.preventDefault();
    registerFB(data.email, data.password).then(
      () => {},
      () => {
        setSubmitted(true);
      }
    );
    toast.promise(registerFB(data.email, data.password), {
      pending: "Please wait",
      success: "Successfully, Directly to page",
      error: "Failed",
    });
  };

  useEffect(() => {
    // if (loading) {
    //   return;
    // }
    if (user) {
      //notifySuccess();
      setSubmitted(false);
      seterrorValidation(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

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
    } else if (!validatePassword(data.password) && param === "password") {
      return (
        <div
          className="bg-red-100 rounded-lg py-3 px-6 mb-4 text-base text-red-700"
          role="alert">
          Password length min must be 8
        </div>
      );
    } else {
      return;
    }
  };

  const validateEmail = (email) => {
    return email.match(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  function validatePassword(pass) {
    return pass.match(/^\w{8,14}$/);
  }
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
            <h2 className="text-xl mt-2 gap-2">
              Sign up to continue use this app
            </h2>
            <input
              type="text"
              className={
                errorValidation
                  ? "border-solid border-2 border-red-700 py-2 px-2"
                  : "border-solid border-2 border-slate-400 py-2 px-2"
              }
              placeholder="Email"
              value={data.email}
              onChange={emailHandler}
              required
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

            {/* {toast ? <Toaster param={true} /> : <></>} */}
            <div className="grid grid-cols-6">
              <Link to="/login" className="text-blue-600 text-start">
                Login
              </Link>
              <button
                className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-auto border border-gray-500 hover:border-transparent rounded col-end-7 col-span-2"
                onClick={registerFunc}>
                Sign Up
              </button>
              <ToastContainer autoClose={3000} />
            </div>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>

            <button
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

export default CardSignUp;
