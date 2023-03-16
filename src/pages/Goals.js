import ProfileHeader from './profile/ProfileHeader';
import ProfileTabs from './profile/ProfileTabs';

import './Goals.css';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import { useState } from 'react';
import GoalFormModal from '../components/goals/GoalFormModal';
import ActiveGoalsList from '../components/goals/ActiveGoalsList';
import LogActivity from '../components/goals/LogActivity';
import Schedule from '../components/goals/Schedule';

function Goals() {
  return (
    <>
      <ProfileHeader />
      <main className='main-content-area'>
        <ProfileTabs />
        <ActiveGoalsList />
        <Schedule />
        <LogActivity />
        <div className='previous-goals'>
          <h2>Completed Goals</h2>
          <p>Your accomplished goals</p>
        </div>
        <div className='explore'>
          <h2>Explore</h2>
          <p>Explore our programs, workouts, and exercises!</p>
        </div>
        <div className='suggestions'>
          <h2>Suggestions</h2>
          <p>workout recommendations tailored just for you!</p>
        </div>
      </main>
    </>
  );
}

export default Goals;
