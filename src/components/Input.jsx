import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Input = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState('');

  const handleClick = () => {
    if (city !== "") setQuery({ q: city });
    setCity('');
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <div className="sm:w-3/4 flex flex-col items-center md:flex-row justify-center my-6 space-y-4 md:space-y-0 md:space-x-4 sm:ml-20">
      <div className="flex flex-row w-full md:w-3/4 items-center justify-center space-x-2">
        <input
          type="text"
          placeholder="Search by city..."
          className="text-gray-500 font-light text-lg p-2 w-full rounded-lg shadow-xl focus:outline-none capitalize placeholder:lowercase px-4"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <BiSearch
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125 text-white"
          onClick={handleClick}
        />
        <BiCurrentLocation
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125 text-white"
          onClick={handleLocation}
        />
      </div>
      <div className="flex flex-row w-full md:w-1/4 items-center justify-center md:justify-end space-x-2">
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125 text-white"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>
        <p className="text-white text-2xl font-medium mx-1">|</p>
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125 text-white"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Input;
