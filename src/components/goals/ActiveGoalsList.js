import { getGoalById } from '../../api/fetchUserData';
import { useEffect, useState } from 'react';

import './ActiveGoalsList.css';

function ActiveGoalsList() {
  const [goal, setGoal] = useState(null);

  useEffect(() => {
    // fetch the list of programs when the component mounts
    async function fetchGoal() {
      const [, data] = await getGoalById(userId);
      setGoal(data);
    }
    fetchGoal();
  }, [userId]);

  return (
    <section className='active-goals-list-container'>
      <h2 className='active-goals-title'>Active Goals</h2>
      <p>Your current active goal (only 1 goal at a time):</p>
      <ul className='active-goals-list'>
        {goal.map((goal) => (
          <li className='active-goals-item' key={goal.id}>
            <label> {goal.name}</label>

            <button>delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ActiveGoalsList;
