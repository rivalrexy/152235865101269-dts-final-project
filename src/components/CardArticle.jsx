import { useState } from "react";
import ReactPaginate from "react-paginate";
import CardSkeletonArticle from "./CardSkeletonArticle";
import "react-loading-skeleton/dist/skeleton.css";

const CardArticle = ({
  article,
  excerpt,
  media,
  link,
  publishedDate,
  summary,
  loadStatus,
}) => {
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 5;
  const pagesVisited = pageNumber * userPerPage;
  const pageCount = Math.ceil(article.length / userPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayUser = article
    .slice(pagesVisited, pagesVisited + userPerPage)
    .map((item, i) => {
      return (
        <div className="flex mb-20 mx-5 items-center justify-center">
          <img
            key={i}
            src={item.media}
            className="h-48 w-1/4 align-middle"
            alt=""
          />
          <div className="flex flex-col mx-5">
            <a
              href={item.link}
              className="hover:text-blue-400 inline-block text-left align-middle text-xl font-bold">
              {item.excerpt}
            </a>
            <p className="inline-block text-left align-middle mt-2 font-light">
              {item.published_date}
            </p>
            <p className="inline-block  align-middle mt-10 text-justify">
              {item.summary}
            </p>
          </div>
        </div>
      );
    });

  return (
    // <div className="basis-1/4 bg-slate-500 rounded-xl self-center">
    <div className="flex  mx-40 my-5 px-20">
      <div className="shadow-lg rounded-xl ">
        {loadStatus ? <CardSkeletonArticle /> : displayUser}
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              5
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {article.length}
            </span>{" "}
            Entries
          </span>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={`inline-flex mt-2 xs:mt-0 mb-10`}
            nextLinkClassName={`block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            previousLinkClassName={`block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            pageClassName={`py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            activeClassName={`z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
          />
        </div>
      </div>
    </div>
  );
};

export default CardArticle;
