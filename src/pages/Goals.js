import ProfileHeader from './profile/ProfileHeader';
import ProfileTabs from './profile/ProfileTabs';

import './Goals.css';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import { useState } from 'react';

function Goals() {
  const [isGoalSet, setIsGoalSet] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSetGoal = () => {
    const today = new Date();
    const weekAhead = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // add 7 days

    setIsGoalSet(true);
    setStartDate(today.toLocaleDateString());
    setDeadline(weekAhead.toLocaleDateString());
  };

  return (
    <>
      <ProfileHeader />
      <main className='main-content-area'>
        <ProfileTabs />
        <section className='goals-section'>
          <h1 className='my-goals-title'>My goals:</h1>
          <div className='active-goals'>
            <h2>Active Goals</h2>
          </div>
          {!isGoalSet && (
            <button onClick={handleSetGoal}>Create New Goal!</button>
          )}
          {isGoalSet && (
            <>
              <p>Start date: {startDate}</p>
              <p>Deadline: {deadline}</p>
            </>
          )}

          <div className='schedule'>
            <h2>Schedule</h2>
            <p>upcoming activities</p>
          </div>
          <div className='log-workouts'>
            <h2>Log An Activity</h2>
            <button type='submit'>Log Workout</button>
          </div>
          <h2 className='previous-goals'>Previous Goals</h2>
          <div className='explore'>
            <h2>Explore</h2>
            <p>Explore our programs, workouts, and exercises!</p>
          </div>
          <h2>Suggestions</h2>
          <p>workout recommendations tailored just for you!</p>
        </section>
      </main>
    </>
  );
}

export default Goals;
