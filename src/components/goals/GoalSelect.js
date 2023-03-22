import { useEffect, useState } from 'react';
import { getCurrentGoals } from '../../api/fetchUserData';

import './GoalSelect.css'

function GoalSelect() {
  const [goal, setGoals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [, data] = await getCurrentGoals();
      setGoals(data);
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
