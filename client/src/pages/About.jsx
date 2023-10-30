import { useQuery } from '@apollo/client';
import WeatherData from '../components/WeatherData';

let mp=''

const About = () => {
  return (
    <main className='stndrd-page'>
      <div>
        <h5>About</h5>

        {mp = <WeatherData date='2023-08-15' lat='-33.263415' lon = '149.075035'/>}

        <br/><p></p>
      </div>
    </main>
  );
};

export default About;
