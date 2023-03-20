import './ActiveGoalsList.css';

function ActiveGoalsList() {
  return (
    <section className='active-goals-list-container'>
      <h2 className='active-goals-title'>Active Goals</h2>
      <p>Your current active goals</p>
      <ul className='active-goals-list'>
        <li className='active-goals-item'>
          <input type='checkbox' />
          <label> A goal can be a program or workout</label>
          <button>delete</button>
        </li>
        <li className='active-goals-item'>
          <input type='checkbox' />
          <label> A goal can be a program or workout</label>
          <button>delete</button>
        </li>
      </ul>
    </section>
  );
}

export default ActiveGoalsList;
