import { motion, AnimatePresence } from 'framer-motion';

import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTabs from '../components/profile/ProfileTabs';

import './Goals.css';
import { useState } from 'react';
import GoalFormModal from '../components/goals/GoalFormModal';
import ActiveGoalsList from '../components/goals/ActiveGoalsList';
import { NavLink } from 'react-router-dom';
import LogActivityModal from '../components/goals/LogActivityModal';
import CompletedGoalsList from '../components/goals/CompletedGoalsList';
import DeleteGoalsModal from '../components/goals/DeleteGoalsModal';


function Goals() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activityModalOpen, setActivityModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const closeActivityModal = () => setActivityModalOpen(false);
  const openActivityModal = () => setActivityModalOpen(true);
  const closeDeleteModal = () => setDeleteModalOpen(false);
  const openDeleteModal = () => setDeleteModalOpen(true);

  return (
    <>
      <ProfileHeader />
      <main className='main-content-area'>
        <ProfileTabs />

        <ActiveGoalsList />
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
            <GoalFormModal modalOpen={modalOpen} handleClose={close} />
          )}
        </div>

        <div className='log-activity-container'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='open-modal-button'
            onClick={() =>
              activityModalOpen ? closeActivityModal() : openActivityModal()
            }
          >
            Log Activity
          </motion.button>
          {activityModalOpen && (
            <LogActivityModal
              activityModalOpen={activityModalOpen}
              handleClose={closeActivityModal}
            />
          )}
        </div>

        <div className='delete-goal-container'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='open-modal-button-delete'
            onClick={() => (deleteModalOpen ? closeDeleteModal() : openDeleteModal())}
          >
            Delete
          </motion.button>

          {deleteModalOpen && (
            <DeleteGoalsModal deleteModalOpen={deleteModalOpen} handleClose={closeDeleteModal} />
          )}
        </div>




        <AnimatePresence
          initial={false}
          mode='wait'
          onExitComplete={() => null}
        ></AnimatePresence>

        <CompletedGoalsList />

        <section className='explore'>
          <h2 className='explore-title'>Explore</h2>
          <p>
            Explore our{' '}
            <NavLink to='/programs' className='explore-link'>
              {' '}
              programs
            </NavLink>
            ,
            <NavLink to='/workouts' className='explore-link'>
              {' '}
              workouts
            </NavLink>{' '}
            and{' '}
            <NavLink to='/workouts' className='explore-link'>
              {' '}
              exercises!
            </NavLink>
          </p>
        </section>

        <section className='suggestions'>
          <h2 className='suggestions-title'>Suggestions</h2>
          <p>workout recommendations tailored just for you!</p>
        </section>
      </main>
    </>
  );
}

export default Goals;
