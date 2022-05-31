import React, { useState, useEffect } from 'react';

function Weather() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=27.336435&lon=-82.530655&&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((r) => r.json())
      .then((weatherObj) => {
        setData(weatherObj);
      });
  }, []);

  const weatherData = data;

  return (
    <>
      <div className="weather-img">☀️ Weather Report ⛈</div>
      {weatherData.current ? (
        <div className="weather">
          <strong>Location: Sarasota / Bradenton </strong> <br></br>
          <strong>Temp: {weatherData.current.temp}</strong> <br></br>
          <strong>
            Forecast: {weatherData.current.weather[0].description}
          </strong>
          <br></br>
        </div>
      ) : (
        <div className="weather">
          <h2>"Weather Machine Is Broken"</h2>
        </div>
      )}
    </>
  );
}

export default Weather;
