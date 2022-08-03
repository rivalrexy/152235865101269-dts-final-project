import React from "react";
import ChartForecast from "../components/ChartForecast";
import TableForecast from "../components/TableForecast";
import { useParams } from "react-router-dom";

const CityDetail = () => {
  let params = useParams();
  return (
    <>
      <h1 className="text-4xl text-gray-800">
        Forecast Detail in {params.country}
      </h1>
      <div className="flex">
        <div className="flex flex-col basis-1/2">
          <h1 className="text-2xl text-gray-500 text-start ml-10">
            3 Hours Forecast
          </h1>
          <ChartForecast city={params.country} />
        </div>
        <div className="flex flex-col basis-1/2">
          <h1 className="text-2xl text-gray-500 text-start ml-10">
            5 days Forecast
          </h1>
          <TableForecast city={params.country} />
        </div>
      </div>
    </>
  );
};

export default CityDetail;
