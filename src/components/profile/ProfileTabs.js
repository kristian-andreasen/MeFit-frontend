import { useState } from 'react';

import './ProfileTabs.css';

function ProfileTabs() {
  const [activeTab, setActiveTab] = useState('pro-plans');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <nav className='tabs-container'>
      <ul className='tabs-list'>
        <li className='dashboard-tab'>Dashboard</li>
        <li className='goals-tab'>Goals</li>
        <li className='programs-tab'>Programs</li>
        <li className='workouts-tab'>Workouts</li>
      </ul>
    </nav>
  );
}

export default ProfileTabs;
