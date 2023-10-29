import axios from 'axios';
async function getWeatherData(date, lat, lon) {
    const apiKey = 'Y2CJJFX9EGY7GQRS6DP74QAV3'
    const apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

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

export default getWeatherData