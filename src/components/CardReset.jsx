import { useState, useEffect } from "react";
import { BsCloudFog2Fill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { auth, resetPasswordFB } from "../services/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const CardReset = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const emailHandler = (event) => {
    setData({
      ...data,
      email: event.target.value,
    });
  };

  const resetPasswordFunc = (e) => {
    e.preventDefault();
    resetPasswordFB(data.email);
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  return (
    <div className="flex justify-center mt-auto mb-auto">
      <div className="shadow-lg rounded-xl basis-1/4">
        <form>
          <div className="flex flex-col gap-y-2 justify-center mx-9 mt-20 mb-5">
            <div className="flex flex-row justify-center">
              <BsCloudFog2Fill size={"3em"} />
              <h2 className="text-xl mt-2 gap-2">Weather Forecast App</h2>
            </div>
            <h2 className="text-xl mt-2 gap-2">Reset Password</h2>
            <input
              type="email"
              className="border-solid border-2 border-slate-400 py-2 px-2"
              placeholder="Email"
              value={data.email}
              onChange={emailHandler}
              required
            />
            <div className="grid grid-cols-2">
              <Link to="/login" className="text-blue-600 text-start">
                Login
              </Link>
            </div>
            <div className="grid grid-cols-6">
              <button
                className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-auto border border-gray-500 hover:border-transparent rounded col-end-7 col-span-2"
                onClick={resetPasswordFunc}>
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardReset;
