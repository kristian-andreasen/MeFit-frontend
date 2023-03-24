import ProfileHeader from '../profile/ProfileHeader';
import ProfileTabs from '../profile/ProfileTabs';
import { motion, AnimatePresence } from 'framer-motion';

import { getProgramById } from '../../api/fetchProgramData';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import './Program.css';
import Loading from '../loading/Loading';
import GoalFormModal from '../goals/GoalFormModal';

function Program() {
  const { id } = useParams(); // get the program id from the URL
  const [program, setProgram] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activityModalOpen, setActivityModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const closeActivityModal = () => setActivityModalOpen(false);
  const openActivityModal = () => setActivityModalOpen(true);

  useEffect(() => {
    async function fetchProgram() {
      const [, data] = await getProgramById(id); // fetch program by id
      setProgram(data);

    }
    fetchProgram();
  }, [id]);

  return (
    <>
      <ProfileHeader />
      <ProfileTabs />
      {program && (
        <main className='program-details-page'>
          <section className='program-details'>
            <div>
              <h1 className='program-title'>{program.name}</h1>
              <p className='program-creator'>by {program.author}</p>
            </div>
            <p className='program-description'>{program.description}</p>
            <div className='create-goal-container'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='open-modal-button'
            onClick={() => (modalOpen ? close() : open())}
          >
            Create Goal
          </motion.button>

          {modalOpen && (
            <GoalFormModal modalOpen={modalOpen} handleClose={close}/>
          )}
        </div>
            <div className='workout-details'>
              <p>Workouts:</p>
              <ul className='workouts-list'>
                {program.workouts.map((workout) => (
                  <li key={workout.id} className='workout-item'>
                    <p>{workout.name}</p>
                    <NavLink to={`/workouts/${workout.id}`}>
                      <button>View Workout</button>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default Program;
