import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGoals } from '../../api/fetchGoals';

import './ActiveGoalsList.css';

function ActiveGoalsList() {
  const [goals, setGoals] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getGoals() {
      const [, data] = await fetchGoals();
      console.log(data);
      setGoals(data);
    }
    getGoals();
  }, []);

  return (
    <section className='active-goals-list-container'>
      <h2 className='active-goals-title'>Active Goals</h2>
      {goals.length > 0 ? (
        <ul className='goals-list' id='goal'>
          {goals.map((goal) => (
            <li key={goal.id}>
              <div className='goal-details'>
                <h3 className='goal-name'>{goal.name}</h3>
                <p className='goal-start-date'>Start Date: {goal.startDate}</p>
                <p className='goal-end-date'>End Date: {goal.endDate}</p>
                <p className='goal-achieved'>
                  {goal.achieved ? 'Achieved' : 'Not Achieved'}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No active goals.</p>
      )}
    </section>
  );
}

export default ActiveGoalsList;
