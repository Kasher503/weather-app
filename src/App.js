import { useState, useEffect, useRef } from "react";
import "./App.css";
import Topbuttons from "./components/Topbuttons.jsx";
import Input from "./components/Input.jsx";
import TimeandLocation from "./components/TimeandLocation.jsx";
import TempandDetails from "./components/TempandDetails.jsx";
import Forecast from "./components/Forcast.jsx";
import getFormattedWeatherDate from "./Services/Weatherservice.js";
import Footer from "./components/Footer.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import clearSkyVideo from "./assets/clearSkyVideo.mp4";
import cloudyVideo from "./assets/cloudyVideo.mp4";
import rainVideo from "./assets/rainVideo.mp4";
import smoke from "./assets/smoke.mp4";
import snow from "./assets/snow.mp4";

function App() {
  const [query, setQuery] = useState({ q: "Faisalabad" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const videoRef = useRef(null);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getWeather = async () => {
    const Cityname = query.q ? query.q : "Current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(Cityname)}`);
    try {
      const data = await getFormattedWeatherDate({ ...query, units });
      if (data) {
        setWeather(data);
      } else {
        toast.error(
          `City name "${capitalizeFirstLetter(Cityname)}" not found.`
        );
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
      toast.error(
        <>
          Invalid city name
          <br />
          Unable to fetch weather data for {capitalizeFirstLetter(Cityname)}
        </>
      );
    }
  };

  const getBackgroundVideo = () => {
    if (!weather || !weather.details) return clearSkyVideo;

    const condition = weather.details.toLowerCase().trim();
    console.log("Weather condition:", condition);

    if (condition.includes("clear")) return clearSkyVideo;
    if (condition.includes("clouds")) return cloudyVideo;
    if (condition.includes("snow")) return snow;
    if (
      condition.includes("smoke") ||
      condition.includes("haze") ||
      condition.includes("dust") ||
      condition.includes("fog")
    )
      return smoke;
    if (
      condition.includes("rain") ||
      condition.includes("thunderstorm") ||
      condition.includes("drizzle")
    )
      return rainVideo;

    return clearSkyVideo;
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = getBackgroundVideo();
      videoRef.current.load();
    }
  }, [weather]);

  return (
    <div className="App">
      <div className="relative max-w-screen-lg mx-auto my-3">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover rounded-xl  filter "
        />
        <div className="relative sm:px-6 lg:px-8 rounded-xl sm:p-5 shadow-2xl shadow-gray-400 bg-transparent">
          <Topbuttons setQuery={setQuery} />
          <Input setQuery={setQuery} setUnits={setUnits} />
          {weather && (
            <>
              <TimeandLocation weather={weather} />
              <TempandDetails weather={weather} units={units} />
              <Forecast title="3 hours step forecast" data={weather.Hourly} />
              <Forecast title="Daily forecast" data={weather.Daily} />
            </>
          )}
        </div>
      </div>
      <Footer />

      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
}

export default App;
