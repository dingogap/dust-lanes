import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import getWeatherData from '../../utils/getWeather'

import { ADD_TARGET } from '../../utils/mutations';
import { QUERY_TARGETS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const TargetForm = () => {
  const [targetName, setTargetName] = useState('');
  const [commonName, setCommonName] = useState('');
  const [dsoCategory, setDsoCategory] = useState('');
  const [image, setImage] = useState('');

  const [addTarget, { error }] = useMutation(ADD_TARGET, {
    refetchQueries: [QUERY_TARGETS, 'getTargets', QUERY_ME, 'me'],
  });
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // setMoonPhase( getWeatherData('2023-10-28', '-33.263415', '149.075035')
    // .then(weatherData => {
    //     console.log('Weather Data:', weatherData);

    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // }));



    try {
      const { data } = await addTarget({
        variables: {
          targetName,
          commonName,
          dsoCategory,
          image,
        },
      });

      setTargetName('');
      setCommonName('');
      setDsoCategory('');
      setImage('');
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
    if (name === 'dsoCategory') {
      setDsoCategory(value);
    }
    if (name === 'image') {
      setImage(value);
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
                name='image'
                placeholder='image...'
                type='text'
                value={image}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>            
            <div className='col-12 col-lg-3'>
              <button className='btn btn-primary btn-block py-3' type='submit'>
                Add Target
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

export default TargetForm;
