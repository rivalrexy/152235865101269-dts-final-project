import http from "../http-common";

let apiKey = "";
//let apiKey = process.env.REACT_APP_API_KEY_OPENMAP;
const getWeather = (city) => {
  return http.baseWeather.get(
    `/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
};
const getForecast = (city) => {
  return http.baseWeather.get(
    `/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  );
};
const getArticle = (from, to) => {
  return http.baseArticle.get(
    `/v2/search?q=Cuaca&countries=ID&page_size=10&from='${from}'&to='${to}'`
  );
};

const values = { getWeather, getForecast, getArticle };

export default values;
