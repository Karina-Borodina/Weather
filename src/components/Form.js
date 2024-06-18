import React from "react";

const Form = ({ getWeather }) => {
  return (
    <form onSubmit={getWeather}>
      <input type="text" name="country" placeholder="Страна" />
      <input type="text" name="city" placeholder="Город" />
      <button>Получить погоду</button>
    </form>
  );
};

export default Form;
