const axios = require('axios');

async function getWeatherData(date, lat, lon) {
  const apiKey = process.env.VISUALCROSSING_KEY;
  const apiUrl =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

  try {
    const response = await axios.get(apiUrl, {
      params: {
        key: apiKey,
        location: `${lat},${lon}`,
        date: date,
        include: 'current',
      },
    });

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
}

module.exports = getWeatherData;
