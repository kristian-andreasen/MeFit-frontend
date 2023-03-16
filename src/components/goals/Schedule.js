import './Schedule.css'

function Schedule() {
  return (
    <section className='schedule-container'>
      <h2 className='schedule-title'>Schedule</h2>
      <p>Your upcoming activites:</p>
      <ul className='schedule-list'>
        <li className='schedule-item'>Workout</li>
        <li className='schedule-item'>Workout</li>
      </ul>
      <button className='create-goal-button'>Create Goal</button>
    </section>
  );
}

export default Schedule;
