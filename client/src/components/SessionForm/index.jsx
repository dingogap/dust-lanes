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
  const [dsoCategory, setDsoCategory] = useState('');
  const [location, setLocation] = useState('');
  const [moonPhase, setMoonPhase] = useState('');
  const [telescope, setTelescope] = useState('');
  const [camera, setCamera] = useState('');
  const [mount, setMount] = useState('');
  const [rotation, setRotation] = useState('');
  const [exposureCount, setExposureCount] = useState('');
  const [duration, setDuration] = useState('');
  const [filter, setFilter] = useState('');

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
          dsoCategory,
          location,
          moonPhase,
          telescope,
          camera,
          mount,
          rotation,
          exposureCount,
          duration,
          filter,
        },
      });

      setTargetName('');
      setCommonName('');
      setSessionDate('');
      setDsoCategory('');
      setLocation('');
      setMoonPhase('');
      setTelescope('');
      setCamera('');
      setMount('');
      setRotation('');
      setExposureCount(''), setDuration('');
      setFilter('');
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
    if (name === 'dsoCategory') {
      setDsoCategory(value);
    }
    if (name === 'location') {
      setLocation(value);
    }
    if (name === 'moonPhase') {
      setMoonPhase(value);
    }
    if (name === 'telescope') {
      setTelescope(value);
    }
    if (name === 'camera') {
      setCamera(value);
    }
    if (name === 'mount') {
      setMount(value);
    }
    if (name === 'rotation') {
      setRotation(value);
    }
    if (name === 'exposureCount') {
      setExposureCount(value);
    }
    if (name === 'duration') {
      setDuration(value);
    }
    if (name === 'filter') {
      setFilter(value);
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
                name='dsoCategory'
                placeholder='dsoCategory...'
                type='text'
                value={dsoCategory}
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
            <div className='col-12 col-lg-9'>
              <input
                name='moonPhase'
                placeholder='moonPhase...'
                type='text'
                value={moonPhase}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='telescope'
                placeholder='telescope...'
                type='text'
                value={telescope}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='camera'
                placeholder='camera...'
                type='text'
                value={camera}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='mount'
                placeholder='mount...'
                type='text'
                value={mount}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='rotation'
                placeholder='rotation...'
                type='text'
                value={rotation}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='exposureCount'
                placeholder='exposure Counta...'
                type='text'
                value={exposureCount}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='duration'
                placeholder='duration...'
                type='text'
                value={duration}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='filter'
                placeholder='filter...'
                type='text'
                value={filter}
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
