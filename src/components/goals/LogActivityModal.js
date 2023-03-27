import './LogActivityModal.css';
import { motion, AnimatePresence } from 'framer-motion';
import Backdrop from '../Backdrop';

import { useState } from 'react';
import ModalButton from '../ModalButton';
import GoalSelect from './GoalSelect';

function LogActivityModal({ handleClose }) {
  const [selectedGoal,setSelectedGoal] = useState(null);
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
      console.log(selectedGoal);
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
              <GoalSelect onSelect={handleSelectChange}/>
          <button type='submit' className='submit-button-delete'>
              Delete
          </button>
          </form>
          <ModalButton onClick={handleClose} label='Close' />
      </motion.div>
      </Backdrop>
  );
}

export default LogActivityModal;
