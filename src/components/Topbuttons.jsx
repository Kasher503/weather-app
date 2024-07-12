import React from "react";

const Topbuttons = ({setQuery}) => {
  const cities = [
    {
      id: 1,
      name: "Faisalabad",
    },
    {
      id: 2,
      name: "Lahore",
    },
    {
      id: 3,
      name: "Islamabad",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6 pt-6 sm:pt-2">
      {cities.map((city) => (
        <button
          key={city.id}
          className="sm:text-lg text-sm text-white font-medium hover:bg-gray-700/20  px-1 py-2 rounded-md transition ease-in"
          onClick={()=>setQuery({q: city.name})}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default Topbuttons;
