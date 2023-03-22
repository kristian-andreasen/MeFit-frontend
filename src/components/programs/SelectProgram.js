import { getAllPrograms } from '../../api/fetchProgramData';
import { useEffect, useState } from 'react';

function SelectProgram({ onSelect }) {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    // fetch the list of programs when the component mounts
    async function fetchPrograms() {
      const [, data] = await getAllPrograms();
      setPrograms(data);
    }
    fetchPrograms();
  }, []);
  
  const handleSelectChange = (e) => {
    const programId = parseInt(e.target.value);
    const selectedProgram = programs.find((program) => program.id === programId);
    console.log(selectedProgram); // should log the selected program object
    onSelect(selectedProgram);
  };

  return (
    <select onChange={handleSelectChange}>
      <option value="">-- Select --</option>
      {programs.map((program) => (
        <option className='program-item' key={program.id} value={program.id}>
          {program.name}
        </option>
      ))}
    </select>
  );
}

export default SelectProgram;
