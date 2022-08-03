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

const values = { getWeather, getForecast };

export default values;
