import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';

import Home from '../pages/Home';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      // setGlobalUser(Auth.getProfile())
      navigate('/me');
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className='auth-page'>
      <div className='row'>
        <div className='auth-card col s12 m6 l6 offset-m3 offset-l3'>
          <div className='card'>
            <div className='card-action white-text'>
              <h3>Login</h3>
            </div>

            <div className='card-content'>
              <form onSubmit={handleFormSubmit}>
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
              <br />
              {error ? (
                <div className='auth-fail red darken-2'>{error.message}</div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
