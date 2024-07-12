import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TempandDetails = ({ weather: { details, temp, temp_min, temp_max, icon, sunrise, sunset, speed, humidity, feels_like }, units }) => {
  const verticaldetails = [
    {
      id: 1,
      name: "Real Feel:",
      info: `${feels_like.toFixed()}°`,
      icon: <FaThermometerEmpty size={18} className="mr-1" />
    },
    {
      id: 2,
      name: "Humidity:",
      info: `${humidity}%`,
      icon: <BiSolidDropletHalf size={18} className="mr-1" />
    },
    {
      id: 3,
      name: "Wind:",
      info: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
      icon: <FiWind size={18} className="mr-1" />
    }
  ];

  const horizontaldetails = [
    {
      id: 1,
      name: "Sun Rise:",
      info: `${sunrise}`,
      icon: <GiSunrise size={18} className="mr-1" />
    },
    {
      id: 2,
      name: "Sun Set:",
      info: `${sunset}`,
      icon: <GiSunset size={18} className="mr-1" />
    },
    {
      id: 3,
      name: "High:",
      info: `${temp_max.toFixed()}°`,
      icon: <MdKeyboardArrowUp size={18} className="mr-1" />
    },
    {
      id: 4,
      name: "Low:",
      info: `${temp_min.toFixed()}°`,
      icon: <MdKeyboardArrowDown size={18} className="mr-1" />
    },
  ];

  return (
    <div className="text-center">
      <div className="text-cyan-300 text-lg py-6">
        <p>{details}</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-3 space-y-3 md:space-y-0">
        <img
          src={icon}
          alt="Weather image"
          className="w-32 md:w-40"
        />
        <p className="text-4xl md:text-6xl text-white">{`${temp.toFixed()}`}°</p>

        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex flex-col text-white space-y-2 md:space-y-3">
            {verticaldetails.map((item) => (
              <div key={item.id} className="flex items-center">
                {item.icon}
                <span className="font-medium">{item.name}</span> <span className="ml-2 md:ml-10">{item.info}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-5 justify-center space-y-3 md:space-y-0 md:space-x-10 text-sm">
        {horizontaldetails.map((item) => (
          <div key={item.id} className="flex items-center text-white">
            {item.icon}
            <span className="font-medium text-white">{item.name}</span> <span className="ml-1 text-white">{item.info}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempandDetails;
