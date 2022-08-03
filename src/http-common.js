import axios from "axios";

const baseWeather = axios.create({
  baseURL: "https://api.openweathermap.org",
  headers: {
    Accept: "application/json",
  },
});

const baseArticle = axios.create({
  baseURL: "https://api.newscatcherapi.com/",
  headers: {
    "X-API-KEY": process.env.REACT_APP_NEWSCATCHER_API,
  },
});

const values = { baseWeather, baseArticle };

export default values;
