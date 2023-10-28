import { useState } from 'react';
// import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Home from '../pages/Home';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
<main className='auth-page'>
      <div className='row'>
        <div className='auth-card col s12 m6 l6 offset-m3 offset-l3'>
          <div className='card'>
            <div className='card-action white-text'>
              <h3>Sign Up</h3>
            </div>

            <div className='card-content'>
            {data ? (
              <Home />
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className='form-input'
                  placeholder='Your username'
                  name='username'
                  type='text'
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className='form-input'
                  placeholder='Your email'
                  name='email'
                  type='email'
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className='form-input'
                  placeholder='******'
                  name='password'
                  type='password'
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className='login-btn btn-large waves-effect waves-light'
                  style={{ cursor: 'pointer' }}
                  type='submit'
                >
                  Submit
                </button>
              </form>
            )}
<br/>
            {error && (
              <div className='auth-fail red darken-2 white-text'>
                {error.message}
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
