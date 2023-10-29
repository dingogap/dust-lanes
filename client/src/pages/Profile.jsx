import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import FilterForm from '../components/FilterForm';
import InstrumentForm from '../components/InstrumentForm';
import LocationForm from '../components/LocationForm';
import SessionForm from '../components/SessionForm';

import M from 'materialize-css/dist/js/materialize.min.js';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import { MdDelete } from 'react-icons/md';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  useEffect(() => {
    // Initialize Materialize CSS tabs and set "tab1" as active
    const tabElement = document.querySelectorAll('.tabs');
    M.Tabs.init(tabElement);
  }, []);

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to='/me' />;
  }

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

  if (!user?.username) {
    return (
      <main className='stndrd-page'>
        <div className='row'>
          <h5>
            You need to be logged in to see this. Use the navigation links above
            to sign up or log in!
          </h5>
        </div>
      </main>
    );
  }

  // Initialize MaterializeCSS tabs and set the first tab as active
  var elems = document.querySelector('.tabs');

  return (
    <main className='stndrd-page'>
      <div className='row'>
        {/* Viewing {userParam ? `${user.username}'s` : 'your'} profile. */}
        <h4>{user.username}s Imaging Journal</h4>
        <div className='row'>
          <div className='col s12'>
            <ul className='tabs'>
              <li className='tab col s3'>
                <a href='#profile'>Profile</a>
              </li>
              <li className='tab col s3'>
                <a href='#projects'>Projects</a>
              </li>
              <li className='tab col s3'>
                <a href='#sessions'>Sessions</a>
              </li>
              <li className='tab col s3'>
                <a href='#equipment'>Equipment</a>
              </li>
            </ul>
          </div>
          <div id='profile' className='col s12'>
            <div className='row'>
              <div className='col s4 m4 l4'>
                <h5>Profile</h5>
                <ul>
                  <li>{user.username}</li>
                  <li>{user.email}</li>
                </ul>
              </div>
              <div className='col s8 m8 l4'>
                <h5>Locations</h5>
                {user.locations.length
                  ? user.locations.map((i, j) => (
                      <ul key={j}>
                        {' '}
                        <li>{i.place}</li>
                        <li>{i.lat}</li>
                        <li>{i.lon}</li>
                        <li>{i.altitude}</li>
                        <li>{i.bortle}</li>
                      </ul>
                    ))
                  : ''}
              </div>
            </div>
            <hr />{' '}
            <div className='row'>
              <div className='col s6 m4 l4'>
                <h5>Add Locations</h5>
                <LocationForm />
              </div>
            </div>
          </div>

          <div id='projects' className='col s12'>
            <h5>Projects</h5>
          </div>
          <div id='sessions' className='col s12'>
            <h5>Sessions</h5>
            <div className='row'></div>
            <hr />
            <div className='row'></div>
            <div className='col s6 m4 l4'>
            <h5>Add Sessions</h5>
            <SessionForm />
          </div>
          </div>
          <div id='equipment' className='col s12'>
            <div className='row'>
              <div className='col s6 m6 l6'>
                <h5>Instruments</h5>
                {user.instruments.length
                  ? user.instruments.map((i, j) => (
                      <ul key={j}>
                        {' '}
                        <li>{i.telescope}</li>
                        <li>{i.camera}</li>
                        <li>{i.mount}</li>
                      </ul>
                    ))
                  : ''}
              </div>

              <div className='col s6 m6 l6'>
                <h5>Filters</h5>
                {user.filters.length ? (
                  <ul>
                    {user.filters.map((i, j) => (
                      <li key={j}>
                        {i.filterName} ({i.filterType})
                      </li>
                    ))}{' '}
                  </ul>
                ) : (
                  ''
                )}
              </div>
            </div>
            <hr />
            <div classname='row'>
              <div className='col s6 m6 l6'>
                <h5>Add Instruments</h5>
                <InstrumentForm />
              </div>
              <div className='col s6 m4 l6'>
                <h5>Add Filters</h5>
                <FilterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
