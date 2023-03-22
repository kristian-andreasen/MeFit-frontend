import { getCurrentGoals } from '../../api/fetchUserData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ActiveGoalsList.css';

function ActiveGoalsList() {
  const [goal, setGoal] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // fetch the list of programs when the component mounts
    async function fetchGoal() {
      const [, data] = await getCurrentGoals(id);
      setGoal(data);
    }
    fetchGoal();
  }, [id]);

  return (
    <section className='active-goals-list-container'>
      <h2 className='active-goals-title'>Active Goals</h2>
      <p>Your current active goal (only 1 goal at a time):</p>
      {goal && (
        <div>
          <h2>{goal.name}</h2>
          <p>Start date: {goal.startDate}</p>
          <p>End date: {goal.endDate}</p>
        </div>
      )}
    </section>
  );
}

export default ActiveGoalsList;
