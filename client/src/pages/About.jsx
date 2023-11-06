import { useQuery } from '@apollo/client';

import { QUERY_WEATHER } from '../utils/queries';

import formatDate from '../utils/formatDate';

const About = () => {
  var formattedDate = formatDate(new Date());

  var { loading, error, data } = useQuery(QUERY_WEATHER, {
    variables: {
      // date: DateFormatter(new Date()),
      date: formattedDate,
      lat: '-33.263415', // Latitude
      lon: '149.075035', // Longitude
    },
  });

  if (loading) {
    return (
      <main className='stndrd-page'>
        <div className='row'>
          <div>
            <h5>Loading...</h5>
            <div className='indeterminate'></div>
          </div>
        </div>
      </main>
    );
  }
  if (error) return `Error: ${error.message}`;

  return (
    <main className='stndrd-page'>
      <div>
        <h4>About Dust Lanes</h4>

        <div className='row'>
          <div className='col s12 m8 l8'>
            <h5>Save your important astrophotgraphy session data!</h5>
            <h5>Find that infomation you need right when you need it!</h5>
            <br />{' '}
            <h6>
              Dust Lanes handles your multi-session projects and your complex
              mosaics
            </h6><br/>
            <dl className='about-lists'>
              <dt className='about-heading'>
                Storing:
              </dt>
              <dd>
                <ul className='about-li'>
                  <li>target names</li>
                  <li>location data</li>
                  <li>instrument details</li>
                  <li>exposure settings:</li>
                  <li>exposurre count</li>
                  <li>exposure length</li>
                  <li>camera rotation</li>
                  <li>sensor temperature</li>
                  <li>filter</li>
                </ul>
              </dd>
            </dl>
            <dl className='about-lists'>
              <dt className='about-heading'>
                No more:
              </dt>
              <dd>
                <ul>
                  <li>Searching through physical logbooks</li>
                  <li>Messy Spreadsheets</li>
                  <li>Scanning imaging records</li>
                  <li>Hoping for the best...</li>
                </ul>
              </dd>
            </dl>
          </div>
          <div className='col s12 m4 l4'>
            <div className='card blue-grey darken-1'>
              <div className='card-action white-text'>
                <h4>Today&apos;s Weather</h4>
              </div>
              <div className='card-content white-text'>
                <dl>
                  <dt>Date:</dt>
                  <dd>{formattedDate}</dd>
                  <dt>Sunrise:</dt>
                  <dd>{data.weather.sunrise}</dd>
                  <dt>Sunset:</dt>
                  <dd>{data.weather.sunset}</dd>
                  <dt>Moon Phase:</dt>
                  <dd>{data.weather.moonphase}</dd>
                  <dt>Cloud Cover:</dt>
                  <dd>{data.weather.cloudcover}</dd>
                  <dt>Visibility:</dt>
                  <dd>{data.weather.visibility}</dd>
                  <dt>Chance of Rain:</dt>
                  <dd>{data.weather.precipprob}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <br />
        <p></p>
      </div>
    </main>
  );
};

export default About;
