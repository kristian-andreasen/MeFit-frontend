import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';

import { postGoal } from '../../api/postGoal';

import { useState } from 'react';
import './GoalFormModal.css';
import ModalButton from '../ModalButton';
import SelectProgram from '../programs/SelectProgram';

function GoalFormModal({ handleClose }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [goalName, setGoalName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(null);

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
    //setStartDate(event.target.value);

    const startDate = event.target.value;
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(
      startDateObj.setDate(startDateObj.getDate() + 7)
    );

    setStartDate(startDate);
    setEndDate(endDateObj.toISOString().slice(0, 10)); // Format date as YYYY-MM-DD
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedProgram(selectedOption);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with form data
    let goalData = {
      name: goalName,
      startDate: startDate,
      endDate: endDate,
      program: selectedProgram // Add selected program to request payload
    };

    const newGoal = await postGoal(goalData);
    console.log('New goal created:', newGoal);

    // reset the form fields
    setGoalName('');
    setStartDate('');
    setEndDate('');
    setSelectedProgram(null);
    //close();
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
        <h2>Create Weekly Goal</h2>
        <form onSubmit={handleSubmit} className='create-goal-form'>
          <label htmlFor='goalName'>Goal Name</label>
          <input
            type='text'
            id='goalName'
            value={goalName}
            onChange={handleGoalNameChange}
          />
          <label>Program</label>
          <SelectProgram onSelect={handleSelectChange} /> {/* Pass handleProgramChange as a prop */}
          <label htmlFor='startDate'>Start Date</label>
          <input
            type='date'
            id='startDate'
            value={startDate}
            onChange={handleStartDateChange}
          />
          <label htmlFor='endDate'>End Date</label>
          <input type='date' id='endDate' value={endDate} readOnly />
          <button type='submit' className='submit-button'>
            Create Goal
          </button>
        </form>
        <ModalButton onClick={handleClose} label='Close' />
      </motion.div>
    </Backdrop>
  );
}

export default GoalFormModal;
