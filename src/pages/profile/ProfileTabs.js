import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './ProfileTabs.css';

function ProfileTabs() {
  const [activeTab, setActiveTab] = useState('pro-plans');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <nav className='tabs-container'>
      <ul className='tabs-list'>
        <li className='dashboard-tab'>
          <NavLink to='/dashboard'>Dashboard</NavLink>
        </li>
        <li className='goals-tab'>
          <NavLink to='/goals'>Goals</NavLink>
        </li>
        <li className='programs-tab'>
          <NavLink to='/programs'>Programs</NavLink>
        </li>
        <li className='workouts-tab'>
          <NavLink to='/workouts'>Workouts</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ProfileTabs;
