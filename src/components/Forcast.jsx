import React from "react";

const Forecast = ({ title, data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div>
        <div className="flex items-center justify-start mt-6">
          <p className="font-medium uppercase text-white">{title}</p>
        </div>
        <hr className="my-1" />
        <p className="text-white">No data available</p>
      </div>
    );
  }

  return (
    <div>
    <div className="flex items-center justify-start mt-6">
      <p className="font-medium uppercase text-white">{title}</p>
    </div>
  
    <hr className="my-1" />
  
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-3">
      {data.map((d, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-gray-700/30 sm:py-3 py-1 rounded-l"
        >
          <p className="text-white font-light text-xs sm:text-sm">
            {d.title}
          </p>
          <img src={d.icon} alt="Weather icon" className="w-12 my-1" />
          <p className="text-white font-medium">{`${d.temp.toFixed()}°`}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Forecast;
