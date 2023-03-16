import React, { useState } from 'react';
import './GoalFormModal.css';

function GoalFormModal({ onClose }) {
  const [goalName, setGoalName] = useState('');
  const [startDate, setStartDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here, e.g., save to the database
    console.log('Goal Name:', goalName);
    console.log('Start Date:', startDate);
    onClose();
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <button className='close' onClick={onClose}>
          &times;
        </button>
        <h2>Create a New Goal</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='goalName'>Goal Name:</label>
          <input
            type='text'
            id='goalName'
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            required
          />

          <label htmlFor='startDate'>Start Date:</label>
          <input
            type='date'
            id='startDate'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />

          <button type='submit'>Save Goal</button>
        </form>
      </div>
    </div>
  );
}

export default GoalFormModal;
