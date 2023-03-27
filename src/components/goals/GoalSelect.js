import { useEffect, useState } from 'react';
import { getCurrentGoals } from '../../api/fetchUserData';

import './GoalSelect.css'
import './../../api/fetchGoals'
import { fetchGoals } from './../../api/fetchGoals';

function GoalSelect({ onSelect }) {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const getGoals = async () => {
      const [, data] = await fetchGoals();
      setGoals(data);
    };
    getGoals();
  }, []);

  const handleSelectChange = (event) =>{
    const goalId = event.target.value;
    const goal = goals.find((g) => g.id === Number(goalId));
    console.log(goal);
    onSelect(goal);
    
  }


  return (
      <select onChange={handleSelectChange}>
        <option value=''>--Select Goal--</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>
  );
}

export default GoalSelect;
