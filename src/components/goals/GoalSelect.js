import { useEffect, useState } from 'react';
import { getGoalById } from '../../api/fetchUserData';

import './GoalSelect.css'

function GoalSelect() {
  const [goal, setGoal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [, data] = await getGoalById();
      setGoal(data);
    };
    fetchData();
  }, []);

  return (
    <form className='select-current-goal-form'>
      <select name='goal' id='goal'>
        <option value=''>--Select Goal--</option>
        {goal.map((goal) => (
          <option key={goal.id} value={goal.name}>
            {goal.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default GoalSelect;
