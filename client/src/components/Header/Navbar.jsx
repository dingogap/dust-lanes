import { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

import M from 'materialize-css/dist/js/materialize.min.js';
// import Images from '../Images/Images';

import logo from '../Images/observatory.svg';
import menu from '../Images/bar.svg';
import { Sidenav } from 'materialize-css/dist/js/materialize.min.js';

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

export class Navbar extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  }

  render() {
    return (
      <div>
        <nav>
          <div className='nav-wrapper'>
            <div className='row'>
              <div className='col s12'>
                <Link
                  to='/'
                  data-target='mobile-demo'
                  className='sidenav-trigger hide-on-large'
                >
                  <img src={menu} width='50' height='64' />
                </Link>
                <Link to='/' className='brand-logo'>
                  <span className='brand'>
                    <img src={logo} alt='observatory' width='64' height='64' />
                    <span className='brand-name'>Dust Lanes</span>
                  </span>
                </Link>
                <ul className='right hide-on-med-and-down'>
                  <li>
                    <Link to='/home'>Home</Link>
                  </li>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>

                  {Auth.loggedIn() ? (
                    <>
                      <li>
                        <Link to='/targets'>Targets</Link>
                      </li>
                      <li>
                        <Link to='/sessions'>Sessions</Link>
                      </li>
                      <li>
                        <Link to='/me'>Profile</Link>
                      </li>
                      <li>
                        <Link onClick={logout}>Logout</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to='/login'>Login</Link>
                      </li>
                      <li>
                        <Link to='/signup'>Sign Up</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <ul id='mobile-demo' className='sidenav'>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          {Auth.loggedIn() ? (
            <>
              <li>
                <Link to='/sessions'>Sessions</Link>
              </li>
              <li>
                <Link to='me'>Profile</Link>
              </li>
              <li>
              <Link onClick={logout}>Logout</Link>
              </li>{' '}
            </>
          ) : (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/signup'>Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }
}

export default Navbar;
