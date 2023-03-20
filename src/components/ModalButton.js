import { motion } from 'framer-motion';



import './ModalButton.css'

const ModalButton = ({ onClick, label }) => (
  <motion.button
    className='modal-button'
    type='button'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    
  >
    {label}
  </motion.button>
);

export default ModalButton;
