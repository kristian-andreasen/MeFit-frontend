import './CompletedGoalsList.css';






import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGoals } from '../../api/fetchGoals';
import { GoalsList } from '../../context/GoalsContext';



function CompletedGoalsList() {
  const [goalsList, setGoalsList] = useContext(GoalsList);
  const { id } = useParams();

  return (
    <section className='active-goals-list-container'>
      <h2 className='active-goals-title'>Completed goals</h2>
      {true ? (
        <ul className='goals-list' id='goal'>
          {goalsList.map((goal) => goal.achieved&&(
            <>
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
            </>
          ))}
        </ul>
      ) : (
        <p>You have not completed any goals.</p>
      )}
    </section>
  );
}

export default CompletedGoalsList;

