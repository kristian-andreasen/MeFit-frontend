import { NavLink } from 'react-router-dom';

function ContributorTabs() {
  return (
    <nav className='tabs-container'>
      <ul className='tabs-list'>
        <li className='dashboard-tab'>
          <p>
            <NavLink
              to='/contribute-program'
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Programs
            </NavLink>
          </p>
        </li>
        <li className='goals-tab'>
          <NavLink
            to='/contribute-workout'
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Workouts
          </NavLink>
        </li>
        <li className='programs-tab'>
          <NavLink
            to='/contribute-exercise'
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Exercises
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ContributorTabs;
