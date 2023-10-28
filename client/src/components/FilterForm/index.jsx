import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_FILTER } from '../../utils/mutations';
import { QUERY_FILTERS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const FilterForm = () => {
  const [filterName, setFilter] = useState('');
  const [filterType, setType] = useState('');

  const [addFilter, { error }] = useMutation(ADD_FILTER, {
    refetchQueries: [QUERY_FILTERS, 'getFilters', QUERY_ME, 'me'],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addFilter({
        variables: {
          filterName,
          filterType,
        },
      });

      setFilter('');
      setType('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'filterName') {
      setFilter(value);
    }
    if (name === 'filterType') {
      setType(value);
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
                name='filterName'
                placeholder='filter...'
                type='text'
                value={filterName}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-lg-9'>
              <input
                name='filterType'
                placeholder='type...'
                type='text'
                value={filterType}
                className='form-input w-100'
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
            </div>

            <div className='col-12 col-lg-3'>
              <button className='btn btn-primary btn-block py-3' type='submit'>
                Add Filter
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
          You need to be logged in to add filters. Please{' '}
          <Link to='/login'>login</Link> or <Link to='/signup'>signup.</Link>
        </p>
      )}
    </div>
  );
};

export default FilterForm;
