import { useState, useEffect } from "react";
import getWeatherbyCityService from "../services/Endpoint";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TableForecast = ({ city }) => {
  //const [data, setData] = useState([]);
  //const [yAxis, setyAxis] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    mainData(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const mainData = (city) => {
    getWeatherbyCityService
      .getForecast(city)
      .then((response) => {
        setDatas(filtered(response.data.list));
      })
      .catch((e) => {});
  };

  const filtered = (data) => {
    return data.filter((item) => item.dt_txt.includes("00:00:00"));
  };

  return (
    <div className="flex basis-1/2 flex-col text-start gap-5 mt-8 ml-10 text-2xl text-gray-900">
      <div className="grid grid-cols-3 gap-4 mt-2">
        {datas.map((item) => {
          return (
            <>
              <h1>{item.dt_txt}</h1>
              <div className="flex flex-row">
                <img
                  src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt=""
                />
                <h2 className="text-lg">{item.main.temp} °C</h2>
              </div>

              <h1>{item.weather[0].description}</h1>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TableForecast;
