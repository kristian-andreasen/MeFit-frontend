import { NavLink } from 'react-router-dom';

/*import program1 from '../../assets/programs/plan_img_2_the-all-rounder_20_09_2022_16_00_59.jpeg';
import program2 from '../../assets/programs/plan_img_515_create-you_19_12_2022_17_21_50.jpeg';
import program3 from '../../assets/programs/plan_img_534_running-foundations_15_01_2023_00_57_40.jpeg';
import program4 from '../../assets/programs/plan_img_537_strength-within_16_02_2023_09_06_38.png';*/

import './ProgramsList.css';

import { getAllPrograms } from '../../api/fetchProgramData';

import { useEffect, useState } from 'react';

function ProgramsList() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    // fetch the list of programs when the component mounts
    async function fetchPrograms() {
      const [, data] = await getAllPrograms();
      setPrograms(data);
    }
    fetchPrograms();
  }, []);
  return (
    <>
      <ul className='program-list'>
        {programs.map((program) => (
          <li className='program-item' key={program.id}>
            <NavLink to={`/program/${program.id}`}>
              <div className='program-item-overlay'>
                <h4 className='program-item-title'>{program.name}</h4>
              </div>
              <img src={program.imageURL} alt={program.name} />
              {/* display any other program information that you want */}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProgramsList;
