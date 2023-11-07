// import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import SessionSummary from '../components/SessionSummary'

import {
  QUERY_USER,
  QUERY_ME,
  QUERY_CATEGORIES,
  QUERY_WEATHER,
} from '../utils/queries';

const Session = () => {
  const { username: userParam } = useParams();
  var { loading, error, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

  var { loading: categoriesloading, data: categoriesData } =
    useQuery(QUERY_CATEGORIES);
  const cats = categoriesData?.categories || [];

  const parsedValues = cats.map((object) => {
    return object.categoryName;
  });
  console.log(parsedValues);

  if (loading) {
    return (
      <main className='stndrd-page'>
        <div className='row'>
          <div>
            {/* <h5>Loading...</h5> */}
            <div className='progress'>
              <div className='indeterminate'></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    // Handle errors here
    return <div>Error: {error.message}</div>;
  }
  return (
    <main className='stndrd-page'>
      {/* <div className='container'> */}
      <h4>{user.username}'s Session Logs</h4>
      <div className='row'>
        <div className='row'>
          <div className='col S12 m3 l2'> Filters</div>
          <div className='col S12 m9 l10'>
            <table>
              <thead>
                <tr>
                  <th>Target Name</th>
                  <th>Common Name</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Telescope</th>
                  <th>Camera</th>
                </tr>
              </thead>
              <tbody>
              <SessionSummary sessionData={user.sessions} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
};

export default Session;
