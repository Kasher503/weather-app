import React from "react";

const TimeandLocation = ({ weather: { formattedLocalTime, name, country } }) => {
  return (
    <div className="text-center">
      <div className="my-6">
        <p className="text-lg text-white">{formattedLocalTime}</p>
      </div>
      <div className="my-3">
        <p className="text-2xl text-white">
          {name}, {country}
        </p>
      </div>
    </div>
  );
};

export default TimeandLocation;
