import axios from "axios";

const baseWeather = axios.create({
  baseURL: "https://api.openweathermap.org",
  headers: {
    Accept: "application/json",
  },
});

const values = { baseWeather };

export default values;
