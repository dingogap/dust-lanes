import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import FilterForm from '../components/FilterForm';
import InstrumentForm from '../components/InstrumentForm';
import LocationForm from '../components/LocationForm';
import SessionForm from '../components/SessionForm';
import TargetForm from '../components/TargetForm';
import Tabs from '../components/Tabs';
import LocationList from '../components/LocationList';
import InstrumentList from '../components/InstrumentList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import { MdDelete } from 'react-icons/md';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

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
            <div className='indeterminate'></div>
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
  const tabs = [
    {
      id: 'tab1',
      title: 'Profile',
      content: (
        <div>
          <div className='row'>
            <div className='col s12 m6 l6'>
              <h5>Profile</h5>
              <ul>
                <li>{user.username}</li>
                <li>{user.email}</li>
              </ul>
            </div>
            <div className='col s12 m6 l6'>
              <h5>Locations</h5>
                <LocationList locationData = {user.locations} />
            </div>
            <div className='row'>
              <div className='col s6 m4 l4'>
                <h5>Add Locations</h5>
                <LocationForm />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tab2',
      title: 'Targets',
      content: (
        <div>
          <div className='row'>
            <div id='targets' className='col s12'>
              <h5>Targets</h5>
              <div className='row'>
                <table>
                  <thead>
                    <tr>
                      <th>Target</th>
                      <th>Common Name</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.targets.length
                      ? user.targets.map((i, j) => (
                          <tr key={j}>
                            <td>{i.targetName}</td>
                            <td>{i.commonName}</td>
                            <td>{i.dsoCategory}</td>
                          </tr>
                        ))
                      : ' '}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col s6 m4 l4'>
              <h5>Add Targets</h5>
              <TargetForm />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tab3',
      title: 'Sessions',
      content: (
        <div>
          <div className='row'>
            <div id='sessions' className='col s12'>
              <h5>Sessions</h5>
              <div className='row'>
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
          <div className='row'>
            <div className='col s6 m4 l4'>
              <h5>Add Sessions</h5>
              <SessionForm />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tab4',
      title: 'Equipment',
      content: (
        <div>
          <div className='row'>
            <div className='col s12 m6 l6'>
              <h5>Instruments</h5>
              <InstrumentList instrumentData = {user.instruments} />
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
          <div className='row'>
            <div className='col s6 m6 l6'>
              <h5>Add Instruments</h5>
              <InstrumentForm />
            </div>
            <div className='col s6 m4 l6'>
              <h5>Add Filters</h5>
              <div>
                <FilterForm />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  var elems = document.querySelector('.tabs');

  return (
    <main className='stndrd-page'>
      {/* <div className='container'> */}
      <h4>{user.username}'s Imaging Journal</h4>
      <div className='col s12'>
        <Tabs tabs={tabs} defaultTab='tab1' />
      </div>
      {/* </div> */}
    </main>
  );
};

export default Profile;
