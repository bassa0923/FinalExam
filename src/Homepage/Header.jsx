import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function Header() {
  const { weatherData } = useContext(WeatherContext);
  if (weatherData) {
    return (
      <div className="weather">
        <div className="weather-location">{weatherData.location.name}</div>
        <div className="weather-container">
          <img
            className="weather-image"
            src={weatherData.current.condition.icon}
          ></img>
          <div className="weather-temp">{weatherData.current.temp_c}&deg;</div>
        </div>
        <div className="weather-desc">{weatherData.current.condition.text}</div>
      </div>
    );
  } else null;
}

export default Header;
