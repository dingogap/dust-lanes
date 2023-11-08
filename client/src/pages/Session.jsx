import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import SessionSummary from '../components/SessionSummary';

// import M from 'materialize-css'

import {
  QUERY_USER,
  QUERY_ME,
  QUERY_CATEGORIES,
  QUERY_WEATHER,
} from '../utils/queries';

const Session = () => {
  const { username: userParam } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(''); // Initialize selectedCategory state

  const { loading, error, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

  const { loading: categoriesloading, data: categoriesData } = useQuery(QUERY_CATEGORIES);
  const cats = categoriesData?.categories || [];

  const parsedValues = cats.map((object) => {
    return object.categoryName;
  });

  useEffect(() => {
    M.AutoInit();
  }, []);

  if (loading) {
    return (
      <main className='stndrd-page'>
        <div className='row'>
          <div>
            <h5>Loading...</h5>
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
      <h4>{user.username}'s Session Logs</h4>
      <div className='row'>
        <div className='row'>
          <div className='col S12 m3 l2 input-field'>
          {/* <label htmlFor="categoryFilter">Category:</label> */}
          <select
            id="categoryFilter"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            <option value="">All</option>
            {parsedValues.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select><label htmlFor="categoryFilter">Category:</label></div>
          <div className='col S12 m9 l10'>
            <SessionSummary sessionData={user.sessions} selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Session;
