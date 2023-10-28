import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SESSION } from '../../utils/mutations';
import { QUERY_SESSIONS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const SessionForm = () => {
  const [targetName, setTargetName] = useState('');
  const [commonName, setCommonName] = useState('');
  const [sessionDate, setSessionDate] = useState('');
  const [targetCategory, setTargetCategory] = useState('');
  const [location, setLocation] = useState('');

  const [addSession, { error }] = useMutation(ADD_SESSION, {
    refetchQueries: [QUERY_SESSIONS, 'getSessions', QUERY_ME, 'me'],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addSession({
        variables: {
          targetName,
          commonName,
          sessionDate,
          targetCategory,
          location,
        },
      });

      setTargetName('');
      setCommonName('');
      setSessionDate('');
      setTargetCategory('');
      setLocation('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'targetName') {
      setTargetName(value);
    }
    if (name === 'commonName') {
      setCommonName(value);
    }
    if (name === 'sessionDate') {
      setSessionDate(value);
    }
    if (name === 'targetCategory') {
      setTargetCategory(value);
    }
    if (name === 'location') {
      setLocation(value);
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
                name='targetName'
                placeholder='targetName...'
                type='text'
                value={targetName}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='commonName'
                placeholder='commonName...'
                type='text'
                value={commonName}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='sessionDate'
                placeholder='sessionDate...'
                type='text'
                value={sessionDate}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='targetCategory'
                placeholder='targetCategory...'
                type='text'
                value={targetCategory}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='location'
                placeholder='location...'
                type='text'
                value={location}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-3'>
              <button className='btn btn-primary btn-block py-3' type='submit'>
                Add Session
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

export default SessionForm;
