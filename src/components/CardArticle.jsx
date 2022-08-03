import { useState, useEffect } from "react";
import { BsCloudFog2Fill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { auth, resetPasswordFB } from "../services/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const CardArticle = ({
  article,
  excerpt,
  media,
  link,
  publishedDate,
  summary,
}) => {
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
    console.log(article);
  }, []);

  return (
    // <div className="basis-1/4 bg-slate-500 rounded-xl self-center">
    <div className="flex  mx-40 my-5 px-20">
      <div className="shadow-lg rounded-xl ">
        {article.map((item) => {
          return (
            <div className="flex mb-20 mx-5 align-middle">
              <img
                src={item.media}
                className="object-scale-down h-48 w-96 align-middle"
                alt=""
              />
              <div className="flex flex-col mx-5">
                <a
                  href={item.link}
                  className="inline-block text-left align-middle text-xl font-bold">
                  {item.excerpt}
                </a>
                <p className="inline-block text-left align-middle mt-2 font-light">
                  {item.published_date}
                </p>
                <p className="inline-block text-left align-middle mt-10 text-justify">
                  {item.summary}
                </p>
              </div>
            </div>
          );
        })}
        {/* <img src={media} alt="" />
        <p>{article.excerpt}</p> */}
      </div>
    </div>
  );
};

export default CardArticle;
