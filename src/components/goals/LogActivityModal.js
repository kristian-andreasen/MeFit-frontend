import './LogActivityModal.css';
import { motion, AnimatePresence } from 'framer-motion';
import Backdrop from '../Backdrop';

import { useState, useEffect } from 'react';
import ModalButton from '../ModalButton';
import GoalSelect from './GoalSelect';
import { updateGoalAchieved } from '../../api/updateGoal';



function LogActivityModal({ handleClose }) {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [completedWorkouts, setCompletedWorkouts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedGoal(selectedOption);
    //console.log(selectedOption.program.workouts);
    //setCheckedWorkoutIds([]);
  };


  useEffect(() => {
    if (
      selectedGoal &&
      selectedGoal.program &&
      completedWorkouts.length === selectedGoal.program.workouts.length
    ) {
      console.log('All workouts completed!');
      const goalId = selectedGoal.id;
      //const achieved = true;
      console.log(goalId)
      updateGoalAchieved(goalId)
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
        window.location.reload(); //refresh the page
    }
  }, [selectedGoal, completedWorkouts]);

  const handleWorkoutChange = (e) => {
    const { value, checked } = e.target;
    if (checked && !completedWorkouts.includes(value)) {
      setCompletedWorkouts([...completedWorkouts, value]);
      localStorage.setItem('completedWorkouts', JSON.stringify([...completedWorkouts, value]));
    } else if (!checked && completedWorkouts.includes(value)) {
      setCompletedWorkouts(completedWorkouts.filter((id) => id !== value));
      localStorage.setItem('completedWorkouts', JSON.stringify(completedWorkouts.filter((id) => id !== value)));
    }
    
    e.target.checked = completedWorkouts.includes(value);

    if (
      selectedGoal &&
      selectedGoal.program &&
      completedWorkouts.length === selectedGoal.program.workouts.length
    ) {
      console.log('All workouts completed!');
      const goalId = selectedGoal.id;
      //const achieved = true;
      //console.log(goalId);
      updateGoalAchieved(goalId)
        .then((data) => console.log(data, goalId))
        .catch((error) => console.error(error));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //await deleteGoal(selectedGoal.id);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Backdrop onClick={handleClose} className='modal orange-gradient'>
      <motion.div
        onClick={handleModalClick}
        className='modal orange-gradient'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <h2>Select a goal to delete</h2>
        <form onSubmit={handleSubmit} className='create-goal-form'>
          <GoalSelect onSelect={handleSelectChange} />
          {selectedGoal && selectedGoal.program && (
            <ul>
              {selectedGoal.program.workouts.map((workout) => (
                <li key={workout.id}>
                  <input
                    type='checkbox'
                    id={workout.id}
                    name='workout'
                    value={workout.id}
                    onChange={handleWorkoutChange}
                    checked={completedWorkouts.includes(workout.id.toString())}
                  />
                  <label htmlFor={workout.id}>{workout.name}</label>
                </li>
              ))}
            </ul>
          )}
          <button type='submit' className='submit-button-delete'>
            Log Activity
          </button>
        </form>
        <ModalButton onClick={handleClose} label='Close' />
      </motion.div>
    </Backdrop>
  );
}

export default LogActivityModal;
