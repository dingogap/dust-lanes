import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_INSTRUMENT } from '../../utils/mutations';
import { QUERY_INSTRUMENTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const InstrumentForm = () => {
  const [telescope, setTelescope] = useState('');
  const [camera, setCamera] = useState('');
  const [mount, setMount] = useState('');

  const [addInstrument, { error }] = useMutation(ADD_INSTRUMENT, {
    refetchQueries: [QUERY_INSTRUMENTS, 'getInstruments', QUERY_ME, 'me'],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addInstrument({
        variables: {
          telescope,
          camera,
          mount,
        },
      });

      setTelescope('');
      setCamera('');
      setMount('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'telescope') {
      setTelescope(value);
    }
    if (name === 'camera') {
      setCamera(value);
    }
    if (name === 'mount') {
      setMount(value);
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

            <div className='col-12 col-lg-3'>
              <button className='btn btn-primary btn-block py-3' type='submit'>
                Add Instrument
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
          You need to be logged in to add instruments. Please{' '}
          <Link to='/login'>login</Link> or <Link to='/signup'>signup.</Link>
        </p>
      )}
    </div>
  );
};

export default InstrumentForm;
