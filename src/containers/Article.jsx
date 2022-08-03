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

  // useEffect(() => {
  //   mainData("2022/08/01","2022/08/03");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    mainData("2022/08/01", "2022/08/03");
    console.log(articles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const converDate = (currentTimestamp) => {
    return new Date(currentTimestamp * 1000).toLocaleDateString("en-US");
  };
  const mainData = (to, from) => {
    getArticleService
      .getArticle(to, from)
      .then((response) => {
        setArticles(response.data.articles);
        setExcerpt(response.data.articles[0].excerpt);
        setMedia(response.data.articles[0].media);
        setLink(response.data.articles[0].link);
        setPublishedDate(response.data.articles[0].published_date);
        setSummary(response.data.articles[0].summary);
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
    />
  );
};

export default Article;
