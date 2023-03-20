import { useEffect, useState } from 'react';
import { getCurrentGoals } from '../../api/fetchUserData';

function GoalSelect() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [, data] = await getCurrentGoals();
      setGoals(data);
    };
    fetchData();
  }, []);

  return (
    <form>
      <label htmlFor='goal'>Select Goal:</label>
      <select name='goal' id='goal'>
        <option value=''>--Select Goal--</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.name}>
            {goal.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default GoalSelect;
