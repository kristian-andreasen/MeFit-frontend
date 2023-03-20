import './CompletedGoalsList.css';

function CompletedGoalsList() {
  return (
    <section className='completed-goals-container'>
      <h2 className='completed-goals-title'>Completed Goals</h2>
      <ul className='completed-goals-list'>
        <li className='completed-goals-item'>completed goal 1</li>
        <li className='completed-goals-item'>completed goal 2</li>
      </ul>
      <p>Your accomplished goals</p>
    </section>
  );
}

export default CompletedGoalsList;
