import { useQuery } from '@apollo/client';

import {QUERY_WEATHER } from '../utils/queries';

const About = () => {

 var { loading, error, data } = useQuery(QUERY_WEATHER, {
    variables: {
      date: '2023-01-01',
      lat: "-33.263415", // Latitude
      lon: "149.075035", // Longitude
    },
  });

  if (loading) {return( 'Loading...')}
  if (error) return `Error: ${error.message}`;

  // Handle the data and display it as needed
  const weatherData = data?.getWeatherData || [];

  const parsedValues = weatherData.map((object) => {
    return object.days;
  });

  console.log(data.weather.moonphase) 


  return (
    <main className='stndrd-page'>
      <div>
        <h5>About</h5>


        <br/><p></p>
      </div>
    </main>
  );
};

export default About;
