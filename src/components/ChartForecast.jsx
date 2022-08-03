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

const ChartForecast = ({ city }) => {
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
        setDatas(response.data.list);
        //setyAxis(response.data.list);
        //console.log(xAxis);
      })
      .catch((e) => {});
  };

  const data = {
    labels: datas.map((item) => item.dt_txt),
    datasets: [
      {
        label: "Temperature",
        data: datas.map((item) => item.main.temp),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
    options: {
      //  responsive: true,
      maintainAspectRatio: false,
    },
  };

  return (
    <div className="flex basis-1/2">
      <Line className="h-1/2" data={data} />
    </div>
  );
};

export default ChartForecast;
