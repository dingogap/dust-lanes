// import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { QUERY_USER, QUERY_ME, QUERY_CATEGORIES } from '../utils/queries';

const Session = () => {

  const { username: userParam } = useParams();
  var { loading, error, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });
  const user = data?.me || data?.user || {};

  var { loading: categoriesloading, data: categoriesData } = useQuery(QUERY_CATEGORIES);
  const cats = data?.categories || [];

  if (loading) {
    return (
      <main className='stndrd-page'>
        <div className='row'>
          <div>
            <h5>Loading...</h5>
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
      <div className='container'>
        <h4>{user.username}s Imaging Journal</h4>
        <div className='row'>
          <h5>Sessions</h5>
          <div className='row'>
            <div className='col S12 m3 l2'> Filters</div>
            <div className='col S12 m9 l10'>
              <table>
                <thead>
                  <tr>
                    <th>Target</th>
                    <th>Common Name</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Telescope</th>
                  </tr>
                </thead>
                <tbody>
                  {user.sessions.length
                    ? user.sessions.map((i, j) => (
                        <tr key={j}>
                          <td>{i.targetName}</td>
                          <td>{i.commonName}</td>
                          <td>{i.sessionDate}</td>
                          <td>{i.dsoCategory}</td>
                          <td>{i.telescope}</td>
                        </tr>
                      ))
                    : ' '} 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Session;
