import { getAllPrograms } from '../../api/fetchProgramData';
import { useEffect, useState } from 'react';

function SelectProgram() {
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
    <select>
      <option>-- Select --</option>
      {programs.map((program) => (
        <option className='program-item' key={program.id}>
          {program.name}
        </option>
      ))}
    </select>
  );
}

export default SelectProgram;
