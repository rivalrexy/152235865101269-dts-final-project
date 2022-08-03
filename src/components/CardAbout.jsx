import { useState, useEffect } from "react";
import { BsCloudFog2Fill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { auth, resetPasswordFB } from "../services/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const CardAbout = () => {
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
    // <div className="basis-1/4 bg-slate-500 rounded-xl self-center">
    <div className="flex justify-center mt-auto mb-auto">
      <div className="shadow-lg rounded-xl basis-1/4 px-6 mx-2 py-4">
        <h1 className="font-semibold text-xl mb-2">Rival Dwi Reksy Purnomo</h1>
        <div className="flex justify-center mb-20">
          <img
            src="/images/profile.jpg"
            className="rounded-full w-36 h-36"
            alt=""
          />
        </div>
        <ul class="list-inside text-left mb-5">
          <li className="mb-4">
            <p className="font-semibold">Github</p>
            <a href="https://github.com/rivalrexy">
              https://github.com/rivalrexy
            </a>
          </li>
          <li className="mb-4">
            <p className="font-semibold">Homebase</p>
            <p className="subpixel-antialiased">Bandung</p>
          </li>
          <li>
            <p className="font-semibold">About App</p>
            <p className="subpixel-antialiased text-justify">
              Aplikasi prakiraan cuaca berdasarkan filter lokasi yang dipilih,
              menampilkan detail dari lokasi yang dipilih dalam bentuk chart
              prediksi 3 jam ke depan & dalam bentuk list untuk 5 hari kedepan.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardAbout;
