import { useState, useEffect } from "react";
import getWeatherbyCityService from "../services/Endpoint";
import SearchBar from "../components/SearchBar";
import CardWeather from "../components/CardWeather";
import CardMapLeaflet from "../components/CardMapLeaflet";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { auth } from "../services/FirebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const [main, setMain] = useState([]);
  const [cordLon, setCordLon] = useState(106.816666);
  const [cordLat, setCordLat] = useState(-6.2);
  const [city, setCity] = useState("Jakarta");
  const [weather, setWeather] = useState("Jakarta");
  const [wind, setWind] = useState("Jakarta");
  const [date, setDate] = useState("Jakarta");
  const { countryValue } = useSelector((state) => state.country);

  useEffect(() => {
    mainData(countryValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryValue]);

  useEffect(() => {
    mainData(countryValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const converDate = (currentTimestamp) => {
    return new Date(currentTimestamp * 1000).toLocaleDateString("en-US");
  };
  const mainData = (city) => {
    getWeatherbyCityService
      .getWeather(city)
      .then((response) => {
        setMain(response.data.main);
        setCordLon(response.data.coord.lon);
        setCordLat(response.data.coord.lat);
        setCity(response.data.name);
        setWeather(response.data.weather[0]);
        setWind(response.data.wind);
        setDate(converDate(response.data.dt));
        //console.log(response.data.dt);
      })
      .catch((e) => {});
  };

  return (
    <>
      {/* <h1>{`Temperature ${main.temp}`}</h1> */}
      <SearchBar />
      <div className="flex flex-row justify-around">
        <CardWeather
          payload={main}
          city={city}
          weather={weather}
          wind={wind}
          date={date}
        />
        <CardMapLeaflet cordinateLon={cordLon} cordinateLat={cordLat} />
        {/* <CardMap /> */}
      </div>
    </>
  );
};

export default Home;
