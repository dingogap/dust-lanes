import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_LOCATION } from '../../utils/mutations';
import { QUERY_LOCATIONS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const LocationForm = () => {
  const [place, setPlace] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [altitude, setAltitude] = useState('');
  const [bortle, setBortle] = useState('');

  const [addLocation, { error }] = useMutation(ADD_LOCATION, {
    refetchQueries: [QUERY_LOCATIONS, 'getLocations', QUERY_ME, 'me'],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addLocation({
        variables: {
          place,
          lat,
          lon,
          altitude,
          bortle,
        },
      });

      setPlace('');
      setLat('');
      setLon('');
      setAltitude('');
      setBortle('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'place') {
      setPlace(value);
    }
    if (name === 'lat') {
      setLat(value);
    }
    if (name === 'lon') {
      setLon(value);
    }
    if (name === 'altitude') {
      setAltitude(value);
    }
    if (name === 'bortle') {
      setBortle(value);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <form
            className='flex-row justify-center justify-space-between-md align-center'
            onSubmit={handleFormSubmit}
          >
            <div className='col-12 col-lg-9'>
              <input
                name='place'
                placeholder='place...'
                type='text'
                value={place}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='lat'
                placeholder='lat...'
                type='text'
                value={lat}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='lon'
                placeholder='lon...'
                type='text'
                value={lon}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='altitude'
                placeholder='altitude...'
                type='text'
                value={altitude}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='bortle'
                placeholder='bortle...'
                type='text'
                value={bortle}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-3'>
              <button className='btn btn-primary btn-block py-3' type='submit'>
                Add Location
              </button>
            </div>
            {error && (
              <div className='col-12 my-3 bg-danger text-white p-3'>
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add locations. Please{' '}
          <Link to='/login'>login</Link> or <Link to='/signup'>signup.</Link>
        </p>
      )}
    </div>
  );
};

export default LocationForm;
