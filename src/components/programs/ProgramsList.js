import { NavLink } from 'react-router-dom';
import program1 from '../../assets/programs/plan_img_2_the-all-rounder_20_09_2022_16_00_59.jpeg';
import program2 from '../../assets/programs/plan_img_515_create-you_19_12_2022_17_21_50.jpeg';
import program3 from '../../assets/programs/plan_img_534_running-foundations_15_01_2023_00_57_40.jpeg';
import program4 from '../../assets/programs/plan_img_537_strength-within_16_02_2023_09_06_38.png';
import './ProgramsList.css';

function ProgramsList() {
  return (
    <>
      <ul className='program-list'>
        <li className='program-item'>
          <NavLink to='/program'>
            <div className='program-item-overlay'>
              <h4 className='program-item-title'>The All Rounder</h4>
              <div className='program-item-details'>
                <p className='program-item-duration'>8 weeks</p>
              </div>
            </div>
            <img src={program1} alt='plan_image' className='program-image' />
          </NavLink>
        </li>

        <li className='program-item'>
          <NavLink to='/program'>
            <div className='program-item-overlay'>
              <h4 className='program-item-title'>Strength Within</h4>
              <div className='program-item-details'>
                <p className='program-item-duration'>6 weeks</p>
              </div>
            </div>

            <img src={program2} alt='plan_image' className='program-image' />
          </NavLink>
        </li>
        <li className='program-item'>
          <NavLink to='/program'>
            <div className='program-item-overlay'>
              <h4 className='program-item-title'>Running Foundations</h4>
              <div className='program-item-details'>
                <p className='program-item-duration'>8 weeks</p>
              </div>
            </div>
            <img src={program3} alt='plan_image' className='program-image' />
          </NavLink>
        </li>
        <li className='program-item'>
          <NavLink to='/program'>
            <div className='program-item-overlay'>
              <h4 className='program-item-title'>Arnold</h4>
              <div className='program-item-details'>
                <p className='program-item-duration'>16 weeks</p>
              </div>
            </div>
            <img src={program4} alt='plan_image' className='program-image' />
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default ProgramsList;
