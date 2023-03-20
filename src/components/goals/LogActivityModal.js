import './LogActivityModal.css';
import { motion, AnimatePresence } from 'framer-motion';
import Backdrop from '../Backdrop';

import { useState } from 'react';
import ModalButton from '../ModalButton';
import GoalSelect from './GoalSelect';

function LogActivityModal({ handleClose, text }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [goalName, setGoalName] = useState('');
  const [startDate, setStartDate] = useState('');

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

  const handleGoalNameChange = (event) => {
    setGoalName(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with form data
    close();
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
        <h2>Log Activity</h2>
        <form onSubmit={handleSubmit} className='create-goal-form'>
            <select name="goal">
                <option>--Select Goal--</option>
                <option>goal 1</option>
                <option>goal 2</option>
            </select>
            <GoalSelect />
          <button type='submit' className='submit-button'>
            Log Activity
          </button>
        </form>
        <ModalButton onClick={handleClose} label='Close' />
      </motion.div>
    </Backdrop>
  );
}

export default LogActivityModal;
