import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './ProfileTabs.css';

function ProfileTabs() {
  return (
    <nav className='tabs-container'>
      <ul className='tabs-list'>
        <li className='dashboard-tab'>
          <p>
            <NavLink
              to='/dashboard'
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Dashboard
            </NavLink>
          </p>
        </li>
        <li className='goals-tab'>
          <NavLink
            to='/goals'
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Goals
          </NavLink>
        </li>
        <li className='programs-tab'>
          <NavLink
            to='/programs'
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Programs
          </NavLink>
        </li>
        <li className='workouts-tab'>
          <NavLink
            to='/workouts'
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Workouts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ProfileTabs;
