import React from "react";

const Weather = ({ city, country, temperature, humidity, description, error }) => {
  return (
    <div>
      {city && country && <p>Местоположение: {city}, {country}</p>}
      {temperature && <p>Температура: {temperature}</p>}
      {humidity && <p>Влажность: {humidity}</p>}
      {description && <p>Описание: {description}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Weather;
