import React, { useState } from "react";

import Info from "./components/info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "48e1863c2c4deb2e4ab7f4274142a6bc";

const App = () => {
  const [weather, setWeather] = useState({
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  });

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      setWeather({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      setWeather({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Info />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={getWeather} />
                <Weather 
                  temperature={weather.temperature} 
                  humidity={weather.humidity}
                  city={weather.city}
                  country={weather.country}
                  description={weather.description}
                  error={weather.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
