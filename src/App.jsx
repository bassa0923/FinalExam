import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Dropdown from "./Homepage/Dropdown";
import Universities from "./Homepage/Universities";
import { Route, Routes } from "react-router-dom";
import NotFound from "./notFound";
import Header from "./Homepage/Header";
import { WeatherContext } from "./context/WeatherContext";

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState();

  const countries = [
    { value: "Georgia", label: "Georgia" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "India", label: "India" },
    { value: "Spain", label: "Spain" },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}&fbclid=IwAR1thIwp6dN-lM5QhJRrMQLsL0Q0AC2x5VUmkwbJKhfmikO1ewx3lMyQLyg`
      );
      const dataJson = await response.json();
      setData(dataJson);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=7a45abd716554029a3a02426231912&q=Tbilisi&aqi=no"
      );
      const dataJson = await response.json();
      setWeatherData(dataJson);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    // Get universities data
    if (country) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  useEffect(() => {
    // Get Weather data
    fetchWeather();
  }, []);

  const changeCountry = (selectedCountry) => {
    if (selectedCountry) {
      setCountry(selectedCountry.label);
    } else setCountry("");
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
      }}
    >
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div>
              <Header />
              <Dropdown options={countries} changeCountry={changeCountry} />
              <Universities universities={data} country={country} />
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </WeatherContext.Provider>
  );
}

export default App;
