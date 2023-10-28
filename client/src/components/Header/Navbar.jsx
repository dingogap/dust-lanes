import { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

import M from 'materialize-css/dist/js/materialize.min.js';
// import Images from '../Images/Images';

import logo from '../Images/observatory.svg';
import menu from '../Images/bar.svg';
// import { Sidenav } from 'materialize-css/dist/js/materialize.min.js';

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
            <div className='user-view'>
              <div className='background'>
                <img src='http://placehold.it/640/555' />
              </div>
              <Link to='#!'>
                <img className='circle' src='http://placehold.it/640/333' />
              </Link>
              <Link to='#!'>
                <span className='white-text name'>John Doe</span>
              </Link>
              <Link to='#!'>
                <span className='white-text email'>jdandturk@gmail.com</span>
              </Link>
            </div>
          </li>
          <li>
            <Link
              to='https://github.com/dogfalo/materialize/'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              to='https://twitter.com/MaterializeCSS'
              target='_blank'
              rel='noreferrer'
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              to='http://next.materializecss.com/getting-started.html'
              target='_blank'
              rel='noreferrer'
            >
              Docs
            </Link>
          </li>
          <li>
            <div className='divider'></div>
          </li>
          <li>
            <Link className='subheader'>Subheader</Link>
          </li>
          <li className='no-padding'>
            <ul className='collapsible collapsible-accordion'>
              <li>
                <Link className='collapsible-header waves-effect'>
                  Dropdown<i className='material-icons'>folder</i>
                </Link>
                <div className='collapsible-body'>
                  <ul>
                    <li>
                      <Link className='waves-effect' to='#!'>
                        First
                      </Link>
                    </li>
                    <li>
                      <Link className='waves-effect' to='#!'>
                        Second
                      </Link>
                    </li>
                    <li>
                      <Link className='waves-effect' to='#!'>
                        Third
                      </Link>
                    </li>
                    <li>
                      <Link className='waves-effect' to='#!'>
                        Fourth
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li className='no-padding'>
            <ul className='collapsible collapsible-accordion'>
              <li>
                <Link className='collapsible-header waves-effect'>
                  Dropdown<i className='material-icons'>folder</i>
                </Link>
                <div className='collapsible-body'>
                  <ul>
                    <li>
                      <Link className='waves-effect' to='#!'>
                        First
                      </Link>
                    </li>
                    <li>
                      <Link className='waves-effect' to='#!'>
                        Second
                      </Link>
                    </li>
                    <li>
                      <Link className='waves-effect' to='#!'>
                        Third
                      </Link>
                    </li>
                    <li>
                      <Link className='waves-effect' to='#!'>
                        Fourth
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
