import React, { useEffect, useState } from 'react';
import axios from 'axios';


const WeatherData = (props) => {
  const { date, lat, lon } = props;
  const [weatherData, setWeatherData] = useState('');

  useEffect(() => {
    // Define your API key (sign up on OpenWeather to get your API key)
    const apiKey = 'Y2CJJFX9EGY7GQRS6DP74QAV3'

    // Define the OpenWeather API endpoint
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/${date}?key=${apiKey}`;

    // Make an Axios GET request to the API
    axios.get(apiUrl)
      .then((response) => {
        // Handle the API response and update the state
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, [date, lat, lon]);

  return (
    <div>

      {weatherData ? (
        <div>
          
{weatherData.days[0].moonphase}

        </div>
      ) : (
         ''
      )}
    </div>
  );
};

export default WeatherData;

