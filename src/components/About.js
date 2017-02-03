import React from 'react';

export default function About () {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a weather application build on React. I've built this
        for The Complete React Web App Developer Course.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://github.com/LucoLe/WeatherAppReact" target="_blank">Github repo</a> - This is the
            repository of the project on Github.
        </li>
        <li>
          <a href="http://openweathermap.org/" target="_blank">Open Weather Map</a> - I used Open Weather Map
            to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
}
