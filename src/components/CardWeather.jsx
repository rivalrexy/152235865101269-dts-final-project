import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import getWeatherbyCityService from "../services/Endpoint";

const CardWeather = ({ payload, city, weather, wind, date }) => {
  const [mainJakarta, setMainJakarta] = useState([]);
  const [cordLonJakarta, setCordLonJakarta] = useState(106.816666);
  const [cordLatJakarta, setCordLatJakarta] = useState(-6.2);
  const [cityJakarta, setCityJakarta] = useState("Jakarta");
  const [weatherJakarta, setWeatherJakarta] = useState("");
  const [windJakarta, setWindJakarta] = useState("");
  const [dateJakarta, setDateJakarta] = useState("");

  const [mainBandung, setMainBandung] = useState([]);
  const [cordLonBandung, setCordLonBandung] = useState(107.627449);
  const [cordLatBandung, setCordLatBandung] = useState(-6.932694);
  const [cityBandung, setCityBandung] = useState("Bandung");
  const [weatherBandung, setWeatherBandung] = useState("");
  const [windBandung, setWindBandung] = useState("");
  const [dateBandung, setDateBandung] = useState("");

  const [mainSurabaya, setMainSurabaya] = useState([]);
  const [cordLonSurabaya, setCordLonSurabaya] = useState(112.808304);
  const [cordLatSurabaya, setCordLatSurabaya] = useState(-7.275973);
  const [citySurabaya, setCitySurabaya] = useState("Surabaya");
  const [weatherSurabaya, setWeatherSurabaya] = useState("");
  const [windSurabaya, setWindSurabaya] = useState("");
  const [dateSurabaya, setDateSurabaya] = useState("");

  useEffect(() => {
    mainDataJakarta("jakarta");
    mainDataBandung("bandung");
    mainDataSurabaya("surabaya");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const converDate = (currentTimestamp) => {
    return new Date(currentTimestamp * 1000).toLocaleDateString("en-US");
  };
  const mainDataJakarta = (city) => {
    getWeatherbyCityService
      .getWeather(city)
      .then((response) => {
        setMainJakarta(response.data.main);
        setCordLonJakarta(response.data.coord.lon);
        setCordLatJakarta(response.data.coord.lat);
        setCityJakarta(response.data.name);
        setWeatherJakarta(response.data.weather[0]);
        setWindJakarta(response.data.wind);
        setDateJakarta(converDate(response.data.dt));
        //console.log(response.data.dt);
      })
      .catch((e) => {});
  };

  const mainDataBandung = (city) => {
    getWeatherbyCityService
      .getWeather(city)
      .then((response) => {
        setMainBandung(response.data.main);
        setCordLonBandung(response.data.coord.lon);
        setCordLatBandung(response.data.coord.lat);
        setCityBandung(response.data.name);
        setWeatherBandung(response.data.weather[0]);
        setWindBandung(response.data.wind);
        setDateBandung(converDate(response.data.dt));
        //console.log(response.data.dt);
      })
      .catch((e) => {});
  };

  const mainDataSurabaya = (city) => {
    getWeatherbyCityService
      .getWeather(city)
      .then((response) => {
        setMainSurabaya(response.data.main);
        setCordLonSurabaya(response.data.coord.lon);
        setCordLatSurabaya(response.data.coord.lat);
        setCitySurabaya(response.data.name);
        setWeatherSurabaya(response.data.weather[0]);
        setWindSurabaya(response.data.wind);
        setDateSurabaya(converDate(response.data.dt));
        //console.log(response.data.dt);
      })
      .catch((e) => {});
  };

  const formatting = (date) => {
    let convertDate = new Date(date);
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let formatted_date =
      day[convertDate.getDay()] +
      ", " +
      convertDate.getDate() +
      " " +
      months[convertDate.getMonth()] +
      " " +
      convertDate.getFullYear();
    return formatted_date.toString();
  };
  return (
    // <div className="basis-1/4 bg-slate-500 rounded-xl self-center">
    <div className="flex basis-1/2 mx-2">
      <div className="shadow-lg rounded-xl basis-full px-10 py-20">
        <h1 className="text-gray-800 text-start text-4xl">{city}</h1>
        <h1 className="text-gray-500 text-start">{formatting(date)}</h1>
        <img
          src={`http://openweathermap.org/img/w/${weather.icon}.png`}
          alt=""
          className="w-24"
        />
        <h1 className="text-gray-800 text-start text-3xl pt-2">
          {payload.temp} °C
        </h1>
        <h1 className="text-gray-500 text-start text-2xl">
          {weather.main}, {weather.description}
        </h1>
        <h1 className="text-gray-500 text-end text-lg">
          HUMIDITY {payload.humidity} %
        </h1>
        <h1 className="text-gray-500 text-end text-lg">
          PRESSURE {payload.pressure} Pa
        </h1>
        <h1 className="text-gray-500 text-end text-lg">
          SPEED {wind.speed} KM/h
        </h1>
        <div className="text-end">
          <Link to={`/forecast/${city}`}>
            <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-5 border border-gray-500 hover:border-transparent rounded col-end-7 col-span-2">
              Forecast Detail
            </button>
          </Link>
        </div>

        <div class="flex justify-center">
          <h1 className="self-auto text-gray-800 text-2xl mb-4 mt-4">
            Top 3 City Weather
          </h1>
          <span class="animate-ping relative inline-flex rounded-full h-3 w-3  mb-4 mt-4 bg-sky-500"></span>
        </div>
        <h1 className="text-gray-500">{dateJakarta}</h1>
        <div className="grid grid-cols-4 gap-4 mt-2">
          <div>
            <Link to={`forecast/${cityJakarta}`}>
              <h1 className="text-blue-500 text-lg">{cityJakarta}</h1>
            </Link>
          </div>
          <div className="flex">
            <img
              src={`http://openweathermap.org/img/w/${weatherJakarta.icon}.png`}
              alt=""
            />
            <h1 className="text-gray-800 text-lg">{weatherJakarta.main}</h1>
          </div>
          <div>
            <h1 className="text-gray-800 text-lg">{mainJakarta.temp} °C</h1>
          </div>
          <div>
            <h1 className="text-gray-800 text-lg">{mainJakarta.humidity} %</h1>
          </div>
          <div>
            <Link to={`forecast/${cityBandung}`}>
              <h1 className="text-blue-500  text-lg">{cityBandung}</h1>
            </Link>
          </div>
          <div className="flex">
            <img
              src={`http://openweathermap.org/img/w/${weatherBandung.icon}.png`}
              alt=""
            />
            <h1 className="text-gray-800 text-lg">{weatherBandung.main}</h1>
          </div>
          <div>
            <h1 className="text-gray-800 text-lg">{mainBandung.temp} °C</h1>
          </div>
          <div>
            <h1 className="text-gray-800 text-lg">{mainBandung.humidity} %</h1>
          </div>
          <div>
            <Link to={`forecast/${citySurabaya}`}>
              <h1 className="text-blue-500  text-lg">{citySurabaya}</h1>
            </Link>
          </div>
          <div className="flex">
            <img
              src={`http://openweathermap.org/img/w/${weatherSurabaya.icon}.png`}
              alt=""
            />
            <h1 className="text-gray-800 text-lg">{weatherSurabaya.main}</h1>
          </div>
          <div>
            <h1 className="text-gray-800 text-lg">{mainSurabaya.temp} °C</h1>
          </div>
          <div>
            <h1 className="text-gray-800 text-lg">{mainSurabaya.humidity} %</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWeather;
