import { useState, useEffect } from "react";
import CardArticle from "../components/CardArticle";
import getArticleService from "../services/Endpoint";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [excerpt, setExcerpt] = useState("");
  const [media, setMedia] = useState("");
  const [link, setLink] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   mainData("2022/08/01","2022/08/03");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    mainData(dateYesterday(), dateNow());
    //console.log(converDate.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dateNow = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + "/" + mm + "/" + dd;
    return today;
  };

  const dateYesterday = () => {
    let date = new Date();
    date.setDate(date.getDate() - 1);
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();

    date = yyyy + "/" + mm + "/" + dd;
    return date;
  };

  const mainData = (from, to) => {
    getArticleService
      .getArticle(from, to)
      .then((response) => {
        setArticles(response.data.articles);
        setExcerpt(response.data.articles[0].excerpt);
        setMedia(response.data.articles[0].media);
        setLink(response.data.articles[0].link);
        setPublishedDate(response.data.articles[0].published_date);
        setSummary(response.data.articles[0].summary);
        setLoading(false);
      })
      .catch((e) => {});
  };

  return (
    <CardArticle
      article={articles}
      excerpt={excerpt}
      media={media}
      link={link}
      publishedDate={publishedDate}
      summary={summary}
      loadStatus={loading}
    />
  );
};

export default Article;
