import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AuthUserActionCreators } from '../actions/index';
import '../styles/navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.authedReducer);

  const { setAuthUser } = bindActionCreators(AuthUserActionCreators, dispatch);
  const user = loggedInUser.authedUser;

  const handleLogout = () => {
    setAuthUser(null);
  };
  return (
    <div className='nav'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <NavLink to='/home' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li className='nav-item logout'>
          <NavLink to='/' exact activeClassName='active' onClick={handleLogout}>
            Log out
          </NavLink>
        </li>
        <li className='user-greeting'>
          <span>Hey, {user}!</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
